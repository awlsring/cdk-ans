import { Construct } from 'constructs';

export interface StepProps {
  readonly name?: string;
}

export abstract class Step extends Construct {
  readonly chain: Step[] = [];
  readonly name: string;
  constructor(scope: Construct, name: string, props: StepProps) {
    super(scope, name);
    this.name = props.name ?? name;
    this.chain = [this];
  }
  abstract toJson(): any;
}