import { Construct } from 'constructs';
import { RoleTarget } from './role-target';
import { RunDefinition } from './run-definition';
import { Host } from '../hosts/host';
import { Task } from '../task/task';
import { IChainable, INextable } from '../task/task-definition';

export interface PlaybookTaskProps {
  readonly hosts: Host[];
  readonly taskDefinition: RunDefinition<Task>;
  readonly roles?: RoleTarget[];
}

/**
 * A play is a collection of tasks and metadata to execute on a set of hosts. Plays are chainable together to create a playbook
 *
 * https://docs.ansible.com/ansible/latest/reference_appendices/playbooks_keywords.html#play
 */
export class Play extends Construct implements IChainable, INextable {
  public readonly taskChain: Play[] = [this];

  readonly roles: RoleTarget[] = [];
  readonly tasks: RunDefinition<Task>;
  readonly hosts: Host[] = [];
  constructor(scope: Construct, name: string, props: PlaybookTaskProps) {
    super(scope, name);

    this.hosts = props.hosts ?? [];
    this.roles = props.roles ?? [];
    this.tasks = props.taskDefinition;
  }

  next(next: Play): RunDefinition<Play> {
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
    const j: Record<string, any> = {
      name: this.node.id,
      hosts: this.flattenHosts(),
      tasks: this.tasks.toJson(),
    };
    if (this.roles.length > 0) {
      j.roles = this.roles.map(role => role.toJson());
    }
    return j;
  }
}