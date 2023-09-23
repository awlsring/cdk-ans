/* eslint-disable import/no-extraneous-dependencies */
import * as fs from 'fs';
import * as path from 'path';
import { Construct } from 'constructs';
import { DirResult, dirSync } from 'tmp';
import { App, Host, HostGroup, InventoryOutputType, Playbook, PlaybookOutputType, ProjectSynthesizer, Role, RoleTarget, Task } from '../src';
import { File } from '../src/file/file';
import { TemplateFile } from '../src/file/template';
import { Project } from '../src/project';
import { Inventory } from '../src/resource/inventory';
import { Handler } from '../src/steps/handler';
import { Play } from '../src/steps/play';
import { TaskAction } from '../src/steps/task-action';

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

        const ping = new Task(this, 'test-ping', {
          action: new TaskAction('ping', {}),
        });

        const play = new Play(this, 'test-play', {
          hosts: [host],
          tasks: ping,
        });

        new Playbook(this, PLAYBOOK_NAME, {
          playDefinition: play,
        });
      }
    }

    new TestProject(app, projectName);

    app.synth();

    // inventories should exist and have a host.yaml
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'inventories', 'test-inv'))).toBe(true);
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'inventories', 'test-inv', 'hosts.yaml'))).toBe(true);

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

        const commandTask = new Task(this, 'test-ping', {
          action: new TaskAction('command', {
            cmd: 'echo',
            argv: ['hello', 'world'],
          }),
        });

        const role = new Role(this, ROLE_NAME, {
          tasks: commandTask,
        });

        const play = new Play(this, 'test-play', {
          hosts: [host],
          roles: RoleTarget.fromRole(this, 'target', role),
        });

        new Playbook(this, PLAYBOOK_NAME, {
          playDefinition: play,
        });
      }
    }

    new TestProject(app, projectName);

    app.synth();

    // inventories should exist and have a host.yaml
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'inventories', 'test-inv'))).toBe(true);
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'inventories', 'test-inv', 'hosts.yaml'))).toBe(true);

    // role should be made with all possible dirs
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'roles', ROLE_NAME))).toBe(true);
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'roles', ROLE_NAME, 'tasks', 'main.yaml'))).toBe(true);

    // synyth should create a playbook
    expect(fs.existsSync(path.join(tempDir.name, projectName, `${PLAYBOOK_NAME}.yaml`))).toBe(true);
    // and not site.yaml
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'site.yaml'))).toBe(false);
  });

  test('can synth a complex inventory', () => {
    const projectName = 'complex-inv-project';
    const synthesizer = new ProjectSynthesizer({
      inventoryOptions: {
        inventoryOutputType: InventoryOutputType.GROUP_AND_HOST_VAR_FILES,
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

        const groupHost = new Host(this, 'group-host', {
          host: 'localhost',
        });
        const hostGroup = new HostGroup(this, 'test-group');
        hostGroup.addHosts(groupHost);
        hostGroup.addVariables({
          testVar: 'testValue',
        });

        new Inventory(this, 'test-inv', {
          hosts: [host],
          groups: [hostGroup],
        });

        const play = new Play(this, 'test-play', {
          hosts: [host, ...hostGroup.hosts],
        });

        new Playbook(this, PLAYBOOK_NAME, {
          playDefinition: play,
        });
      }
    }

    new TestProject(app, projectName);

    app.synth();

    expect(fs.existsSync(path.join(tempDir.name, projectName, 'inventories', 'test-inv'))).toBe(true);
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'inventories', 'test-inv', 'hosts.yaml'))).toBe(true);
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'inventories', 'test-inv', 'group_vars', 'test-group.yaml'))).toBe(true);
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'inventories', 'test-inv', 'host_vars', 'test-host.yaml'))).toBe(true);
  });

  test('can synth mulitple inventories', () => {
    const projectName = 'complex-inv-project';
    const app = new App({ outdir: tempDir.name });

    class TestProject extends Project {
      constructor(scope: Construct, name: string) {
        super(scope, name);

        const hostGamma = new Host(this, 'test-host-gamma', {
          host: 'localhost',
        });
        new Inventory(this, 'test-inv-gamma', {
          hosts: [hostGamma],
        });

        const host = new Host(this, 'test-host', {
          host: 'localhost',
        });
        new Inventory(this, 'test-inv', {
          hosts: [host],
        });

        const play = new Play(this, 'test-play', {
          hosts: [host],
        });

        new Playbook(this, PLAYBOOK_NAME, {
          playDefinition: play,
        });
      }
    }

    new TestProject(app, projectName);

    app.synth();

    expect(fs.existsSync(path.join(tempDir.name, projectName, 'inventories', 'test-inv', 'hosts.yaml'))).toBe(true);
    expect(fs.existsSync(path.join(tempDir.name, projectName, 'inventories', 'test-inv-gamma', 'hosts.yaml'))).toBe(true);
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

        const commandTask = new Task(this, 'test-ping', {
          action: new TaskAction('command', {
            cmd: 'echo',
            argv: ['hello', 'world'],
          }),
        });

        const role = new Role(this, ROLE_NAME, {
          tasks: commandTask,
        });

        const play = new Play(this, 'test-play', {
          hosts: [host],
          roles: RoleTarget.fromRole(this, 'target', role),
        });

        new Playbook(this, PLAYBOOK_NAME, {
          playDefinition: play,
        });
      }
    }

    new TestProject(app, projectName);

    app.synth();

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

        const commandTask = new Task(this, 'test-ping', {
          action: new TaskAction('command', {
            cmd: 'echo',
            argv: ['hello', 'world'],
          }),
        });

        const role = new Role(this, ROLE_NAME, {
          tasks: commandTask,
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
          roles: RoleTarget.fromRole(this, 'target', role),
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