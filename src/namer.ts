import { IConstruct } from 'constructs';

export interface Namer {
  name(construct: IConstruct): string;
}

export class SimpleNamer implements Namer {
  constructor() {
  }

  public name(construct: IConstruct) {
    return construct.node.id;
  }
}