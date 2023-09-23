import { IHostIdentifiable } from './host-identifiable';

/**
 * A special host identifier that contains all hosts. Used from the `Hosts.All` class
 */
export class AllHosts implements IHostIdentifiable {
  readonly identifier = 'all';
}

/**
 * A special class to allow for specifying all hosts in a playbook.
 */
export class Hosts {
  static readonly All = [new AllHosts()];
}