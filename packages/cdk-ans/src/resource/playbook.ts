import { Construct } from 'constructs';
import { Resource } from './resource';
import { RunDefinition } from '../task/task-definition';

export interface PlaybookProps {
  readonly playDefinition: RunDefinition;
}

// Playbook is a collection of Plays
export class Playbook extends Resource {
  readonly playDefinition: RunDefinition;

  constructor(scope: Construct, name: string, props: PlaybookProps) {
    super(scope, name);
    this.playDefinition = props.playDefinition;
  }

  toJson(): any {
    return this.playDefinition.toJson();
  }
}