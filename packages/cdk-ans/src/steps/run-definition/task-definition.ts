import { IChainable, RunDefinition } from './run-definition';
import { Step } from '../step';

export interface ITaskChainable extends IChainable {
  next(next: ITaskChainable): TaskDefinition;
}

export class TaskDefinition extends RunDefinition implements ITaskChainable {
  public static sequence(next: ITaskChainable, chain: Step[]): TaskDefinition {
    chain.push(...next.chain);
    return new TaskDefinition(chain);
  }

  readonly chain: Step[] = [];

  private constructor(chain: Step[]) {
    super(chain);
    this.chain = chain;
  }

  public next(next: ITaskChainable): TaskDefinition {
    this.chain.push(...next.chain);
    return new TaskDefinition(this.chain);
  }
}