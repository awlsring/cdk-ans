import { IConstruct } from 'constructs';

export interface INamer {
  name(construct: IConstruct): string;
}

export class SimpleNamer implements INamer {
  constructor() {
  }

  public name(construct: IConstruct) {
    return construct.node.id;
  }
}