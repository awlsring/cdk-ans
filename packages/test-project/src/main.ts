import { AnsibleConnection, App, Host, HostVariable, Inventory, Play, Playbook, Project, Role, RoleTarget, Task, TaskAction } from 'cdk-ans';

const app = new App();

const project = new Project(app, 'test-project');

// make the env
const localhost = new Host(project, 'localhost', {
  host: 'localhost',
  connectionType: AnsibleConnection.LOCAL,
  variables: [
    new HostVariable(project, 'localhost-user', {
      name: 'user',
      value: 'awlsring',
    }),
  ],
});
new Inventory(project, 'inventory', {
  hosts: [localhost],
});

// create the role
const task = new Task(project, 'test-command', {
  action: new TaskAction('command', {
    cmd: 'echo "hello cdk day"',
  }),
});

const task2 = new Task(project, 'test-command-2', {
  action: new TaskAction('command', {
    cmd: 'echo "hello again"',
  }),
});

const role = new Role(project, 'echoer', {
  name: 'echoer',
  tasks: task.next(task2),
});

// define the playbook
const play = new Play(project, 'play', {
  name: 'Echo play',
  hosts: [localhost],
  roles: RoleTarget.fromRole(project, 'target', role),
});

new Playbook(project, 'playbook', {
  playDefinition: play,
});

app.synth();