import { Host, Inventory, Play, Playbook, Project, Role, RoleTarget, Task, TaskAction } from 'cdk-ans';
import { Construct } from 'constructs';

export class TestProject extends Project {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // construct inventory
    const host = new Host(this, 'test-host', { //TODO: add validation that a host not bound to group fails validation
      host: 'localhost',
    });
    new Inventory(this, 'test-inv', { //TODO: create mechanism to populate inventory from plugin
      hosts: [host],
    });

    // declare task
    const ping = new Task(this, 'test-ping', {
      action: new TaskAction('ping', {}),
    });

    const commandTask = new Task(this, 'test-ping', {
      action: new TaskAction('command', {
        cmd: 'echo',
        argv: ['hello', 'world'],
      }),
    });

    const role = new Role(this, 'echoer', {
      tasks: commandTask,
    });

    // build plays
    const play = new Play(this, 'play', {
      name: 'Test play',
      hosts: [host],
      tasks: ping,
      roles: RoleTarget.fromRole(this, 'target', role),
    });

    // build playbook
    new Playbook(this, 'playbook', {
      playDefinition: play,
    });
  }
}