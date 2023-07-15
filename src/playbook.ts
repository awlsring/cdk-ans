import { Construct, IConstruct } from 'constructs';
import { App } from './app';

const CHART_SYMBOL = Symbol.for('cdkans.Playbook');

export class Playbook extends Construct {
  public static isPlaybook(x: any): x is Playbook {
    return x !== null && typeof(x) === 'object' && CHART_SYMBOL in x;
  }

  /**
   * Implements `instanceof Chart` using the more reliable `Chart.isChart` static method
   *
   * @param o The object to check
   * @internal
   */
  static [Symbol.hasInstance](o: unknown) {
    return Playbook.isPlaybook(o);
  }

  public static of(p: IConstruct): Playbook {
    if (Playbook.isPlaybook(p)) {
      return p;
    }

    const parent = p.node.scope as Construct;
    if (!parent) {
      throw new Error('cannot find a parent playbook (directly or indirectly)');
    }

    return Playbook.of(parent);
  }

  constructor(scope: Construct, name: string) {
    super(scope, name);
    Object.defineProperty(this, CHART_SYMBOL, { value: true });
  }

  /**
   * Renders this playbook to a set of JSON resources.
   * @returns array of resources
   */
  public toJson(): any[] {
    return App._synthPlaybook(this);
  }
}