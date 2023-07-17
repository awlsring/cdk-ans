import { Construct, IConstruct } from 'constructs';
import { DependencyGraph } from './dependency';
import { Inventory } from './resource/inventory';
import { Playbook } from './resource/playbook';
import { Role } from './resource/role';

export interface ProjectSynthStrategies {

}

export interface ProjectProps {}

export class Project extends Construct {
  public get inventories(): Inventory[] {
    const isInventory = (x: IConstruct): x is Inventory => x instanceof Inventory;
    return new DependencyGraph(this.node)
      .topology()
      .filter(isInventory);
  }

  public get roles(): Role[] {
    const isRole = (x: IConstruct): x is Role => x instanceof Role;
    return new DependencyGraph(this.node)
      .topology()
      .filter(isRole);
  }

  public get playbooks(): Playbook[] {
    const isPlaybook = (x: IConstruct): x is Playbook => x instanceof Playbook;
    return new DependencyGraph(this.node)
      .topology()
      .filter(isPlaybook);
  }

  constructor(scope: Construct, name: string, props?: ProjectProps) {
    super(scope, name);
    props; // do nothing for now
  }
}