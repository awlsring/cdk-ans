const { cdk } = require('projen');
const project = new cdk.JsiiProject({
  author: 'Matthew Rawlings',
  authorAddress: 'mattcanemail@gmail.com',
  defaultReleaseBranch: 'main',
  name: 'cdkans',
  repositoryUrl: 'https://github.com/mattcanemail/cdkans.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();