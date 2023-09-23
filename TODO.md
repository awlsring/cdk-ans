## Things todo

List of things todo is no particular order

### Default modules exposure

Since all tasks will be generated, figure out a way to publish these so they can be directly consumed. A library like `aws-cdk-lib` could be a good pattern, where subpackages live under here. 

As these are auto-generated though, I'll need to figure out a good pattern to auto-updated them. An option would be a github action that runs once a week, generates all the modules, and makes a pull request if there are diffs between what was made and what is currently in the repo.
