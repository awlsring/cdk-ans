import { Construct } from 'constructs';
import { App, Role } from '../src';
import { CommandTask } from '../src/task/built-in/command';
import { FileTask } from '../src/task/built-in/file';

export class TestRoleConstruct extends Construct {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    const task = new FileTask(this, 'test', {
      name: 'test',
      file: { path: '/tmp/test' },
    });

    const task2 = new CommandTask(this, 'test-2', {
      name: 'test2',
      command: {
        cmd: 'ls',
        stdinAddNewline: true,
      },
    });

    const definition = task.next(task2);

    new Role(this, 'test-role', {
      runDefinition: definition,
    });
  }
}

describe('test Role construct', () => {

  test('hello', () => {
    const app = new App({ outdir: 'dist-test' });

    new TestRoleConstruct(app, 'test');

    // const task = new FileTask(app, 'test', {
    //   name: 'test',
    //   file: { path: '/tmp/test' },
    // });

    // const task2 = new CommandTask(app, 'test-2', {
    //   name: 'test2',
    //   command: {
    //     cmd: 'ls',
    //     stdinAddNewline: true,
    //   },
    // });

    // const definition = task.next(task2);

    // new Role(app, 'test', {
    //   runDefinition: definition,
    // });


  });
});