import { Conditional, Handler, Inventory, MagicVariable, Play, Project, ProjectProps, Role, SimpleVariable, Task } from 'cdk-ans';
import { Construct } from 'constructs';
import { AptAction } from '../../imports/ansible-builtin-apt';
import { AptKeyAction } from '../../imports/ansible-builtin-apt-key';
import { AptRepositoryAction } from '../../imports/ansible-builtin-apt-repository';
import { BlockinfileAction } from '../../imports/ansible-builtin-blockinfile';
import { CopyAction } from '../../imports/ansible-builtin-copy';
import { FileAction, FileState } from '../../imports/ansible-builtin-file';
import { LineinfileAction } from '../../imports/ansible-builtin-lineinfile';
import { MetaAction, MetaFreeForm } from '../../imports/ansible-builtin-meta';
import { PipAction } from '../../imports/ansible-builtin-pip';
import { RebootAction } from '../../imports/ansible-builtin-reboot';
import { ServiceAction, ServiceState } from '../../imports/ansible-builtin-service';
import { SetFactAction } from '../../imports/ansible-builtin-set-fact';
import { UriAction } from '../../imports/ansible-builtin-uri';
import { UserAction } from '../../imports/ansible-builtin-user';
import { AuthorizedKeyAction } from '../../imports/ansible-posix-authorized-key';
import { DockerContainerAction, DockerContainerRestartPolicy } from '../../imports/community-docker-docker-container';
import { DockerPruneAction } from '../../imports/community-docker-docker-prune';
export interface PiholeHaProjectProps extends ProjectProps {
  // readonly inventory: (scope: Construct) => Inventory;
}

export class PiholeHaProject extends Project {
  constructor(scope: Construct, name: string, props: PiholeHaProjectProps) {
    super(scope, name, props);
    const inventory = new Inventory(this, 'inventory', {});

    this.makePlaybook(name, inventory);

    this.makeBootstrapRole();
    this.makeDockerRole();
    this.makePiholeRole();
  }

  private makeBootstrapRole() {
    const reboot = new Handler(this, 'reboot-after-hostname', {
      action: new RebootAction({
        rebootTimeout: 300,
      }),
    });

    const restartDhcpcd = new Handler(this, 'restart-dhcpcd', {
      action: new ServiceAction({
        name: 'dhcpcd',
        state: ServiceState.RESTARTED,
      }),
    });

    const addSshKey = new Task(this, 'add-ssh-key', {
      action: new AuthorizedKeyAction({
        key: 'https://github.com/{{ github_user_for_ssh_key }}.keys',
        user: MagicVariable.AnsibleUser,
        comment: 'github{{ github_user_for_ssh_key }}',
      }),
    });

    const lockPassword = new Task(this, 'lock-password', {
      action: new UserAction({
        name: MagicVariable.AnsibleUser,
        passwordLock: true,
      }),
    });

    const bashrcForUser = new Task(this, 'bashrc-for-user', {
      action: new BlockinfileAction({
        path: `/home/${MagicVariable.AnsibleUser.asVariable()}/.bashrc`,
        block: 'alias ll=\'ls -la\'',
      }),
    });

    const setTimezone = new Task(this, 'set-timezone', {
      action: new LineinfileAction({
        path: '/etc/timezone',
        regexp: '^',
        line: SimpleVariable.of('timezone'),
      }),
    });

    const setLocaltime = new Task(this, 'set-localtime', {
      action: new FileAction({
        src: '/usr/share/zoneinfo/{{ timezone }}',
        path: '/etc/localtime',
        state: FileState.LINK,
      }),
    });

    const setHostname = new Task(this, 'set-hostname', {
      action: new LineinfileAction({
        path: '/etc/hostname',
        regexp: '^',
        line: MagicVariable.InventoryHostname,
      }),
      notify: [reboot],
    });

    const setHosts = new Task(this, 'set-hosts', {
      action: new LineinfileAction({
        path: '/etc/hosts',
        regexp: '^',
        line: '127.0.0.1 {{ inventory_hostname }}',
      }),
      notify: [reboot],
    });

    const setCustomDns = new Task(this, 'set-custom-dns', {
      action: new BlockinfileAction({
        path: '/etc/dhcpcd.conf',
        block: 'static domain_name_servers={{ static_dns }}',
      }),
      notify: [restartDhcpcd],
    });

    const flush = new Task(this, 'flush', {
      action: new MetaAction({
        freeForm: MetaFreeForm.FLUSH_HANDLERS,
      }),
    });

    return new Role(this, 'bootstrap', {
      handlers: [reboot],
      tasks: addSshKey
        .next(lockPassword)
        .next(bashrcForUser)
        .next(setTimezone)
        .next(setLocaltime)
        .next(setHostname)
        .next(setHosts)
        .next(setCustomDns)
        .next(flush),
    });
  }

  private makeDockerRole(): Role {
    // translated from https://github.com/shaderecker/ansible-pihole/blob/master/roles/docker/tasks/main.yaml

    const handler = new Handler(this, 'restart-docker', {
      action: new ServiceAction({
        name: 'docker',
        state: ServiceState.RESTARTED,
      }),
    });


    const installDocker = new Task(this, 'install-dependencies', {
      action: new AptAction({
        name: ['gnupg2', 'software-properties-common'],
        forceAptGet: true,
      }),
    });

    const addDockerAptKey = new Task(this, 'add-docker-apt-key', {
      action: new AptKeyAction({
        url: 'https://download.docker.com/linux/raspbian/gpg',
        id: '9DC858229FC7DD38854AE2D88D81803C0EBFCD88',
      }),
    });

    const addDockerAptRepo = new Task(this, 'add-docker-apt-repo', {
      action: new AptRepositoryAction({
        repo: 'deb https://download.docker.com/linux/raspbian {{ ansible_distribution_release }} stable',
        filename: 'docker',
      }),
    });

    const installDockerCe = new Task(this, 'install-docker-ce', {
      action: new AptAction({
        name: ['docker-ce:armhf', 'python3-setuptools'],
        forceAptGet: true,
        installRecommends: false,
      }),
    });

    const installDockerPython = new Task(this, 'install-docker-python', {
      action: new PipAction({
        name: ['docker'],
      }),
    });

    const addUserToDockerGroup = new Task(this, 'add-user-to-docker-group', {
      action: new UserAction({
        name: MagicVariable.AnsibleUser,
        group: 'docker',
        append: true,
      }),
    });

    const enableDockerIpv6 = new Task(this, 'enable-docker-ipv6', {
      action: new CopyAction({
        dest: '/etc/docker/daemon.json',
        content: '{ "ipv6": true, "fixed-cidr-v6": "2001:db8:1::/64" }',
        mode: '0600',
      }),
      notify: [handler],
    });

    const flush = new Task(this, 'docker-flush', {
      action: new MetaAction({
        freeForm: MetaFreeForm.FLUSH_HANDLERS,
      }),
    });

    return new Role(this, 'docker', {
      tasks: installDocker
        .next(addDockerAptKey)
        .next(addDockerAptRepo)
        .next(installDockerCe)
        .next(installDockerPython)
        .next(addUserToDockerGroup)
        .next(enableDockerIpv6)
        .next(flush),
      handlers: [handler],
    });
  }

  private makePiholeRole(): Role {
    // translated from https://github.com/shaderecker/ansible-pihole/blob/master/roles/pihole/tasks/main.yaml
    const createDirectory = new Task(this, 'create-directory', { // TODO: consider name overrider for task to set not as node id
      action: new FileAction({
        path: '/home/{{ ansible_user }}/pihole', // TODO: think about making some sort of String wrapper that can be templated with a var?
        owner: MagicVariable.AnsibleUser,
        group: '{{ ansible_user }}',
        state: FileState.DIRECTORY,
        mode: '0755',
      }),
    });

    const getIpv6Local = new Task(this, 'get-ipv6-local', {
      action: new SetFactAction({
        keyValue: { // TODO: figure out how to make this better
          ipv6: '{{ item.address }}', // TODO: consider ansible item wrapper that exposes these as properties and formats as the dynamic string
        },
      }),
      loop: "{{ vars['ansible_' + ansible_default_ipv6.interface | default(ansible_default_ipv4.interface)].ipv6 }}", // TODO: understand this :)
      loopControl: { // TODO: make interface for loop control
        label: MagicVariable.Item.property('address'),
      },
      when: Conditional.in('link', 'item.scope'),
    });

    const determineHostIpsHa = new Task(this, 'determine-host-ips-ha', {
      action: new SetFactAction({
        keyValue: {
          pihole_local_ipv4: "{{ pihole_vip_ipv4.split('/')[0] }}",
          pihole_local_ipv6: "{{ pihole_vip_ipv6.split('/')[0] }}",
          execution_mode: 'HA setup with keepalived',
        },
      }),
      when: Conditional.bool('pihole_ha_mode'),
    });

    const determineHostIpSingle = new Task(this, 'determine-host-ips-single', {
      action: new SetFactAction({
        keyValue: {
          pihole_local_ipv4: MagicVariable.AnsibleHost,
          pihole_local_ipv6: '{{ ipv6 }}',
          execution_mode: 'HA setup with keepalived',
        },
      }),
      when: Conditional.notBool('pihole_ha_mode'),
    });

    const startDocker = new Task(this, 'start-update-docker', { // TODO: make docker task
      action: new DockerContainerAction({
        name: 'pihole',
        image: '{{ pihole_image }}',
        pull: true,
        restartPolicy: DockerContainerRestartPolicy.ALWAYS,
        env: {
          TZ: '{{ timezone }}',
          WEBPASSWORD: '{{ pihole_webpassword }}',
          PIHOLE_DNS_: '{{ pihole_dns }}',
          DNSMASQ_LISTENING: 'local',
          REV_SERVER: '{{ pihole_rev_server }}',
          REV_SERVER_DOMAIN: '{{ pihole_rev_server_domain }}',
          REV_SERVER_TARGET: '{{ pihole_rev_server_target }}',
          REV_SERVER_CIDR: '{{ pihole_rev_server_cidr }}',
          FTLCONF_MAXDBDAYS: '{{ pihole_ftl_max_db_days }}',
        },
        dnsServers: ['127.0.0.1', '{{ static_dns }}'],
        networkMode: 'host',
        volumes: ['/home/{{ ansible_user }}/pihole/pihole/:/etc/pihole/', '/home/{{ ansible_user }}/pihole/dnsmasq.d/:/etc/dnsmasq.d/'], // TODO: make volume wrapper
        logDriver: 'json-file',
        logOptions: {
          'max-size': '10m',
          'max-file': '5',
        },
      }),
    });

    const checkUri = new Task(this, 'check-uri', {
      action: new UriAction({
        url: 'http://localhost/admin',
      }),
      register: 'result', // TODO: design register wrapper
      until: 'result.status == 200', // TODO: design until wrapper
      retries: 5,
      delay: 10,
    });

    const dockerPrune = new Task(this, 'docker-prune', {
      action: new DockerPruneAction({
        images: true,
        imagesFilters: {
          dangling: true,
        },
      }),
    });

    return new Role(this, 'pihole', {
      tasks: createDirectory
        .next(getIpv6Local)
        .next(determineHostIpsHa)
        .next(determineHostIpSingle)
        .next(startDocker)
        .next(checkUri)
        .next(dockerPrune),
    });
  }

  // private makeKeepalivedRole(): Role {
  //   const sysctlHandler = new Handler(this, 'reload-sysctl-config', {
  //     name: 'Reload sysctl',
  //     action: new CommandAction({
  //       cmd: 'sysctl -p',
  //     }),
  //   });

  //   const reloadSysctlHandler = new Handler(this, 'reload-sysctl-config', {
  //     name: 'Reload sysctl',
  //     action: new ServiceAction({
  //       name: 'keepalived',
  //       state: ServiceState.RESTARTED,
  //     }),
  //   });

  //   new Task(this, 'enable-nonlocal-ip-binding', {
  //     name: 'Enable nonlocal IP binding',
  //     action: new BlockinfileAction({
  //       path: '/etc/sysctl.conf',
  //       block: `|
  //       net.ipv4.ip_nonlocal_bind = 1
  //       net.ipv6.ip_nonlocal_bind = 1`,
  //     }),
  //     notify: [sysctlHandler],
  //   });

  //   new Task(this, 'flush', {
  //     name: 'Flush',
  //     action: new MetaAction({
  //       freeForm: MetaFreeForm.FLUSH_HANDLERS,
  //     }),
  //   });

  //   new Task(this, 'install-keepalived', {
  //     action: new AptAction({
  //       name: ['keepalived'],
  //       forceAptGet: true,
  //     }),
  //   });

  //   new Task(this, 'copy-check-pihole.sh', {
  //     action: new CopyAction({
  //       src: 'check-pihole.sh',
  //       dest: '/etc/keepalived/check_pihole.sh',
  //       mode: '0755',
  //     }),
  //   });

  //   new Task(this, 'configure-keepalived', { //## TODO: Codgen needs to be aware of `extend_documentation_fragment` in the standard lib repo. I need to look into this more to see if this is builtin lib thing or a common practice.
  //     action: new TemplateAction({
  //       src: 'keepalived.j2',
  //       dest: '/etc/keepalived/keepalived.conf',
  //       mode: '0644',
  //     }),
  //   });

  // }

  private makePlaybook(name: string, inventory: Inventory) {
    name;
    new Play(this, 'init-pi', {
      hosts: inventory.hosts,
      become: true,
    });
  }
}

