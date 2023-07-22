import { IChainable, RunDefinition } from './run-definition';
import { Step } from '../step';

export interface IPlayChainable extends IChainable {
  next(next: IPlayChainable): PlayDefinition;
}

export class PlayDefinition extends RunDefinition implements IPlayChainable {
  public static sequence(next: IPlayChainable, chain: Step[]): PlayDefinition {
    chain.push(...next.chain);
    return new PlayDefinition(chain);
  }

  readonly chain: Step[] = [];

  private constructor(chain: Step[]) {
    super(chain);
    this.chain = chain; // TODO: WHY IS THIS NEEDED?
  }

  public next(next: IPlayChainable): PlayDefinition {
    this.chain.push(...next.chain);
    return new PlayDefinition(this.chain);
  }
}