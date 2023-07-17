import { Construct } from 'constructs';
import { TaskBase, TaskBaseProps } from './task-base';

export interface HandlerProps extends TaskBaseProps {
  readonly listen?: string;
}

export class Handler extends TaskBase {
  readonly listen?: string;
  constructor(scope: Construct, name: string, props: HandlerProps) {
    super(scope, name, props);
    this.listen = props.listen;
  }
}