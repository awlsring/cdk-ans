## Things todo

List of things todo is no particular order

### General

### Synthesized names
Currently naming of constructs in synthesizing is defaulting to `class.node.id`. This sucks for readability, and will probably break something at some point. Looks into a pattern to use without of allowing an optional "name" key (maybe call something like 'readableName' or 'synthesizedName') that will be used in place of the node.id if specified.

### Tasks

#### Variable, Logical Operation, Conditions Wrappers
A lot of values written in tasks currently need to be as strings that are in the ansible playbooks today. Looks at all these different fields and see how to better abstract them to make safer and cleaner to use. Todos are scattered in the repo, but a few quicks thoughts are...

- Condition wrappers
- Common variables (item, anisble built in, gather facts, etc) 

### Default modules exposure

Since all tasks will be generated, figure out a way to publish these so they can be directly consumed. A library like `aws-cdk-lib` could be a good pattern, where subpackages live under here. 

As these are auto-generated though, I'll need to figure out a good pattern to auto-updated them. An option would be a github action that runs once a week, generates all the modules, and makes a pull request if there are diffs between what was made and what is currently in the repo.
