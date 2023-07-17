import { Construct } from 'constructs';
import { TaskAction } from './task-action';
import { TaskBase, TaskBaseProps } from './task-base';
import { IChainable, INextable } from './task-definition';
import { RunDefinition } from '../playbook/run-definition';

export interface TaskProps extends TaskBaseProps {
  readonly action: TaskAction;
}

// make these chainable like aws-cdk sfn?
// https://docs.ansible.com/ansible/latest/reference_appendices/playbooks_keywords.html#task
export class Task extends TaskBase implements IChainable, INextable {
  public readonly taskChain: Task[] = [this];
  readonly action: TaskAction;

  constructor(scope: Construct, name: string, props: TaskProps) {
    super(scope, name, props);
    this.action = props.action;
  }

  next(next: Task): RunDefinition<Task> {
    return RunDefinition.sequence(next, this.taskChain);
  }
}