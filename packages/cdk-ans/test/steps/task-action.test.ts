import { TaskAction } from '../../src';

describe('TaskAction', () => {
  test('converts props to JSON', () => {
    const props = {
      cmd: 'echo',
      argv: ['hello', 'world'],
    };
    const action = new TaskAction('test', props);

    expect(action.toJson()).toEqual({
      test: {
        cmd: 'echo',
        argv: ['hello', 'world'],
      },
    });
  });

  test('converts props with free_form to JSON', () => {
    const props = {
      freeForm: 'echo hello world',
    };
    const action = new TaskAction('test', props);

    expect(action.toJson()).toEqual({
      test: 'echo hello world',
    });
  });

  test('converts props with variables to JSON', () => {
    const props = {
      cmd: 'echo',
      argv: ['{{ var1 }}', '{{ var2 }}'],
    };
    const action = new TaskAction('test', props);

    expect(action.toJson()).toEqual({
      test: {
        cmd: 'echo',
        argv: ['{{ var1 }}', '{{ var2 }}'],
      },
    });
  });
});