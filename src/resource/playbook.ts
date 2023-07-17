import { Construct } from 'constructs';
import { Resource } from './resource';
import { Play } from '../playbook/play';
import { RunDefinition } from '../playbook/run-definition';

export interface PlaybookProps {
  readonly playDefinition: RunDefinition<Play>;
}

// Playbook is a collection of Plays
export class Playbook extends Resource {
  readonly playDefinition: RunDefinition<Play>;

  constructor(scope: Construct, name: string, props: PlaybookProps) {
    super(scope, name);
    this.playDefinition = props.playDefinition;
  }

  toJson(): any {
    return this.playDefinition.toJson();
  }
}