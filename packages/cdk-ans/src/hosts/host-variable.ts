import { Construct } from 'constructs';
import { IVariable } from '../steps/variable';

export interface HostVariableProps {
  readonly name: string;
  readonly value: string;
}

export class HostVariable extends Construct implements IVariable {
  readonly name: string;
  readonly value: string;

  constructor(scope: Construct, id: string, props: HostVariableProps) {
    super(scope, id);
    this.name = props.name;
    this.value = props.value;
  }

  asRaw() {
    return `${this.name}`;
  }

  asVariable(): string {
    return `{{ ${this.name} }}`;
  }

  property(_: string): IVariable {
    throw new Error('String variables have no properties.');
  }

  index(_: number): IVariable {
    throw new Error('String variables do not support indexing.');
  }
}