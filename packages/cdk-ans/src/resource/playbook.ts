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

  toJson(): any[] {
    const p = this.playDefinition.toJson();
    // TODO: some janky way to fix an issue where, toJson method returns object instead of array when there is only one
    if (!p.length) {
      return [p];
    }
    return p;
  }
}