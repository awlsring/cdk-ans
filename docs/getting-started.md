# Getting Started
These are a few steps to help get started with cdk-ans. This guide assumes you are at least somewhat familiar with [Ansible](https://www.ansible.com/). If you are completely new, it is recommended to go through the [Ansible documentation](https://docs.ansible.com/ansible/latest/index.html) first and to familiarize yourself with the basics.

To follow along, you will need to have [Node.js](https://nodejs.org/en/) installed.

You will also need to install the `cdk-ans-cli`. This can be done with the following command.
```bash
npm install -g cdk-ans-cli
```
## Create a new project
### Project setup
Long term this will be done with a CLI, but for now you will need to do most setup on your own. To follow this, you will need to create a new typescript project.

```bash 
mkdir my-cdk-ans-project
cd my-cdk-ans-project
npm init -y
npm install --save-dev typescript
npm install --save-dev ts-node
npx tsc --init
```

In your `package.json` and the following code to your scripts section...
```json
"scripts": {
    "synth": "ts-node src/main.ts"
}
```

In your `tsconfig.json` file, add the following to the `compilerOptions` section...
```json
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "lib",
    ...more options...
  }
```

After your project is setup, create a new directory called `src` and create an empty `main.ts` file.

### Install cdk-ans
Once the project workspace is setup, you will need to install the `cdk-ans` package. This can be done with the following command.

```bash
npm install --save-dev cdk-ans
```

Once `cdk-ans` is installed, you can now add the following to your `main.ts` file.

```typescript
import { App, Project } from 'cdk-ans';

const app = new App();

new Project(app, 'test-project');
app.synth();
```

The next section will cover what these actually do.

## Apps and Projects
Apps are structured as a tree of projects. Projects are the container for ansible resources (inventories, playbooks, and roles), and are composed of a collection of constructs, which allow for abstractions in defining these resources. Details on utilizing these resources will be covered in later sections.

This initial code created in the section prior defines an app with a single empty project. When synthesized, this app will generate a directory for each project defined with sub directories and yaml files generated for the various resources that were defined.

To see the output of this, you can synthesize your project by running the main file with the command `npm run synth`.

After running this command, an empty directory `test-project` will have been generated in your `dist` directory.

## Addings resources

Different types of resources can be added to a project. There are 3 high level resources, `Inventory`, `Playbook`, and `Role`. Each of these resources when added to a project will generate subdirectories and yaml files for the resource. Below we will cover how to quickly added each of these resources to your project. More details on these types of resources can be found in the [concepts](../concepts/overview) section.

In the code below, we will add an inventory that creates a localhost, a role that echoes a string, and a playbook that uses that role.

```typescript
//create the host and inventory
const localhost = new Host(project, 'localhost', {
  host: 'localhost',
});
new Inventory(project, 'inventory', {
  hosts: [localhost],
});

// create the role
const task = new Task(project, 'test-command', {
  action: new TaskAction('command', {
    cmd: 'echo hello world',
  }),
});
const role= new Role(project, 'echoer', {
  name: 'echoer',
  tasks: task,
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
```

After adding this code, you can run `npm run synth` to build your project. You should now see a directory structure like the following.

```
dist
└── test-project
    ├── playbook.yaml
    ├── inventories
    │   └── inventory
    │       └── hosts.yaml
    └── roles
        └── echoer
            └── tasks
                └── main.yml
```