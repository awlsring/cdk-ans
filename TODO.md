## Things todo

List of things todo is no particular order

### Tasks
#### Class structure
Determine how tasks should be modeled. Current approach is having a generic task that is flexible, with each type of action having its own variant (File extends Task, Command extends Task). This seems uneeded as the only difference seems to be the action. Alternate approach could be having one Task class, and having per module classes that extend TaskAction that get passed into the task.

#### Code generation
Tasks are predictable and documented. Rather than writing all of these, generation is more scalable, which also allows for providing code bindings for community modules that could be import rather than manually defined

Current plan is something like

#### Variable, Logical Operation, Conditions Wrappers
A lot of values written in tasks currently need to be as strings that are in the ansible playbooks today. Looks at all these different fields and see how to better abstract them to make safer and cleaner to use. Todos are scattered in the repo, but a few quicks thoughts are...

- Condition wrappers
- Common variables (item, anisble built in, gather facts, etc) 

* Write a python script that can go to a module page ([such as meta](https://github.com/ansible/ansible/blob/devel/lib/ansible/modules/meta.py)) and extract the DOCUMENTATION into a yaml file.
* Take this file, and run through a class generator that will generate the classes for the module. This will likely need to be written per language, but there may be a short cut to this. See how CDK8s and CDKTF do this.

These scripts should be part of a new package, `cdk-ans-cli` that more functionality will be added to later.

### CDK ANS Structure
Create a structure similar to other cdks that incorporate settings in a cdkans.yaml file. This can allow listing of things that should be auto imported, set defaults for the cli, and maybe set project app defaults. See what other CDKs use this for help plan out

### Synthesized names
Currently naming of constructs in synthesizing is defaulting to `class.node.id`. This sucks for readability, and will probably break something at some point. Looks into a pattern to use without of allowing an optional "name" key (maybe call something like 'readableName' or 'synthesizedName') that will be used in place of the node.id if specified.