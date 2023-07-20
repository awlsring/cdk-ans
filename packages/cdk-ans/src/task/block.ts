import { Construct } from 'constructs';
import { Handler } from './handler';
import { TaskBase, TaskBaseProps } from './task-base';
import { RunDefinition } from './task-definition';

export interface BlockProps extends TaskBaseProps {
  readonly always?: RunDefinition;
  readonly block?: RunDefinition;
  readonly rescue?: RunDefinition;
  readonly notify: Handler[];
  readonly delegateFacts?: boolean;
  readonly delegateTo?: string;
  readonly when?: string;
}


export class Block extends TaskBase { // TODO: Block task
  constructor(scope: Construct, name: string, props: BlockProps) {
    super(scope, name, props);
  }
}