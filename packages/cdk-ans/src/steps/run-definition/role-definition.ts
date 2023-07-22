import { IChainable, RunDefinition } from './run-definition';
import { Step } from '../step';

export interface IRoleChainable extends IChainable {
  next(next: IRoleChainable): RoleDefinition;
}

export class RoleDefinition extends RunDefinition implements IRoleChainable {
  public static sequence(next: IRoleChainable, chain: Step[]): RoleDefinition {
    chain.push(...next.chain);
    return new RoleDefinition(chain);
  }

  readonly chain: Step[] = [];

  private constructor(chain: Step[]) {
    super(chain);
    this.chain = chain;
  }

  public next(next: IRoleChainable): RoleDefinition {
    this.chain.push(...next.chain);
    return new RoleDefinition(this.chain);
  }
}