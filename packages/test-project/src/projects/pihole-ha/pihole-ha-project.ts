import { FileTask, Handler, Inventory, Play, Project, ProjectProps, Role, Task, TaskAction } from 'cdk-ans';
import { Construct } from 'constructs';
import { ServiceAction } from '../../imports/ansible-builtin-service';
import { AuthorizedKeyAction } from '../../imports/ansible-posix-authorized-key';
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
      action: new TaskAction('reboot', {}),
    });

    const restartDhcpcd = new Handler(this, 'restart-dhcpcd', {
      action: new ServiceAction({
        name: 'dhcpcd',
        state: 'restarted',
      }),
    });

    const addSshKey = new Task(this, 'add-ssh-key', {
      action: new AuthorizedKeyAction({ // TODO: make an authorized_key task action)
        key: 'https://github.com/{{ github_user_for_ssh_key }}.keys',
        user: '{{ ansible_user }}',
        comment: 'github{{ github_user_for_ssh_key }}',
      }),
    });

    const lockPassword = new Task(this, 'lock-password', {
      action: new TaskAction('user', { // TODO: make a user task action
        name: '{{ ansible_user }}',
        password_lock: 'yes',
      }),
    });

    const bashrcForUser = new Task(this, 'bashrc-for-user', {
      action: new TaskAction('blockinfile', { // TODO: make a blockinfile task action
        path: '/home/{{ ansible_user }}/.bashrc',
        block: 'alias ll=\'ls -la\'',
      }),
    });

    const setTimezone = new Task(this, 'set-timezone', {
      action: new TaskAction('lineinfile', { // TODO: make a lineinfile task action
        path: '/etc/timezone',
        regexp: '^',
        line: '{{ timezone }}',
      }),
    });

    const setLocaltime = new Task(this, 'set-localtime', {
      action: new TaskAction('file', { // TODO: make a file task action
        src: '/usr/share/zoneinfo/{{ timezone }}',
        dest: '/etc/localtime',
        state: 'link',
      }),
    });

    const setHostname = new Task(this, 'set-hostname', {
      action: new TaskAction('lineinfile', { // TODO: make a hostname task action
        path: '/etc/hostname',
        regexp: '^',
        line: '{{ inventory_hostname }}',
      }),
      notify: [reboot],
    });

    const setHosts = new Task(this, 'set-hosts', {
      action: new TaskAction('lineinfile', { // TODO: make a lineinfile task action
        path: '/etc/hosts',
        regexp: '^',
        line: '127.0.0.1 {{ inventory_hostname }}',
      }),
      notify: [reboot],
    });

    const setCustomDns = new Task(this, 'set-custom-dns', {
      action: new TaskAction('blockinfile', { // TODO: make a lineinfile task action
        path: '/etc/dhcpcd.conf',
        block: 'static domain_name_servers={{ static_dns }}',
      }),
      notify: [restartDhcpcd],
    });

    const flush = new Task(this, 'flush', {
      action: new TaskAction('meta', { // TODO: make a meta task action, add task synth to support freeforms
        free_from: 'flush_handlers',
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
      action: new TaskAction('service', { // TODO: make a service handler action
        name: 'docker',
        state: 'restarted', // TODO: make enum
      }),
    });


    const installDocker = new Task(this, 'install-dependencies', {
      action: new TaskAction('apt', { // TODO: make an apt task action. See if possible to make it OS agnostic, or at least make it easy to standard things like updates agnostic
        name: ['gnupg2', 'software-properties-common'],
        force_apt_get: 'yes',
      }),
    });

    const addDockerAptKey = new Task(this, 'add-docker-apt-key', {
      action: new TaskAction('apt_key', { // TODO: make an apt_key task action
        url: 'https://download.docker.com/linux/raspbian/gpg',
        id: '9DC858229FC7DD38854AE2D88D81803C0EBFCD88',
      }),
    });

    const addDockerAptRepo = new Task(this, 'add-docker-apt-repo', {
      action: new TaskAction('apt_repository', { // TODO: make an apt_repository task action
        repo: 'deb https://download.docker.com/linux/raspbian {{ ansible_distribution_release }} stable',
        filename: 'docker',
      }),
    });

    const installDockerCe = new Task(this, 'install-docker-ce', {
      action: new TaskAction('apt', {
        name: ['docker-ce:armhf', 'python3-setuptools'],
        force_apt_get: 'yes',
        install_recommends: 'no',
      }),
    });

    const installDockerPython = new Task(this, 'install-docker-python', {
      action: new TaskAction('pip', { // TODO: make a pip task action
        name: 'docker',
      }),
    });

    const addUserToDockerGroup = new Task(this, 'add-user-to-docker-group', {
      action: new TaskAction('user', { // TODO: make a user task action
        name: '{{ ansible_user }}',
        group: 'docker',
        append: 'yes',
      }),
    });

    const enableDockerIpv6 = new Task(this, 'enable-docker-ipv6', {
      action: new TaskAction('copy', { // TODO: make a copy task action
        dest: '/etc/docker/daemon.json',
        content: '{ "ipv6": true, "fixed-cidr-v6": "2001:db8:1::/64" }',
        mode: '0600',
      }),
      notify: [handler], // TODO: change to be a handler, see if should be a list or not
    });

    const flush = new Task(this, 'flush', {
      action: new TaskAction('meta', { // TODO: make a meta task action, add task synth to support freeforms
        free_from: 'flush_handlers',
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
    const createDirectory = new FileTask(this, 'create-directory', { // TODO: consider name overrider for task to set not as node id
      file: { // TODO: consider flattening this to props?
        path: '/home/{{ ansible_user }}/pihole', // TODO: think about making some sort of String wrapper that can be templated with a var?
        owner: '{{ ansible_user }}', // TODO: make variable string?
        group: '{{ ansible_user }}',
        state: 'directory', // TODO: make enum?
        mode: '0755', // TODO: not important, but maybe make a easy enum for this?
      },
    });

    const getIpv6Local = new Task(this, 'get-ipv6-local', {
      action: new TaskAction('set_fact', { // TODO: make a set fact default task
        ipv6: '{{ item.address }}', // TODO: consider ansible item wrapper that exposes these as properties and formats as the dynamic string
      }),
      loop: "{{ vars['ansible_' + ansible_default_ipv6.interface | default(ansible_default_ipv4.interface)].ipv6 }}", // TODO: understand this :)
      loopControl: { // TODO: make interface for loop control
        label: '{{ item.address }}',
      },
      when: '\'link\' in item.scope', // TODO: make a when wrapper
    });

    const determineHostIpsHa = new Task(this, 'determine-host-ips-ha', {
      action: new TaskAction('set_fact', {
        pihole_local_ipv4: "{{ pihole_vip_ipv4.split('/')[0] }}",
        pihole_local_ipv6: "{{ pihole_vip_ipv6.split('/')[0] }}",
        execution_mode: 'HA setup with keepalived',
      }),
      when: 'pihole_ha_mode',
    });

    const determineHostIpSingle = new Task(this, 'determine-host-ips-single', {
      action: new TaskAction('set_fact', {
        pihole_local_ipv4: '{{ ansible_host }}',
        pihole_local_ipv6: '{{ ipv6 }}',
        execution_mode: 'HA setup with keepalived',
      }),
      when: 'not pihole_ha_mode',
    });

    const startDocker = new Task(this, 'start-update-docker', { // TODO: make docker task
      action: new TaskAction('docker_container', {
        name: 'pihole',
        image: '{{ pihole_image }}',
        pull: 'yes',
        restart_policy: 'unless-stopped',
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
        dns_servers: ['127.0.0.1', '{{ static_dns }}'],
        network_mode: 'host', // TODO: make enum
        volumes: ['/home/{{ ansible_user }}/pihole/pihole/:/etc/pihole/', '/home/{{ ansible_user }}/pihole/dnsmasq.d/:/etc/dnsmasq.d/'], // TODO: make volume wrapper
        log_driver: 'json-file', // TODO: make enum
        log_options: {
          'max-size': '10m',
          'max-file': '5',
        },
      }),
    });

    const checkUri = new Task(this, 'check-uri', {
      action: new TaskAction('uri', { // TODO: make uri task
        url: 'http://localhost/admin',
      }),
      register: 'result', // TODO: design register wrapper
      until: 'result.status == 200', // TODO: design until wrapper
      retries: 5,
      delay: 10,
    });

    const dockerPrune = new Task(this, 'docker-prune', {
      action: new TaskAction('docker_prune', { // TODO: make docker prune task
        images: 'yes',
        images_filters: {
          dangling: true,
        },
      }),
    });

    const infoDebug = new Task(this, 'info-debug', {
      action: new TaskAction('debug', { // TODO: make debug task
        msg: [
          'In the {{ execution_mode }} make sure to point your DNS server settings here:',
          'DNSv4: {{ pihole_local_ipv4 }}',
          'DNSv6: {{ pihole_local_ipv6 }}',
        ],
      }),
    });

    return new Role(this, 'pihole', {
      tasks: createDirectory
        .next(getIpv6Local)
        .next(determineHostIpsHa)
        .next(determineHostIpSingle)
        .next(startDocker)
        .next(checkUri)
        .next(dockerPrune)
        .next(infoDebug),
    });
  }

  private makePlaybook(name: string, inventory: Inventory) {
    name;
    new Play(this, 'init-pi', {
      hosts: inventory.hosts,
      become: true,
    });
  }
}

