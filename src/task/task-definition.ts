
// task chaining similar to aws-cdk-stepfunctions

export interface INextable {
  next(state: INextable): TaskDefinition;
  toJson(): any;
}

export interface IChainable {
  taskChain: INextable[];
}

export class TaskDefinition implements IChainable {
  public static sequence(next: INextable, chain: INextable[]): TaskDefinition {
    chain.push(next);
    return new TaskDefinition(chain);
  }

  readonly taskChain: INextable[] = [];

  private constructor(chain: INextable[]) {
    this.taskChain = chain;
  }

  public next(next: INextable): TaskDefinition {
    this.taskChain.push(next);
    return new TaskDefinition(this.taskChain);
  }
}