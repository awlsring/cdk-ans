import * as fs from 'fs';
import * as path from 'path';
import { Construct } from 'constructs';
import { App, Host, Playbook, Role, RoleTarget } from '../src';
import { File } from '../src/file/file';
import { TemplateFile } from '../src/file/template';
import { Play } from '../src/playbook/play';
import { Project } from '../src/project';
import { Inventory } from '../src/resource/inventory';
import { CommandTask } from '../src/task/built-in/command';
import { PingTask } from '../src/task/built-in/ping';
import { Handler } from '../src/task/handler';
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
    // const ping2 = new PingTask(this, 'test-ping-2');

    const commandTask = new CommandTask(this, 'test-command', {
      command: {
        cmd: 'echo',
        argv: ['hello', 'world'],
      },
    });

    const role = new Role(this, 'test-role', {
      runDefinition: commandTask,
    });

    const tmpFile = new File(this, 'tmp-file', {
      path: path.join(__dirname, 'resources', 'tmp.txt'),
    });
    const tmpFileRename = new File(this, 'tmp-file-rename', {
      path: path.join(__dirname, 'resources', 'tmp.txt'),
      fileName: 'tmp-copy.txt',
    });
    const tmplate = new TemplateFile(this, 'tmplate-file', {
      path: path.join(__dirname, 'resources', 'template.j2'),
    });

    const handler = new Handler(this, 'test-handler', {
      action: new TaskAction('debug', {
        msg: 'hello world',
      }),
    });
    role.addDefaultVariables({ key: 'test', value: 'hello' });
    role.addVariables({ key: 'test', value: 'hello' });
    role.addFile(tmpFile);
    role.addFile(tmpFileRename);
    role.addTemplate(tmplate);
    role.addHandler(handler);
    // build plays
    const play1 = new Play(this, 'test-play', {
      hosts: [host],
      runDefinition: ping,
      roles: [RoleTarget.fromRole(this, role)],
    });

    // build playbook
    new Playbook(this, 'test-book', {
      playDefinition: play1,
    });
  }
}

describe('ProjectSynthesizer', () => {

  test('can synth as expected', () => {
    fs.rmSync(path.join(__dirname, '../tmp'), { recursive: true });
    const app = new App({ outdir: 'tmp' });

    new PingProject(app, 'test-project');

    app.synth();

  });
});