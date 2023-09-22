import { Construct } from 'constructs';
import { Resource } from './resource';
import { PlayDefinition } from '../steps/run-definition/play-definition';

export interface PlaybookProps {
  /*
  * The order definition of plays that should be conducted in the playbook.
  */
  readonly playDefinition: PlayDefinition;
  /*
  * The name of the playbook.
  * @default - the name of the construct.
  */
  readonly name?: string;
}

// Playbook is a collection of Plays
export class Playbook extends Resource {
  readonly playDefinition: PlayDefinition;
  readonly name: string;

  constructor(scope: Construct, name: string, props: PlaybookProps) {
    super(scope, name);
    this.playDefinition = props.playDefinition;
    this.name = props.name ?? name;
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