
// task chaining similar to aws-cdk-stepfunctions

export interface Nextable {
  next(state: Nextable): TaskDefinition;
  toJson(): any;
}

export interface Chainable {
  taskChain: Nextable[];
}

export class TaskDefinition implements Chainable {
  public static sequence(next: Nextable, chain: Nextable[]): TaskDefinition {
    chain.push(next);
    return new TaskDefinition(chain);
  }

  readonly taskChain: Nextable[] = [];

  private constructor(chain: Nextable[]) {
    this.taskChain = chain;
  }

  public next(next: Nextable): TaskDefinition {
    this.taskChain.push(next);
    return new TaskDefinition(this.taskChain);
  }
}