// import * as fs from 'fs';
import * as path from 'path';
import { Construct, IConstruct } from 'constructs';
import { DependencyGraph } from './dependency';
import { Host } from './hosts/host';
import { HostGroup } from './hosts/host-group';
import { Yaml } from './yaml';

export enum InventoryOutputType {
  FILE_PER_INVENTORY,
}

export interface InventoryProps {

}

export class Inventory extends Construct {
  /** How to output the inventory
   * @default InventoryOutputType.FILE_PER_INVENTORY
   */
  public readonly outputType: InventoryOutputType;

  constructor(scope: Construct, name: string) {
    super(scope, name);

    this.outputType = InventoryOutputType.FILE_PER_INVENTORY;
  }

  public get hosts(): Host[] {
    const isHost = (x: IConstruct): x is Host => x instanceof Host;
    return new DependencyGraph(this.node)
      .topology()
      .filter(isHost);
  }

  public get groups(): HostGroup[] {
    const isHostGroup = (x: IConstruct): x is HostGroup => x instanceof HostGroup;
    return new DependencyGraph(this.node)
      .topology()
      .filter(isHostGroup);
  }

  public synth(outDir: string): void {
    this.node.validate();

    const invObject: Record<string, any> = {};

    const groupedHosts: string[] = [];

    if (this.groups.length !== 0) {
      let groups: Record<string, any> = {};
      this.groups.forEach(g => {
        groups[g.node.id] = g.toJson();
        g.hosts.forEach(h => {
          groupedHosts.push(h.node.id);
        });
      });
      invObject.children = groups;
    }

    if (groupedHosts.length == this.hosts.length || this.hosts.length != 0) {
      let ungroupedHosts: Record<string, any> = {};
      this.hosts.forEach(h => {
        if (groupedHosts.includes(h.node.id)) {
          return;
        }
        ungroupedHosts[h.node.id] = h.toJson();
      });
      invObject.hosts = ungroupedHosts;
    };

    const namer: Namer = new SimpleNamer();
    Yaml.save(path.join(outDir, namer.name(this)+'.yaml'), [{
      all: Object(invObject),
    }]);
  }
}

interface Namer {
  name(construct: IConstruct): string;
}

class SimpleNamer implements Namer {
  constructor() {
  }

  public name(construct: IConstruct) {
    return construct.node.id;
  }
}