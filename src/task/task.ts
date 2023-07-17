import { Construct } from 'constructs';
import { TaskBase, TaskBaseProps } from './task-base';
import { Chainable, Nextable } from './task-definition';
import { RunDefinition } from '../playbook/run-definition';

export interface TaskProps extends TaskBaseProps {}

// make these chainable like aws-cdk sfn?
// https://docs.ansible.com/ansible/latest/reference_appendices/playbooks_keywords.html#task
export class Task extends TaskBase implements Chainable, Nextable {
  public readonly taskChain: Task[] = [this];

  constructor(scope: Construct, name: string, props: TaskProps) {
    super(scope, name, props);
  }

  next(next: Task): RunDefinition<Task> {
    return RunDefinition.sequence(next, this.taskChain);
  }

  toJson() {
    return {
      name: this.name,
      ...this.action.toJson(),
    };
  }
}