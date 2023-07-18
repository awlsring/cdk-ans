
// task chaining similar to aws-cdk-stepfunctions

export interface INextable {
  next(state: INextable): RunDefinition;
  toJson(): any;
}

export interface IChainable {
  readonly taskChain: INextable[];
}

export class RunDefinition implements IChainable {
  public static sequence(next: INextable, chain: INextable[]): RunDefinition {
    chain.push(next);
    return new RunDefinition(chain);
  }

  readonly taskChain: INextable[] = [];

  private constructor(chain: INextable[]) {
    this.taskChain = chain;
  }

  public next(next: INextable): RunDefinition {
    this.taskChain.push(next);
    return new RunDefinition(this.taskChain);
  }

  toJson() {
    return this.taskChain.map(t => t.toJson());
  }
}