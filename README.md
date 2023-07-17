# CDK Ansible

This is an attempt to define a CDK-esq framework for Ansible playbook definitions. This doesn't work yet, and probably won't for awhile. A lot of this initial code is pulled for cdk8s core as a starting point.

App - top unit of abstraction
    Project - collection of resources (roles, playbooks, inventories, etc)
        Task - unit of logic to perform (is declared top level, put into site.yaml)
        Handler - unit of logic to perform on notification (is declared top level, put into /handlers)
        File - unit of data to be copied (is declared top level, put into /files)
        Template - unit of data to be copied and rendered (is declared top level, put into /templates)

        Role - collection of files, roles, tasks, handlers for reusable composure
            Task - unit of logic to perform
            Handler - unit of logic to perform on notification
            File - unit of data to be copied
            Template - unit of data to be copied and rendered
            Variable - unit of variable definition

        Playbook - collection of tasks, handlers, etc
        * at synth, a playbook called 'site.yaml' is created that will run all playbooks in the project *
            Roles - collection of roles to be applied
            Task - unit of logic to perform
            Handler - unit of logic to perform on notification
            File - unit of data to be copied
            Template - unit of data to be copied and rendered
            Variable - unit of variable definition

        Inventory - collection of hosts, groups, etc
            Host - unit of host definition
                Variable - unit of variable definition at group level
            Group - unit of group definition
                Host - unit of host definition
                Variable - unit of variable definition at group level

App - top unit of abstraction
    Project - collection of resources (roles, playbooks, inventories, etc)

        Resource - a composable grouping of constructs that create an ansible resource (Inv, Role, Playbook)
        Unit - a small piece of a resource (Task, Handler, File, Template, Variable)

        Resources are composed of units, and when synth collects them within itself

        Units that are attached to a project scope but are not part of a resource are organized into the generic resource holding for a project ( An unbound file will be placed into the project /file holding )

App - top unit of abstraction
    Project - collection of resources (roles, playbooks, inventories, etc)

        Collection - a grouping of resources (Role, Inventory)
        Resource - a composable file built of units (Playbook, File, Template)
        Unit - a small piece of a definition used to create a whole resource (a task, handler, variable, etc)

```typescript

cosnt app = new App();

export class MyProject extends Project {
    constructor(scope: Construct, id: string) {
        super(scope, id);

        const myTask = new Task(this, 'task', {
            name: 'myTask',
            command: 'echo "hello world"',
        });

        const myFile = new File(this, 'file', {
            name: 'myFile',
            path: '/tmp/myFile',
            content: 'hello world',
        });

        const myFile2 = new File(this, 'file2', {
            name: 'myFile2',
            path: '/tmp/myFile2',
            content: 'hello world',
        });

        const myRole = new Role(this, 'role', {
            name: 'myRole',
            tasks: [myTask],
            files: [myFile],
        });

        myRole.addFile(myFile2);

    }
}


```

