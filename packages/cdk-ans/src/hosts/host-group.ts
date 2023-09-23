import { Construct } from 'constructs';
import { Host } from './host';
import { IHostIdentifiable } from './host-identifiable';
import { HostVariable } from './host-variable';

/**
 * Properties for a host group.
 */
export interface HostGroupProps {
  /**
   * The identifier of the group.
   */
  readonly identifier?: string;
  /**
   * Variables that will be set on all hosts in this group.
   */
  readonly variables?: HostVariable[];
  /**
   * Hosts in this group.
   */
  readonly hosts?: Host[];
  /**
   * Subgroups of this group.
   */
  readonly groups?: HostGroup[];
}

/**
 * A group of hosts in an Ansible inventory.
 *
 * @see https://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html
 * @see https://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html#inventory-basics-formats-hosts-and-groups
 */
export class HostGroup extends Construct implements IHostIdentifiable {
  readonly variables: HostVariable[];
  readonly identifier: string;
  readonly groups: Record<string, HostGroup> = {};
  readonly hosts: Host[] = [];

  constructor(scope: Construct, name: string, props?: HostGroupProps) {
    super(scope, name);
    this.identifier = props?.identifier ?? name;
    this.variables = props?.variables ?? [];
  }

  /**
   * Assigns additional variables to this group.
   *
   * @param variables A list of variables to add to this group
   */
  public addVariables(...variables: HostVariable[]) {
    variables.forEach(variable => {
      this.variables.push(variable);
    });
  }

  /**
   * Assigns additional groups as subgroups to this group.
   *
   * @param groups A list of groups to add as subgroups to this group
   */
  public addSubGroups(...groups: HostGroup[]) {
    groups.forEach(group => {
      this.groups[group.identifier] = group;
    });
  }

  /**
   * Assigns additional hosts to this group.
   * @param hosts A list of hosts to add to this group
   */
  public addHosts(...hosts: Host[]) {
    this.hosts.push(...hosts);
  }

  /**
   * JSONify this group, with only the minimal required fields.
   *
   * @returns A JSON representation of this group, with only the minimal required fields.
   * @internal
   */
  _toJsonMinimal() {
    const j: Record<string, any> = {};

    Object.keys(this.groups).map(k => this.groups[k]).forEach(g => {
      j[g.identifier] = g._toJsonMinimal();
    });

    if (this.hosts.length !== 0) {
      let hosts: Record<string, any> = {};
      this.hosts.forEach(h => {
        hosts[h.identifier] = {};
      });
      j.hosts = hosts;
    }

    return j;
  }

  /**
   * JSONify this group.
   * @returns A JSON representation of this group.
   */
  toJson() {
    const j: Record<string, any> = {};

    Object.keys(this.groups).map(k => this.groups[k]).forEach(g => {
      j[g.identifier] = g.toJson();
    });

    if (this.hosts.length !== 0) {
      let hosts: Record<string, any> = {};
      this.hosts.forEach(h => {
        hosts[h.identifier] = h.toJson();
      });
      j.hosts = hosts;
    }

    if (this.variables && this.variables.length > 0) {
      const vars: Record<string, any> = {};
      this.variables.forEach(variable => {
        vars[variable.name] = variable.value;
      });
      j.vars = vars;
    }

    return j;
  }
}