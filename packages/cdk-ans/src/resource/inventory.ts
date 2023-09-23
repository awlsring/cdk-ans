import { Construct } from 'constructs';
import { Resource } from './resource';
import { Host } from '../hosts/host';
import { HostGroup } from '../hosts/host-group';
import { HostVariable } from '../hosts/host-variable';

/**
 * Properties for an Ansible inventory.
 */
export interface InventoryProps {
  /**
   * The name of the inventory.
   * @default - the name of the construct.
   */
  readonly name?: string;
  /**
   * Hosts in the inventory. Hosts added here are part of the top level "all" group.
   */
  readonly hosts?: Host[];
  /**
   * Groups in the inventory.
   */
  readonly groups?: HostGroup[];
  /**
   * Inventory level variables that will be set on all hosts
   *
   * @see https://docs.ansible.com/ansible/latest/inventory_guide/intro_inventory.html#adding-variables-to-inventory
   */
  readonly variables?: HostVariable[];
}

/**
 * Represents an Ansible inventory.
 *
 * @see https://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html
 * @see https://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html#inventory-basics-formats-hosts-and-groups
 */
export class Inventory extends Resource {
  readonly name: string;
  readonly hosts: Host[] = [];
  readonly groups: HostGroup[] = [];
  readonly variables: HostVariable[] = [];

  constructor(scope: Construct, name: string, props: InventoryProps) {
    super(scope, name);
    this.name = props?.name ?? name;
    if (props.hosts) {
      this.hosts = props.hosts;
    }
    if (props.groups) {
      this.groups = props.groups;
    }
    if (props.variables) {
      this.variables = props.variables;
    }
  }
}