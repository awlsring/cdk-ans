/* eslint-disable import/no-extraneous-dependencies */
import * as fs from 'fs';
import * as path from 'path';
import { Construct } from 'constructs';
import { DirResult, dirSync } from 'tmp';
import { App, Host, Playbook, PlaybookOutputType, ProjectSynthesizer, Role, RoleTarget } from '../src';
import { File } from '../src/file/file';
import { TemplateFile } from '../src/file/template';
import { Play } from '../src/playbook/play';
import { Project } from '../src/project';
import { Inventory } from '../src/resource/inventory';
import { CommandTask } from '../src/task/built-in/command';
import { PingTask } from '../src/task/built-in/ping';
import { Handler } from '../src/task/handler';
import { TaskAction } from '../src/task/task-action';

export const PLAYBOOK_NAME = 'test-playbook';
export const ROLE_NAME = 'test-role';

describe('ProjectSynthesizer', () => {
  let tempDir: DirResult;

  beforeAll(() => {
    tempDir = dirSync({ unsafeCleanup: true });
  });

  afterAll(() => {
    tempDir.removeCallback();
  });

  test('can synth a simple playbook with default options', () => {
    const projectName = 'simple-project';
    const app = new App({ outdir: tempDir.name });

    class TestProject extends Project {
      constructor(scope: Construct, name: string) {
        super(scope, name);

        const host = new Host(this, 'test-host', {
          host: 'localhost',
        });
        new Inventory(this, 'test-inv', {
          hosts: [host],
        });

        const ping = new PingTask(this, 'test-ping');

        const play = new Play(this, 'test-play', {
          hosts: [host],
          runDefinition: ping,
        });

        new Playbook(this, PLAYBOOK_NAME, {
          playDefinition: play,
        });
      }
    }

    new TestProject(app, projectName);

    app.synth();

    // inventories should exist and have a host.yaml
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'inventories'))).toBe(true);
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'inventories', 'hosts.yaml'))).toBe(true);

    // roles dir should not exist
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'roles'))).toBe(false);

    // synyth should create playbooks
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'site.yaml'))).toBe(true);
    expect(fs.existsSync(path.join(tempDir.name, projectName, `${PLAYBOOK_NAME}.yaml`))).toBe(true);

  });

  test('can skip synth on site.yaml', () => {
    const projectName = 'site-project';
    const synthesizer = new ProjectSynthesizer({
      playbookOptions: {
        dontCreateSitePlaybook: true,
      },
    });
    const app = new App({
      outdir: tempDir.name,
      synthesizer,
    });

    class TestProject extends Project {
      constructor(scope: Construct, name: string) {
        super(scope, name);

        const host = new Host(this, 'test-host', {
          host: 'localhost',
        });
        new Inventory(this, 'test-inv', {
          hosts: [host],
        });

        const commandTask = new CommandTask(this, 'test-command', {
          command: {
            cmd: 'echo',
            argv: ['hello', 'world'],
          },
        });

        const role = new Role(this, ROLE_NAME, {
          runDefinition: commandTask,
        });

        const play = new Play(this, 'test-play', {
          hosts: [host],
          roles: [RoleTarget.fromRole(this, role)],
        });

        new Playbook(this, PLAYBOOK_NAME, {
          playDefinition: play,
        });
      }
    }

    new TestProject(app, projectName);

    app.synth();

    // inventories should exist and have a host.yaml
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'inventories'))).toBe(true);
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'inventories', 'hosts.yaml'))).toBe(true);

    // role should be made with all possible dirs
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'roles', ROLE_NAME))).toBe(true);
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'roles', ROLE_NAME, 'tasks', 'main.yaml'))).toBe(true);

    // synyth should create a playbook
    expect(fs.existsSync(path.join(tempDir.name, projectName, `${PLAYBOOK_NAME}.yaml`))).toBe(true);
    // and not site.yaml
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'site.yaml'))).toBe(false);
  });

  test('can synth playbooks to directory', () => {
    const projectName = 'project-dirs';
    const synthesizer = new ProjectSynthesizer({
      playbookOptions: {
        playbookOutputType: PlaybookOutputType.IN_DIRECTORY,
      },
    });
    const app = new App({
      outdir: tempDir.name,
      synthesizer,
    });

    class TestProject extends Project {
      constructor(scope: Construct, name: string) {
        super(scope, name);

        const host = new Host(this, 'test-host', {
          host: 'localhost',
        });
        new Inventory(this, 'test-inv', {
          hosts: [host],
        });

        const commandTask = new CommandTask(this, 'test-command', {
          command: {
            cmd: 'echo',
            argv: ['hello', 'world'],
          },
        });

        const role = new Role(this, ROLE_NAME, {
          runDefinition: commandTask,
        });

        const play = new Play(this, 'test-play', {
          hosts: [host],
          roles: [RoleTarget.fromRole(this, role)],
        });

        new Playbook(this, PLAYBOOK_NAME, {
          playDefinition: play,
        });
      }
    }

    new TestProject(app, projectName);

    app.synth();

    // inventories should exist and have a host.yaml
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'inventories'))).toBe(true);
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'inventories', 'hosts.yaml'))).toBe(true);

    // role should be made with all possible dirs
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'roles', ROLE_NAME))).toBe(true);
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'roles', ROLE_NAME, 'tasks', 'main.yaml'))).toBe(true);

    expect(fs.existsSync(path.join(tempDir.name, projectName, 'playbooks', `${PLAYBOOK_NAME}.yaml`))).toBe(true);
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'playbooks', 'site.yaml'))).toBe(true);
  });

  test('can synth a role with all possibilities', () => {
    const projectName = 'role-project';
    const app = new App({ outdir: tempDir.name });

    class TestProject extends Project {
      constructor(scope: Construct, name: string) {
        super(scope, name);

        const host = new Host(this, 'test-host', {
          host: 'localhost',
        });
        new Inventory(this, 'test-inv', {
          hosts: [host],
        });

        const commandTask = new CommandTask(this, 'test-command', {
          command: {
            cmd: 'echo',
            argv: ['hello', 'world'],
          },
        });

        const role = new Role(this, ROLE_NAME, {
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

        const play = new Play(this, 'test-play', {
          hosts: [host],
          roles: [RoleTarget.fromRole(this, role)],
        });

        new Playbook(this, PLAYBOOK_NAME, {
          playDefinition: play,
        });
      }
    }

    new TestProject(app, projectName);

    app.synth();

    // role should be made with all possible dirs
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'roles', ROLE_NAME))).toBe(true);
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'roles', ROLE_NAME, 'files', 'tmp.txt'))).toBe(true);
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'roles', ROLE_NAME, 'templates', 'template.j2'))).toBe(true);
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'roles', ROLE_NAME, 'handlers', 'main.yaml'))).toBe(true);
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'roles', ROLE_NAME, 'tasks', 'main.yaml'))).toBe(true);
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'roles', ROLE_NAME, 'vars', 'main.yaml'))).toBe(true);
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'roles', ROLE_NAME, 'defaults', 'main.yaml'))).toBe(true);
  });
});