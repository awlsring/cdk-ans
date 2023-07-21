import { Construct } from 'constructs';
import { Handler } from './handler';
import { TaskBase, TaskBaseProps } from './task-base';
import { IChainable, INextable, RunDefinition } from './task-definition';
import { convertKeysToSnakeCase } from '../util';

export interface BlockProps extends TaskBaseProps {
  readonly block: RunDefinition;
  readonly always?: RunDefinition;
  readonly rescue?: RunDefinition;
  readonly notify: Handler[];
  readonly delegateFacts?: boolean;
  readonly delegateTo?: string;
  readonly when?: string;
}

export class Block extends TaskBase implements IChainable, INextable { //TODO: Ensure chainable with tasks
  readonly taskChain: INextable[] = [this];
  readonly params: Record<string, any>;
  readonly block: RunDefinition;
  readonly rescue?: RunDefinition;
  readonly always?: RunDefinition;
  readonly notify?: Handler[];

  constructor(scope: Construct, name: string, props: BlockProps) {
    super(scope, name, props);
    this.block = props.block;
    this.rescue = props.rescue;
    this.always = props.always;
    this.notify = props.notify;

    this.params = {
      ...props,
    };
  }

  next(next: INextable): RunDefinition {
    return RunDefinition.sequence(next, this.taskChain);
  }

  toJson(): any {
    const task: Record<string, any> = {
      ...this.params,
      name: this.name,
      block: this.block.toJson(),
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