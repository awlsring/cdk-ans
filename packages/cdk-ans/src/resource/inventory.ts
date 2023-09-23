import { Construct } from 'constructs';
import { Resource } from './resource';
import { Host } from '../hosts/host';
import { HostGroup } from '../hosts/host-group';

export interface InventoryProps {
  readonly name?: string;
  readonly hosts?: Host[];
  readonly groups?: HostGroup[];
}

export class Inventory extends Resource {
  readonly name: string;
  readonly hosts: Host[] = [];
  readonly groups: HostGroup[] = [];

  constructor(scope: Construct, name: string, props: InventoryProps) {
    super(scope, name);
    this.name = props?.name ?? name;
    if (props.hosts) {
      this.hosts = props.hosts;
    }
    if (props.groups) {
      this.groups = props.groups;
    }
  }
}