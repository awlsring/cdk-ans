import { Construct } from 'constructs';
import { Handler } from './handler';
import { IPlayChainable, PlayDefinition } from './run-definition/play-definition';
import { RoleDefinition } from './run-definition/role-definition';
import { TaskDefinition } from './run-definition/task-definition';
import { Step } from './step';
import { TaskBaseProps } from './task-base';
import { IHostIdentifiable } from '../hosts/host-identifiable';

export enum PlayHostOrder {
  INVENTORY = 'inventory',
  SORTED = 'sorted',
  REVERSE_SORTED = 'reverse_sorted',
  REVERSE_INVENTORY = 'reverse_inventory',
  SHUFFLED = 'shuffle',
}

export interface PlayProps extends TaskBaseProps {
  readonly tasks?: TaskDefinition;

  readonly factPath?: string;
  readonly forceHandlers?: boolean;
  readonly gatherFacts?: boolean;
  readonly gatherSubset?: string;
  readonly gatherTimeout?: number;
  readonly handlers?: Handler[]; //TODO handler target class?
  readonly hosts: IHostIdentifiable[]; // TODO: ability to add host groups
  readonly maxFailPercentage?: number;
  readonly order?: PlayHostOrder;
  readonly postTasks?: TaskDefinition;
  readonly preTasks?: TaskDefinition;
  readonly roles?: RoleDefinition;
  readonly serial?: number;
  readonly strategy?: string; //TODO: Vaidate string is right, uses "connection strategy"
  readonly varsFiles?: string[];
  readonly varPrompt?: string[];
}

/**
 * A play is a collection of tasks and metadata to execute on a set of hosts. Plays are chainable together to create a playbook
 *
 * https://docs.ansible.com/ansible/latest/reference_appendices/playbooks_keywords.html#play
 */
export class Play extends Step implements IPlayChainable { //TODO: User props in jsonification
  readonly become?: boolean;
  readonly roles?: RoleDefinition;
  readonly tasks?: TaskDefinition;
  readonly hosts: IHostIdentifiable[] = [];

  constructor(scope: Construct, name: string, props: PlayProps) {
    super(scope, name, props);
    this.hosts = props.hosts ?? [];
    this.roles = props.roles;
    this.tasks = props.tasks;
  }

  next(next: IPlayChainable): PlayDefinition {
    return PlayDefinition.sequence(next, this.chain);
  }

  flattenHosts(): string[] {
    const list: string[] = [];
    this.hosts.forEach(host => {
      list.push(host.identifier);
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
    if (this.roles) {
      let roles = this.roles.toJson();
      if (!roles.length) {
        roles = [roles];
      }
      j.roles = roles;
    }
    if (this.become) {
      j.become = this.become;
    }
    return j;
  }
}