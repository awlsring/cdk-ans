import { Construct } from 'constructs';
import { Task } from '../task';
import { TaskAction } from '../task-action';
import { TaskBaseProps } from '../task-base';
import { INextable } from '../task-definition';

export interface PingTaskProps extends TaskBaseProps {}

export class PingTask extends Task implements INextable {
  constructor(scope: Construct, name: string, props?: PingTaskProps) {
    const action = new TaskAction('ping', {});
    super(scope, name, { ...props, action });
  }
}