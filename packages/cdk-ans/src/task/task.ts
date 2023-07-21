import { Construct } from 'constructs';
import { Handler } from './handler';
import { TaskAction } from './task-action';
import { TaskBase, TaskBaseProps } from './task-base';
import { IChainable, INextable, RunDefinition } from './task-definition';
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
export class Task extends TaskBase implements IChainable, INextable {
  public readonly taskChain: INextable[] = [this];
  readonly action: TaskAction;
  readonly params: Record<string, any>;

  constructor(scope: Construct, name: string, props: TaskProps) {
    super(scope, name, props);
    this.action = props.action;
    this.params = {
      ...props,
    };

    // delete action from params
    delete this.params.action;
  }

  next(next: INextable): RunDefinition {
    return RunDefinition.sequence(next, this.taskChain);
  }

  toJson(): any {
    const task = {
      ...this.params,
      name: this.name,
      ...this.action.toJson(),
    };

    return convertKeysToSnakeCase(task);
  }
}