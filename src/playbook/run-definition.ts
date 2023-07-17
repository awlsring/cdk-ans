import { Chainable, Nextable } from '../task/task-definition';

export class RunDefinition<T extends Nextable> implements Chainable {
  public static sequence<T extends Nextable>(next: T, chain: T[]): RunDefinition<T> {
    chain.push(next);
    return new RunDefinition<T>(chain);
  }

  readonly taskChain: T[] = [];

  private constructor(chain: T[]) {
    this.taskChain = chain;
  }

  public next(next: T): RunDefinition<T> {
    this.taskChain.push(next);
    return new RunDefinition<T>(this.taskChain);
  }

  toJson() {
    return this.taskChain.map(t => t.toJson());
  }
}