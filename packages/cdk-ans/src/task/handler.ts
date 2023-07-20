import { Construct } from 'constructs';
import { TaskAction } from './task-action';
import { TaskBase, TaskBaseProps } from './task-base';

export interface HandlerProps extends TaskBaseProps {
  readonly action: TaskAction;
  readonly listen?: string;
}

export class Handler extends TaskBase {
  readonly listen?: string;
  readonly action: TaskAction;
  constructor(scope: Construct, name: string, props: HandlerProps) {
    super(scope, name, props);
    this.listen = props.listen;
    this.action = props.action;
  }

  toJson() {
    const task = {
      name: this.name,
      ...this.action.toJson(),
    };

    if (this.listen) {
      task.listen = this.listen;
    }

    return task;
  }
}