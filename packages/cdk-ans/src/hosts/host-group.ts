import { Construct } from 'constructs';
import { Host } from './host';

export interface HostGroupProps {}

export class HostGroup extends Construct {
  private _variables: Record<string, string> = {};
  readonly groups: Record<string, HostGroup> = {};
  readonly hosts: Host[] = [];

  constructor(scope: Construct, name: string) {
    super(scope, name);
  }

  public addVariables(variables: Record<string, string>) {
    Object.keys(variables).forEach(k => {
      this._variables[k] = variables[k];
    });
  }

  public get variables() {
    return this._variables;
  }

  public addSubGroups(...groups: HostGroup[]) {
    groups.forEach(group => {
      this.groups[group.node.id] = group;
    });
  }

  public addHosts(...hosts: Host[]) {
    this.hosts.push(...hosts);
  }

  // TODO: this seems hacky, see if there is a better way to combine both methods
  toJsonMinimal() {
    const j: Record<string, any> = {};

    Object.keys(this.groups).map(k => this.groups[k]).forEach(g => {
      j[g.node.id] = g.toJsonMinimal();
    });

    if (this.hosts.length !== 0) {
      let hosts: Record<string, any> = {};
      this.hosts.forEach(h => {
        hosts[h.node.id] = {};
      });
      j.hosts = hosts;
    }

    return j;
  }

  // TODO: should 'toJson' method exist? Should JSONification be done only by synthesizer?
  toJson() {
    const j: Record<string, any> = {};

    Object.keys(this.groups).map(k => this.groups[k]).forEach(g => {
      j[g.node.id] = g.toJson();
    });

    if (this.hosts.length !== 0) {
      let hosts: Record<string, any> = {};
      this.hosts.forEach(h => {
        hosts[h.node.id] = h.toJson();
      });
      j.hosts = hosts;
    }

    if (Object.keys(this._variables).length > 0) {
      j.vars = this._variables;
    }

    return j;
  }
}