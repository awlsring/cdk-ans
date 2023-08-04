import { AnsibleAnyInput, IVariable } from './variable';

export type Evaluatable = Conditional | AnsibleAnyInput;

export enum ConditionalEvaluation {
  AND = 'and',
  OR = 'or',
  IS = 'is',
  IS_NOT = 'is not',
  IN = 'in',
  WHEN_EQUALS = '==',
  WHEN_NOT_EQUALS = '!=',
  WHEN_GREATER_THAN = '>',
  WHEN_LESS_THAN = '<',
  WHEN_GREATER_THAN_OR_EQUALS = '>=',
  WHEN_LESS_THAN_OR_EQUALS = '<=',
  BOOL = 'bool',
  BOOL_NOT = 'bool_not',
  DEFINED = 'defined',
  UNDEFINED = 'undefined',
  FAILED = 'failed',
  SUCCEEDED = 'succeeded',
  SKIPPED = 'skipped',
  CHANGED = 'changed',
}

export enum IsEvaluation {
  DEFINED = 'defined',
  UNDEFINED = 'undefined',
  FAILED = 'failed',
  SUCCEEDED = 'succeeded',
  SKIPPED = 'skipped',
  CHANGED = 'changed',
}

export class Conditional {
  static equal(var1: Evaluatable, var2: Evaluatable): Conditional {
    return new Conditional(var1, ConditionalEvaluation.WHEN_EQUALS, var2);
  }

  static notEqual(var1: Evaluatable, var2: Evaluatable): Conditional {
    return new Conditional(var1, ConditionalEvaluation.WHEN_NOT_EQUALS, var2);
  }

  static greaterThan(var1: Evaluatable, var2: Evaluatable): Conditional {
    return new Conditional(var1, ConditionalEvaluation.WHEN_GREATER_THAN, var2);
  }

  static lessThan(var1: Evaluatable, var2: Evaluatable): Conditional {
    return new Conditional(var1, ConditionalEvaluation.WHEN_LESS_THAN, var2);
  }

  static greaterThanOrEqual(var1: Evaluatable, var2: Evaluatable): Conditional {
    return new Conditional(var1, ConditionalEvaluation.WHEN_GREATER_THAN_OR_EQUALS, var2);
  }

  static lessThanOrEqual(var1: Evaluatable, var2: Evaluatable): Conditional {
    return new Conditional(var1, ConditionalEvaluation.WHEN_LESS_THAN_OR_EQUALS, var2);
  }

  static bool(bool: AnsibleAnyInput): Conditional {
    return new Conditional(bool, ConditionalEvaluation.BOOL);
  }

  static notBool(bool: AnsibleAnyInput): Conditional {
    return new Conditional(bool, ConditionalEvaluation.BOOL_NOT);
  }

  static is(var1: Evaluatable, isEval: IsEvaluation): Conditional {
    return new Conditional(var1, ConditionalEvaluation.IS, isEval);
  }

  static in(var1: Evaluatable, var2: Evaluatable): Conditional {
    return new Conditional(var1, ConditionalEvaluation.IN, var2);
  }

  static isNot(var1: Evaluatable, isEval: IsEvaluation): Conditional {
    return new Conditional(var1, ConditionalEvaluation.IS_NOT, isEval);
  }

  static and(condition1: Evaluatable, condition2: Evaluatable): Conditional {
    return new Conditional(condition1, ConditionalEvaluation.AND, condition2);
  }

  static or(condition1: Evaluatable, condition2: Evaluatable): Conditional {
    return new Conditional(condition1, ConditionalEvaluation.OR, condition2);
  }

  private constructor(readonly var1: Evaluatable, readonly mode: ConditionalEvaluation, readonly var2?: Evaluatable) {}

  private formatConditional(v: Evaluatable): string {
    if (v instanceof Conditional) {
      return `(${v.format()})`;
    }
    if (v.asRaw) {
      return (v as IVariable).asRaw();
    }
    return v;
  }

  format(): string {
    if (this.mode === ConditionalEvaluation.BOOL) {
      return `${this.formatConditional(this.var1)}`;
    }
    if (this.mode === ConditionalEvaluation.BOOL_NOT) {
      return `not ${this.formatConditional(this.var1)}`;
    }
    return `${this.formatConditional(this.var1)} ${this.mode} ${this.formatConditional(this.var2)}`;
  }
}