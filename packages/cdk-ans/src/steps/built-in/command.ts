import { Construct } from 'constructs';
import { ANSIBLE_BUILT_IN_NAMESPACE } from './constant';
import { Task } from '../task';
import { TaskAction, TaskActionProps } from '../task-action';
import { TaskBaseProps } from '../task-base';

export interface CommandTaskActionProps extends TaskActionProps {
  readonly cmd: string;
  readonly argv?: string[];
  readonly chdir?: string;
  readonly creates?: string;
  readonly removes?: string;
  readonly stdin?: string;
  readonly stdinAddNewline?: boolean;
  readonly stdinEmptyEnds?: boolean;
}

export interface CommandTaskProps extends TaskBaseProps {
  readonly command: CommandTaskActionProps;
}

export class CommandTask extends Task {
  constructor(scope: Construct, name: string, props: CommandTaskProps) {
    const action = new TaskAction(ANSIBLE_BUILT_IN_NAMESPACE+'.command', props.command);
    super(scope, name, { ...props, action });
  }
}