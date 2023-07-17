const { cdk } = require('projen');
const project = new cdk.JsiiProject({
  author: 'Matthew Rawlings',
  authorAddress: 'awlsring@gmail.com',
  defaultReleaseBranch: 'main',
  name: 'cdk-ans',
  repositoryUrl: 'https://github.com/mattcanemail/cdk-ans.git',
  projenrcTs: true,
  github: false,
  jsiiVersion: '^5',

  peerDeps: [
    'constructs@^10',
  ],

  bundledDeps: [
    'yaml',
    'follow-redirects',
    'fast-json-patch',
  ],
  devDeps: [
    'constructs',
    '@types/follow-redirects',
    'json-schema-to-typescript',
  ],

  gitignore: [
    'tmp/*',
    'dist-test/*',
  ],
});
project.package.addPackageResolutions('@types/lodash@4.14.192');
// project.tsconfig.compilerOptions.noImplicitAny = false;
project.synth();