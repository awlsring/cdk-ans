import { Construct } from 'constructs';
import { RoleTarget } from './role-target';
import { Host } from '../hosts/host';
import { IChainable, INextable, RunDefinition } from '../task/task-definition';

export interface PlayProps { // TODO: add more play props
  readonly name?: string;
  readonly hosts: Host[];
  readonly become?: boolean;
  readonly runDefinition?: RunDefinition;
  readonly roles?: RoleTarget[];
}

/**
 * A play is a collection of tasks and metadata to execute on a set of hosts. Plays are chainable together to create a playbook
 *
 * https://docs.ansible.com/ansible/latest/reference_appendices/playbooks_keywords.html#play
 */
export class Play extends Construct implements IChainable, INextable {
  public readonly taskChain: INextable[] = [this];
  readonly name: string;
  readonly become?: boolean;
  readonly roles: RoleTarget[] = [];
  readonly tasks?: RunDefinition;
  readonly hosts: Host[] = [];
  constructor(scope: Construct, name: string, props: PlayProps) {
    super(scope, name);
    this.name = props.name ?? name;
    this.hosts = props.hosts ?? [];
    this.roles = props.roles ?? [];
    this.tasks = props.runDefinition;
  }

  next(next: INextable): RunDefinition {
    return RunDefinition.sequence(next, this.taskChain);
  }

  flattenHosts(): string[] {
    const list: string[] = [];
    this.hosts.forEach(host => {
      list.push(host.node.id);
    });
    return list;
  }

  toJson(): any {
    // TODO: more jank object instead of list fix
    let tasks = [];
    if (this.tasks) {
      tasks = this.tasks.toJson();
      if (!tasks.length) {
        tasks = [tasks];
      }
    }
    const j: Record<string, any> = {
      name: this.name,
      hosts: this.flattenHosts(),
      tasks: tasks,
    };
    if (this.roles.length > 0) {
      j.roles = this.roles.map(role => role.toJson());
    }
    if (this.become) {
      j.become = this.become;
    }
    return j;
  }
}