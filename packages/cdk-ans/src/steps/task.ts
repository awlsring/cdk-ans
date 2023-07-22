import { Construct } from 'constructs';
import { Handler } from './handler';
import { ITaskChainable, TaskDefinition } from './run-definition/task-definition';
import { TaskAction } from './task-action';
import { TaskBase, TaskBaseProps } from './task-base';
import { convertKeysToSnakeCase } from '../util';

export interface TaskProps extends TaskBaseProps {
  readonly action: TaskAction;
  readonly args?: Record<string, any>;
  readonly async?: number;
  readonly changedWhen?: string;
  readonly delay?: number;
  readonly failedWhen?: string;
  readonly localAction?: string;
  readonly loop?: string | string[];
  readonly loopControl?: Record<string, any>;
  readonly notify?: Handler[];
  readonly poll?: number;
  readonly register?: string;
  readonly retries?: number;
  readonly until?: string;
  readonly withItems?: Record<string, any>[];
  readonly with?: string[];
  readonly delegateFacts?: boolean;
  readonly delegateTo?: string;
  readonly when?: string;
}

// make these chainable like aws-cdk sfn?
// https://docs.ansible.com/ansible/latest/reference_appendices/playbooks_keywords.html#task
export class Task extends TaskBase implements ITaskChainable {
  readonly action: TaskAction;
  readonly params: Record<string, any>;
  readonly notify?: Handler[];

  constructor(scope: Construct, name: string, props: TaskProps) {
    super(scope, name, props);
    this.action = props.action;
    this.notify = props.notify;
    this.params = {
      ...props,
    };
  }

  next(next: ITaskChainable): TaskDefinition {
    return TaskDefinition.sequence(next, this.chain);
  }

  toJson(): any {
    const task = {
      name: this.name,
      ...this.action.toJson(),
    };

    if (this.notify) {
      task.notify = this.notify.map(h => h.name);
    }

    return convertKeysToSnakeCase(task);
  }
}