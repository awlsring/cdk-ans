import { Project } from '../project';

/**
 * How inventories should be sythesized in the output directory
 */
export enum InventoryOutputType {
  /**
   * Create a single inventory file including all hosts, hosts vars, and groups in one
   */
  SINGLE_FILE,
  /**
   * Create a file for hosts, a file for each host's vars, and a file for each group's vars
   */
  HOST_AND_VAR_FILES,
}

/**
 * How roles should be sythesized in the output directory
 */
export enum RoleOutputType {
  /**
   * Use the standard role structure
   * https://docs.ansible.com/ansible/2.8/user_guide/playbooks_reuse_roles.html#role-directory-structure
   */
  STANDARD,
}

/**
 * How playbooks should be sythesized in the output directory
 */
export enum PlaybookOutputType {
  /**
   * Place all playbooks in the root of the project
   */
  IN_ROOT,
  /**
   * Place all playbooks in a directory named "playbooks"
   */
  IN_DIRECTORY,
}

export interface ISynthesizer {
  synth(project: Project, outDir: string): void;
}