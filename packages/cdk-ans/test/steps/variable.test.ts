import { DictionaryVariable, ListVariable, MagicVariable, SimpleVariable } from '../../src';

describe('Variables Primitives', () => {
  test('Simple variable formats as expected', () => {

    const simpleVar = SimpleVariable.of('toes');

    expect(simpleVar.asRaw()).toEqual('toes');
    expect(simpleVar.asVariable()).toEqual('{{ toes }}');
  });
  test('Simple variable can\'t retrieve a property or index', () => {

    const simpleVar = SimpleVariable.of('toes');

    expect(() => simpleVar.property('')).toThrow(Error);
    expect(() => simpleVar.index(1)).toThrow(Error);
  });
  test('List variable formats as expected', () => {

    const listVariable = ListVariable.of('toes');

    expect(listVariable.asRaw()).toEqual('toes');
    expect(listVariable.asVariable()).toEqual('{{ toes }}');
    expect(listVariable.index(0).asVariable()).toEqual('{{ toes[0] }}');
    expect(listVariable.index(0).property('nested').asVariable()).toEqual('{{ toes[0][\'nested\'] }}');
  });
  test('Simple variable can\'t retrieve a property', () => {

    const listVariable = ListVariable.of('toes');

    expect(() => listVariable.property('')).toThrow(Error);
  });
  test('Dictionary variable formats as expected', () => {

    const dictionaryVariable = DictionaryVariable.of('toes');

    expect(dictionaryVariable.asRaw()).toEqual('toes');
    expect(dictionaryVariable.asVariable()).toEqual('{{ toes }}');
    expect(dictionaryVariable.property('fingas').asVariable()).toEqual('{{ toes[\'fingas\'] }}');
    expect(dictionaryVariable.property('fingas').property('filanges').asVariable()).toEqual('{{ toes[\'fingas\'][\'filanges\'] }}');
    expect(dictionaryVariable.property('fingas').index(0).asVariable()).toEqual('{{ toes[\'fingas\'][0] }}');
  });
  test('Simple variable can\'t retrieve a property', () => {

    const dictionaryVariable = DictionaryVariable.of('toes');

    expect(() => dictionaryVariable.index(0)).toThrow(Error);
  });
});

describe('Magic Variables', () => {
  test('Produces Ansible host', () => {
    const host = MagicVariable.AnsibleHost;

    expect(host).toBeInstanceOf(SimpleVariable);
    expect(host.asVariable()).toEqual('{{ ansible_host }}');
    expect(host.asRaw()).toEqual('ansible_host');
  });
});

describe('Item Variables', () => {
  test('Formats correctly', () => {
    const item = MagicVariable.Item;

    expect(item.asVariable()).toEqual('{{ item }}');
    expect(item.asRaw()).toEqual('item');
    expect(item.property('nested').asRaw()).toEqual('item[\'nested\']');
    expect(item.index(0).asRaw()).toEqual('item[0]');
  });
});