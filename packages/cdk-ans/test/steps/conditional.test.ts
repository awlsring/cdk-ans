import { Conditional, IsEvaluation, SimpleVariable } from '../../src';

describe('Conditionals', () => {
  test('Can make basic conditional with simple types', () => {
    const conditional = Conditional.equal('a', 'b');

    expect(conditional.format()).toEqual('a == b');
  });
  test('Can make basic conditional with complex types', () => {
    const a = SimpleVariable.of('a');
    const b = SimpleVariable.of('b');
    const conditional = Conditional.equal(a, b);

    expect(conditional.format()).toEqual('a == b');
  });
  test('Can make basic conditional with complex types and simple types', () => {
    const a = SimpleVariable.of('a');
    const conditional = Conditional.equal(a, 'b');

    expect(conditional.format()).toEqual('a == b');
  });
  test('Can make conditional with complex types and conditional', () => {
    const a = SimpleVariable.of('a');
    const b = SimpleVariable.of('b');
    const conditional = Conditional.equal(a, b);

    const conditional2 = Conditional.equal(a, conditional);

    expect(conditional2.format()).toEqual('a == (a == b)');
  });
  test('when equals works', () => {
    const a = SimpleVariable.of('a');
    const b = SimpleVariable.of('b');
    const conditional = Conditional.equal(a, b);

    expect(conditional.format()).toEqual('a == b');
  });
  test('when notEquals works', () => {
    const a = SimpleVariable.of('a');
    const b = SimpleVariable.of('b');
    const conditional = Conditional.notEqual(a, b);

    expect(conditional.format()).toEqual('a != b');
  });
  test('when greaterThan works', () => {
    const a = SimpleVariable.of('a');
    const b = SimpleVariable.of('b');
    const conditional = Conditional.greaterThan(a, b);

    expect(conditional.format()).toEqual('a > b');
  });
  test('when greaterThanOrEquals works', () => {
    const a = SimpleVariable.of('a');
    const b = SimpleVariable.of('b');
    const conditional = Conditional.greaterThanOrEqual(a, b);

    expect(conditional.format()).toEqual('a >= b');
  });
  test('when lessThan works', () => {
    const a = SimpleVariable.of('a');
    const b = SimpleVariable.of('b');
    const conditional = Conditional.lessThan(a, b);

    expect(conditional.format()).toEqual('a < b');
  });
  test('when lessThanOrEquals works', () => {
    const a = SimpleVariable.of('a');
    const b = SimpleVariable.of('b');
    const conditional = Conditional.lessThanOrEqual(a, b);

    expect(conditional.format()).toEqual('a <= b');
  });
  test('when is works', () => {
    const a = SimpleVariable.of('a');
    const conditional = Conditional.is(a, IsEvaluation.SKIPPED);

    expect(conditional.format()).toEqual('a is skipped');
  });
  test('when isNot works', () => {
    const a = SimpleVariable.of('a');
    const conditional = Conditional.isNot(a, IsEvaluation.SUCCEEDED);

    expect(conditional.format()).toEqual('a is not succeeded');
  });
  test('when bool works', () => {
    const a = SimpleVariable.of('a');
    const conditional = Conditional.bool(a);

    expect(conditional.format()).toEqual('a');
  });
  test('when and works', () => {
    const a = SimpleVariable.of('a');
    const b = SimpleVariable.of('b');
    const conditional = Conditional.and(a, b);

    expect(conditional.format()).toEqual('a and b');
  });
  test('when or works', () => {
    const a = SimpleVariable.of('a');
    const b = SimpleVariable.of('b');
    const conditional = Conditional.or(a, b);

    expect(conditional.format()).toEqual('a or b');
  });
  test('when not works', () => {
    const a = SimpleVariable.of('a');
    const conditional = Conditional.notBool(a);

    expect(conditional.format()).toEqual('not a');
  });
  test('when in works', () => {
    const a = SimpleVariable.of('a');
    const conditional = Conditional.in(a, 'b');

    expect(conditional.format()).toEqual('a in b');
  });
});