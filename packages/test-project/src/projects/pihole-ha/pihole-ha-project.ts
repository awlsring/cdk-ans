import * as path from 'path';
import { Conditional, File, Handler, Host, Inventory, MagicVariable, Play, Playbook, Project, ProjectProps, Role, RoleTarget, SimpleVariable, Task, TemplateFile } from 'cdk-ans';
import { Construct } from 'constructs';
import { AptAction, AptUpgrade } from '../../imports/ansible-builtin-apt';
import { AptKeyAction } from '../../imports/ansible-builtin-apt-key';
import { AptRepositoryAction } from '../../imports/ansible-builtin-apt-repository';
import { BlockinfileAction } from '../../imports/ansible-builtin-blockinfile';
import { CommandAction } from '../../imports/ansible-builtin-command';
import { CopyAction } from '../../imports/ansible-builtin-copy';
import { CronAction } from '../../imports/ansible-builtin-cron';
import { FileAction, FileState } from '../../imports/ansible-builtin-file';
import { LineinfileAction } from '../../imports/ansible-builtin-lineinfile';
import { MetaAction, MetaFreeForm } from '../../imports/ansible-builtin-meta';
import { PipAction } from '../../imports/ansible-builtin-pip';
import { RebootAction } from '../../imports/ansible-builtin-reboot';
import { ServiceAction, ServiceState } from '../../imports/ansible-builtin-service';
import { SetFactAction } from '../../imports/ansible-builtin-set-fact';
import { StatAction } from '../../imports/ansible-builtin-stat';
import { TemplateAction } from '../../imports/ansible-builtin-template';
import { UriAction } from '../../imports/ansible-builtin-uri';
import { UserAction } from '../../imports/ansible-builtin-user';
import { AuthorizedKeyAction } from '../../imports/ansible-posix-authorized-key';
import { OpensshKeypairAction } from '../../imports/community-crypto-openssh-keypair';
import { DockerContainerAction, DockerContainerRestartPolicy } from '../../imports/community-docker-docker-container';
import { DockerPruneAction } from '../../imports/community-docker-docker-prune';

export interface PiholeHaProjectProps extends ProjectProps {
  // readonly inventory: (scope: Construct) => Inventory;
}

export class PiholeHaProject extends Project {
  constructor(scope: Construct, name: string, props: PiholeHaProjectProps) {
    super(scope, name, props);

    const host = new Host(this, 'test-host', {
      host: 'localhost',
    }); // TODO: Create some way to make a "All hosts"
    new Inventory(this, 'test-inv', {
      hosts: [host],
    });

    const flushHandlers = new Task(this, 'flush-handlers', {
      action: new MetaAction({
        freeForm: MetaFreeForm.FLUSH_HANDLERS,
      }),
    });

    const bootstrapRole = this.makeBootstrapRole(flushHandlers);
    const dockerRole = this.makeDockerRole(flushHandlers);
    const keepalivedRole = this.makeKeepalivedRole(flushHandlers);
    const piholeRole = this.makePiholeRole();
    const sshdRole = this.makeSshdRole(flushHandlers);
    const startKeepAlivedRole = this.makeStartKeepalivedRole();
    const stopKeepAlivedRole = this.makeStopKeepalivedRole();
    const syncRole = this.makeSyncRole();
    const updateRole = this.makeUpdateRole();

    const initPiPlay = new Play(this, 'init-pi', { // TODO: make tasks not generate if there are none
      name: 'Init Pi',
      hosts: [host],
      become: true,
      serial: 1,
      roles: RoleTarget.fromRole(this, 'init-stop-keepalived', stopKeepAlivedRole)
        .next(RoleTarget.fromRole(this, 'init-bootstrap', bootstrapRole))
        .next(RoleTarget.fromRole(this, 'init-update', updateRole))
        .next(RoleTarget.fromRole(this, 'init-sshd', sshdRole))
        .next(RoleTarget.fromRole(this, 'init-docker', dockerRole))
        .next(RoleTarget.fromRole(this, 'init-pihole', piholeRole))
        .next(RoleTarget.fromRole(this, 'init-start-keepalived', startKeepAlivedRole)),
    });

    new Playbook(this, 'bootstrap-pihole', { //TODO: add a name field that will be the name of the file
      playDefinition: initPiPlay,
    });

    const keepalivedFailoverPlay = new Play(this, 'keepalived-failover-play', {
      name: 'Keepalived failover',
      hosts: [host],
      become: true,
      serial: 1,
      roles: RoleTarget.fromRole(this, 'keepalived-failover-stop', stopKeepAlivedRole)
        .next(RoleTarget.fromRole(this, 'keepalived-failover-keepalived', keepalivedRole))
        .next(RoleTarget.fromRole(this, 'keepalived-failover-start', startKeepAlivedRole)),
    });

    new Playbook(this, 'keepalived-failover', {
      name: 'keepalived',
      playDefinition: keepalivedFailoverPlay,
    });

    const syncPlay = new Play(this, 'sync-play', {
      name: 'Sync',
      hosts: [host],
      serial: 1,
      roles: RoleTarget.fromRole(this, 'sync-sync-target', syncRole),
    });

    new Playbook(this, 'sync', {
      playDefinition: syncPlay,
    });

    const updatePlay = new Play(this, 'update-play', {
      name: 'Update',
      hosts: [host],
      serial: 1,
      roles: RoleTarget.fromRole(this, 'update-stop-keepalived', stopKeepAlivedRole)
        .next(RoleTarget.fromRole(this, 'update-upgrade', updateRole))
        .next(RoleTarget.fromRole(this, 'update-pihole', piholeRole))
        .next(RoleTarget.fromRole(this, 'update-start-keepalived', startKeepAlivedRole)),
    });

    new Playbook(this, 'update', {
      playDefinition: updatePlay,
    });
  }

  private makeBootstrapRole(flush: Task) {
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

  private makeDockerRole(flush: Task): Role {
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

  private makeKeepalivedRole(flush: Task): Role {
    const checkPiHoleScript = new File(this, 'check-pihole', {
      path: path.join(__dirname, 'resources', 'check_pihole.sh'),
    }); //TODO: make file builder in code so you can define simple scripts without keeping them

    const keepalivedTemplate = new TemplateFile(this, 'keepalived-template', {
      path: path.join(__dirname, 'resources', 'keepalived.j2'),
    }); //TODO: make file builder in code so you can define simple scripts without keeping them

    const sysctlHandler = new Handler(this, 'reload-sysctl-config', {
      name: 'Reload sysctl',
      action: new CommandAction({
        cmd: 'sysctl -p',
      }),
    });

    const restartKeepAlivedService = new Handler(this, 'restart-keepalived', {
      name: 'Restart keepalived service',
      action: new ServiceAction({
        name: 'keepalived',
        state: ServiceState.RESTARTED,
      }),
    });

    const enableNonLocalIpBinding = new Task(this, 'enable-nonlocal-ip-binding', {
      name: 'Enable nonlocal IP binding',
      action: new BlockinfileAction({
        path: '/etc/sysctl.conf',
        block: `|
        net.ipv4.ip_nonlocal_bind = 1
        net.ipv6.ip_nonlocal_bind = 1`,
      }),
      notify: [sysctlHandler],
    });

    const installKeepalived = new Task(this, 'install-keepalived', {
      action: new AptAction({
        name: ['keepalived'],
        forceAptGet: true,
      }),
    });

    const copyScript = new Task(this, 'copy-check-pihole.sh', {
      action: new CopyAction({
        src: 'check-pihole.sh',
        dest: '/etc/keepalived/check_pihole.sh',
        mode: '0755',
      }),
    });

    const configureKeepalived = new Task(this, 'configure-keepalived', {
      action: new TemplateAction({
        src: 'keepalived.j2',
        dest: '/etc/keepalived/keepalived.conf',
        mode: '0644',
      }),
      notify: [restartKeepAlivedService],
    });

    return new Role(this, 'keepalived', {
      tasks: enableNonLocalIpBinding
        .next(flush)
        .next(installKeepalived)
        .next(copyScript)
        .next(configureKeepalived)
        .next(flush),
      handlers: [sysctlHandler, restartKeepAlivedService],
      files: [checkPiHoleScript],
      templates: [keepalivedTemplate],
    });
  }

  private makeSshdRole(flush: Task): Role {
    const sshdHandler = new Handler(this, 'restart-sshd', {
      name: 'Restart sshd',
      action: new ServiceAction({
        name: 'sshd',
        state: ServiceState.RESTARTED,
      }),
    });

    const hardening = new Task(this, 'hardening', {
      name: 'Hardening sshd',
      action: new BlockinfileAction({
        path: '/etc/ssh/sshd_config',
        validate: 'usr/bin/sshd -t -f %s',
        block: `|
        PermitRootLogin no
        MaxAuthTries 3
        MaxSessions 5
        PubkeyAuthentication no`,
      }),
    });

    return new Role(this, 'hardening-role', {
      tasks: hardening
        .next(flush),
      handlers: [sshdHandler],
    });
  }

  private makeStartKeepalivedRole() {
    const start = new Task(this, 'start-keepalived', {
      name: 'Start keepalived',
      action: new ServiceAction({
        name: 'keepalived',
        state: ServiceState.STARTED,
      }),
      register: 'result',
      failedWhen: [
        Conditional.equal('result.failed', true),
        Conditional.notIn('Could not find the requested service', 'result.msg'),
      ],
    });

    return new Role(this, 'start-keepalived-role', {
      tasks: start,
    });
  }

  private makeStopKeepalivedRole() {
    const start = new Task(this, 'stop-keepalived', {
      name: 'Stop keepalived',
      action: new ServiceAction({
        name: 'keepalived',
        state: ServiceState.STOPPED,
      }),
      register: 'result',
      // failedWhen: [ // TODO: Make this a list on conditionals
      //   'result.failed == true',
      //   '"Could not find the requested service" not in result.msg'
      // ],
    });

    return new Role(this, 'stop-keepalived-role', {
      tasks: start,
    });
  }

  private makeSyncRole(): Role {
    const syncTemplate = new TemplateFile(this, 'sync-template', {
      path: path.join(__dirname, 'resources', 'pihole_sync.j2'),
    });

    const sqlite = new Task(this, 'install-sqlite', {
      name: 'Install sqlite3',
      action: new AptAction({
        name: ['sqlite3'],
        forceAptGet: true,
      }),
      become: true,
    });

    const generateKey = new Task(this, 'generate-key', {
      name: 'Generate SSH keypair',
      action: new OpensshKeypairAction({
        comment: `pihole-sync-${MagicVariable.InventoryHostname}`,
        path: '.ssh/id_rsa_sync',
      }),
    });

    const addKeyToOtherNodes = new Task(this, 'add-key-to-other-nodes', {
      name: 'Add key to authorized_keys on all other nodes',
      action: new AuthorizedKeyAction({
        key: '{{ ssh_public_key.public_key }}',
        user: MagicVariable.AnsibleUser,
      }),
      loop: "{{ groups['all']|difference([inventory_hostname]) }}",
      delegateTo: '{{ item }}',
    });

    const createSyncFolder = new Task(this, 'create-sync-folder', {
      name: 'Create sync folder',
      action: new FileAction({
        path: 'pihole_sync',
        mode: '0755',
        state: FileState.DIRECTORY,
      }),
      register: 'sync_dir',
    });

    const copySyncScript = new Task(this, 'copy-sync-script', {
      name: 'Copy sync script',
      action: new TemplateAction({
        src: 'pihole_sync.j2',
        dest: '{{ sync_dir.stdout }}/pihole_sync.sh',
        mode: '0755',
      }),
    });

    const scheduleSync = new Task(this, 'schedule-sync', {
      name: 'Schedule sync with cron',
      action: new CronAction({
        name: 'pihole_sync',
        hour: '2,14',
        minute: '0',
        job: '{{ ansible_user_dir }}//{{ sync_dir.path }}//pihole_sync.sh',
      }),
    });

    return new Role(this, 'sync-role', {
      tasks: sqlite
        .next(generateKey)
        .next(addKeyToOtherNodes)
        .next(createSyncFolder)
        .next(copySyncScript)
        .next(scheduleSync),
      templates: [syncTemplate],
    });
  }

  private makeUpdateRole(): Role {
    const updateApt = new Task(this, 'update-apt', {
      name: 'Update apt packages',
      action: new AptAction({
        forceAptGet: true,
        autoclean: true,
        autoremove: true,
        updateCache: true,
        upgrade: AptUpgrade.DIST,
      }),
    });

    const checkReboot = new Task(this, 'check-reboot', {
      name: 'Check if reboot is required',
      action: new StatAction({
        path: '/var/run/reboot-required',
      }),
      register: 'reboot_required', // TODO: Make this some variable based method?
    });

    const reboot = new Task(this, 'reboot', {
      name: 'Reboot if required',
      action: new RebootAction({
        rebootTimeout: 300,
      }),
      when: Conditional.bool('reboot_required.stat.exists'),
    });

    return new Role(this, 'update-role', {
      tasks: updateApt
        .next(checkReboot)
        .next(reboot),
    });
  }
}

