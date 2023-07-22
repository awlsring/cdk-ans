import { Construct } from 'constructs';
import { Handler } from './handler';
import { ITaskChainable, TaskDefinition } from './run-definition/task-definition';
import { TaskBase, TaskBaseProps } from './task-base';
import { convertKeysToSnakeCase } from '../util';

export interface BlockProps extends TaskBaseProps {
  readonly tasks: TaskDefinition;
  readonly always?: TaskDefinition;
  readonly rescue?: TaskDefinition;
  readonly notify?: Handler[];
  readonly delegateFacts?: boolean;
  readonly delegateTo?: string;
  readonly when?: string;
}

export class Block extends TaskBase implements ITaskChainable { //TODO: Ensure chainable with tasks
  readonly params: Record<string, any>;
  readonly tasks: TaskDefinition;
  readonly rescue?: TaskDefinition;
  readonly always?: TaskDefinition;
  readonly notify?: Handler[];

  constructor(scope: Construct, name: string, props: BlockProps) {
    super(scope, name, props);
    this.tasks = props.tasks;
    this.rescue = props.rescue;
    this.always = props.always;
    this.notify = props.notify;

    this.params = {
      ...props,
    };
  }

  next(next: ITaskChainable): TaskDefinition {
    return TaskDefinition.sequence(next, this.chain);
  }

  toJson(): any {
    const task: Record<string, any> = {
      ...this.params,
      name: this.name,
      block: this.tasks.toJson(),
    };

    if (this.rescue) {
      task.rescue = this.rescue.toJson();
    }

    if (this.always) {
      task.always = this.always.toJson();
    }

    if (this.notify) {
      task.notify = this.notify.map(h => h.name);
    }

    return convertKeysToSnakeCase(task);
  }
}