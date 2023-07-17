import { Construct } from 'constructs';
import * as YAML from 'yaml';
import { App, Host, Playbook } from '../src';
import { Play } from '../src/playbook/play';
import { Project } from '../src/project';
import { Inventory } from '../src/resource/inventory';
import { CommandTask } from '../src/task/built-in/command';
import { PingTask } from '../src/task/built-in/ping';
import { Task } from '../src/task/task';
import { TaskAction } from '../src/task/task-action';

export class PingProject extends Project {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // construct inventory
    const host = new Host(this, 'test-host', { // add validation that a host not bound to group fails validation
      host: 'localhost',
    });
    new Inventory(this, 'test-inv', { // create mechanism to populate inventory from plugin
      hosts: [host],
    });

    // declare task
    const ping = new PingTask(this, 'test-ping');
    const ping2 = new PingTask(this, 'test-ping-2');
    const commandTask = new CommandTask(this, 'test-command', {
      command: {
        cmd: 'echo',
        argv: ['hello', 'world'],
      },
    });
    const customTask = new Task(this, 'test-custom', {
      action: new TaskAction('custom', {
        foo: 'bar',
      }),
    });


    // build plays
    const play1 = new Play(this, 'test-play', {
      hosts: [host],
      taskDefinition: ping.next(ping2),
    });
    const play2 = new Play(this, 'test-play2', {
      hosts: [host],
      taskDefinition: commandTask.next(customTask),
    });

    // build playbook
    const p = new Playbook(this, 'test-book', {
      playDefinition: play1.next(play2),
    });

    console.log(YAML.stringify(p.toJson()));
  }
}

describe('test Role construct', () => {

  test('hello', () => {
    const app = new App({ outdir: 'dist-test' });

    new PingProject(app, 'test');

    // ping.toJson();
  });
});