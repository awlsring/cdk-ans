import { Step } from '../step';

export interface IChainable {
  readonly chain: Step[];
}

export abstract class RunDefinition implements IChainable {
  readonly chain: Step[];

  constructor(chain: Step[]) {
    this.chain = chain;
  }

  /**
   * Iterate over the chain, JSONify it, and return it as an array
   */
  toJson(): any[] {
    const i: any[] = [];
    this.chain.forEach(c => {
      i.push(c.toJson());
    });
    return i;
  }
}