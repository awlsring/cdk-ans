/**
 * Ansible variable
 *
 * A class used to format anisble variables.
 *
 * @see https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html
 * @see https://docs.ansible.com/ansible/latest/reference_appendices/special_variables.html
 */
export class Variable {
  /**
   * The ip/name of the target host to use instead of inventory_hostname.
   */
  static readonly AnsibleHost = '{{ ansible_host }}';
  /**
   * The connection plugin actually used for the task on the target host.
   */
  static readonly AnsibleConnection = '{{ ansible_connection }}';
  /**
   * The port used to connect to the target host.
   */
  static readonly AnsiblePort = '{{ ansible_port }}';
  /**
   * The user Ansible ‘logs in’ as.
   */
  static readonly AnsibleUser = '{{ ansible_user }}';
  /**
   * The path to the Python executable Ansible should use on the target host.
   * @see https://docs.ansible.com/ansible/latest/reference_appendices/interpreter_discovery.html
   */
  static readonly AnsiblePythonInterpreter = '{{ ansible_python_interpreter }}';
  /**
   * The user Ansible ‘becomes’ after using privilege escalation. This must be available to the ‘login user’.
   */
  static readonly AnsibleBecomeUser = '{{ ansible_become_user }}';
  /**
   * Contains any facts gathered or cached for the inventory_hostname Facts are normally gathered by the setup module automatically in a play, but any module can return facts.
   * @see https://docs.ansible.com/ansible/latest/reference_appendices/special_variables.html#ansible-facts
   * @see https://docs.ansible.com/ansible/latest/collections/ansible/builtin/setup_module.html
   */
  static readonly AnsibleFacts = '{{ ansible_facts }}';
  /**
   * Contains any ‘local facts’ gathered or cached for the inventory_hostname. The keys available depend on the custom facts created. See the setup module and facts.d or local facts for more details.
   */
  static readonly AnsibleLocal = '{{ ansible_local }}';

  /**
   * Boolean that indicates if we are in check mode or not.
   */
  static readonly AnsibleCheckMode = '{{ ansible_check_mode }}';
  /**
   * The full path of used Ansible configuration file.
   */
  static readonly AnsibleConfigFile = '{{ ansible_config_file }}';
  /**
   * The names of the roles currently imported into the current play as dependencies of other plays.
   */
  static readonly AnsibleCheckModeEnabled = '{{ ansible_check_mode }}';
  /**
   * Boolean that indicates if we are in diff mode or not.
   */
  static readonly AnsibleDiffMode = '{{ ansible_diff_mode }}';
  /**
   * Integer reflecting the number of maximum forks available to this run.
   */
  static readonly AnsibleForks = '{{ ansible_forks }}';
  /**
   * List of sources used as inventory.
   */
  static readonly AnsibleInventorySources = '{{ ansible_inventory_sources }}';
  /**
   * Contents of the `--limit` CLI option for the current execution of Ansible.
   */
  static readonly AnsibleLimit = '{{ ansible_limit }}';
  /**
   * A dictionary/map containing extended loop information when enabled through `loop_control.extended`.
   */
  static readonly AnsibleLoop = '{{ ansible_loop }}';
  /**
   * The name of the value provided to `loop_control.loop_var`. Added in `2.8`.
   */
  static readonly AnsibleLoopVar = '{{ ansible_loop_var }}';
  /**
   * The name of the value provided to `loop_control.index_var`. Added in `2.9`.
   */
  static readonly AnsibleIndexVar = '{{ ansible_index_var }}';
  /**
   * When the current role is being executed by means of an include_role or import_role action, this variable contains a list of all parent roles, with the most recent role (in other words, the role that included/imported this role) being the first item in the list. When multiple inclusions occur, this list lists the last role (in other words, the role that included this role) as the first item in the list. It is also possible that a specific role exists more than once in this list.

   * For example: When role A includes role B, inside role B, `ansible_parent_role_names` will equal to `['A']`. If role **B** then includes role **C**, the list becomes `['B', 'A']`.
   * @see https://docs.ansible.com/ansible/latest/reference_appendices/special_variables.html#ansible-parent-role-names
   * @see https://docs.ansible.com/ansible/latest/collections/ansible/builtin/include_role_module.html
   * @see https://docs.ansible.com/ansible/latest/collections/ansible/builtin/import_role_module.html
   */
  static readonly AnsibleParentRoleName = '{{ ansible_parent_role_name }}';
  /**
   * When the current role is being executed by means of an include_role or import_role action, this variable contains a list of all parent roles paths, with the most recent role (in other words, the role that included/imported this role) being the first item in the list. Please refer to `ansible_parent_role_names` for the order of items in this list.
   * @see https://docs.ansible.com/ansible/latest/reference_appendices/special_variables.html#ansible-parent-role-paths
   * @see https://docs.ansible.com/ansible/latest/collections/ansible/builtin/include_role_module.html
   * @see https://docs.ansible.com/ansible/latest/collections/ansible/builtin/import_role_module.html
   */
  static readonly AnsibleParentRolePath = '{{ ansible_parent_role_path }}';
  /**
   * List of active hosts in the current play run limited by the serial, aka ‘batch’. Failed/Unreachable hosts are not considered ‘active’.
   */
  static readonly AnsiblePlayBatch = '{{ ansible_play_batch }}';
  /**
   * List of hosts in the current play run, not limited by the serial. Failed/Unreachable hosts are excluded from this list.
   */
  static readonly AnsiblePlayHosts = '{{ ansible_play_hosts }}';
  /**
   * List of all the hosts that were targeted by the play.
   */
  static readonly AnsiblePlayHostsAll = '{{ ansible_play_hosts_all }}';
  /**
   * The names of the roles currently imported into the current play. This list does not contain the role names that are implicitly included through dependencies.
   */
  static readonly AnsiblePlayRoleNames = '{{ ansible_play_role_names }}';
  /**
   * The path to the python interpreter being used by Ansible on the controller.
   */
  static readonly AnsiblePlaybookPython = '{{ ansible_playbook_python }}';
  /**
   * The names of the roles currently imported into the current play, or roles referenced as dependencies of the roles imported into the current play.
   */
  static readonly AnsibleRoleNames = '{{ ansible_role_names }}';
  /**
   * The fully qualified collection role name, in the format of `namespace.collection.role_name`.
   */
  static readonly AnsibleRoleName = '{{ ansible_role_name }}';
  /**
   * The name of the collection the task that is executing is a part of. In the format of `namespace.collection`.
   */
  static readonly AnsibleCollectionName = '{{ ansible_collection_name }}';
  /**
   * Contents of the `--tags` CLI option, which specifies which tags will be included for the current run. Note that if `--tags` is not passed, this variable will default to `["all"]`.
   */
  static readonly AnsibleRunTags = '{{ ansible_run_tags }}';
  /**
   * Current search path for action plugins and lookups, in other words, where we search for relative paths when you do `template: src=myfile`.
   */
  static readonly AnsibleSearchPath = '{{ ansible_search_path }}';
  /**
   * Contents of the `--skip-tags` CLI option, which specifies which tags will be skipped for the current run.
   */
  static readonly AnsibleSkipTags = '{{ ansible_skip_tags }}';
  /**
   * Current verbosity setting for Ansible.
   */
  static readonly AnsibleVerbosity = '{{ ansible_verbosity }}';
  /**
   * Dictionary/map that contains information about the current running version of ansible, it has the following keys: full, major, minor, revision and string.
   */
  static readonly AnsibleVersion = '{{ ansible_version }}';
  /**
   * List of groups the current host is part of.
   */
  static readonly GroupNames = '{{ group_names }}';
  /**
   * A dictionary/map with all the groups in inventory and each group has the list of hosts that belong to it.
   */
  static readonly Groups = '{{ groups }}';
  /**
   * A dictionary/map with all the hosts in inventory and variables assigned to them.
   */
  static readonly HostVars = '{{ hostvars }}';
  /**
   * The inventory name for the ‘current’ host being iterated over in the play.
   */
  static readonly InventoryHostname = '{{ inventory_hostname }}';
  /**
   * The short version of `inventory_hostname`.
   */
  static readonly InventoryHostnameShort = '{{ inventory_hostname_short }}';
  /**
   * The directory of the inventory source in which the `inventory_hostname` was first defined.
   */
  static readonly InventoryDir = '{{ inventory_dir }}';
  /**
   * The file name of the inventory source in which the `inventory_hostname` was first defined.
   */
  static readonly InventoryFile = '{{ inventory_file }}';
  /**
   * Special variable that allows you to ‘omit’ an option in a task, for example `- user: name=bob home={{ bobs_home|default(omit) }}`.
   */
  static readonly Omit = '{{ omit }}';
  /**
   * The name of the currently executed play. Added in `2.8.` (name attribute of the play, not file name of the playbook.)
   */
  static readonly AnsiblePlayName = '{{ ansible_play_name }}';
  /**
   * The path to the directory of the current playbook being executed. NOTE: This might be different than directory of the playbook passed to the `ansible-playbook` command line when a playbook contains a `import_playbook` statement.
   */
  static readonly PlaybookDir = '{{ playbook_dir }}';
  /**
   * The name of the role currently being executed.
   */
  static readonly RoleName = '{{ role_name }}';
  /**
   * The path to the dir of the currently running role.
   */
  static readonly RolePath = '{{ role_path }}';
  /**
   * Wraps a given string in Ansible's templating syntax.
   */
  static of(value: string): string {
    return `{{ ${value} }}`;
  }
  /**
   * Wraps a given string in Ansible's templating syntax as a property of an item.
   */
  static ofItem(value: string): string {
    return `{{ item.${value} }}`;
  }
}

