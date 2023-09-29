import * as path from "path";
import { NxMonorepoProject } from "@aws-prototyping-sdk/nx-monorepo";
import { DependencyType } from "projen";
import { JsiiProject } from "projen/lib/cdk";
import { GithubCredentials } from "projen/lib/github";
import { PythonProject } from "projen/lib/python";
import { TypeScriptAppProject, TypeScriptProject } from "projen/lib/typescript";

const monorepo = new NxMonorepoProject({
  defaultReleaseBranch: "main",
  name: "cdk-ans",
  projenrcTs: true,
  github: true,
  release: false,
  monorepoUpgradeDeps: true,
  autoApproveUpgrades: true,
  autoApproveOptions: {
    secret: "GITHUB_TOKEN",
    allowedUsernames: ["awlsring"],
  },
  githubOptions: {
    projenCredentials: GithubCredentials.fromPersonalAccessToken({
      secret: "PROJEN_GITHUB_TOKEN",
    }),
  },
  devDeps: [
    "@aws-prototyping-sdk/nx-monorepo@^0.19.2",
    "eslint-plugin-header",
    "license-checker",
    "tmp",
    "@types/tmp",
  ],
  gitignore: [".vscode", "cdkans.yaml", ".DS_Store"],
});

const cdkans = new JsiiProject({
  parent: monorepo,
  outdir: path.join("packages", "cdk-ans"),
  author: "Matthew Rawlings",
  authorAddress: "awlsring@gmail.com",
  defaultReleaseBranch: "main",
  name: "cdk-ans",
  repositoryUrl: "https://github.com/awlsring/cdk-ans.git",
  jsiiVersion: "^5",
  peerDeps: ["constructs@^10"],
  bundledDeps: ["yaml", "follow-redirects", "fast-json-patch"],
  devDeps: [
    "constructs@^10.0.0",
    "@types/follow-redirects",
    "json-schema-to-typescript",
  ],
  gitignore: ["tmp/*", "dist-test/*"],
  publishToPypi: {
    distName: "cdk-ans",
    module: "cdk_ans",
  },
  publishToNuget: {
    dotNetNamespace: "CdkAns",
    packageId: "CdkAns",
  },
  publishToMaven: {
    javaPackage: "org.cdkans",
    mavenGroupId: "org.cdkans",
    mavenArtifactId: "cdk-ans",
  },
  publishToGo: {
    moduleName: "github.com/awlsring/cdk-ans",
  },
});
cdkans.gitattributes.addAttributes("**/test/resources/*", "linguist-generated");
cdkans.package.addPackageResolutions("@types/lodash@4.14.192");

const cdkansCli = new TypeScriptProject({
  parent: monorepo,
  outdir: path.join("packages", "cdk-ans-cli"),
  entrypoint: "",
  defaultReleaseBranch: "main",
  name: "cdk-ans-cli",
  bin: {
    cdkans: "bin/cdkans",
  },
  deps: [
    cdkans.package.packageName,
    "constructs",
    "codemaker",
    "constructs",
    "fs-extra@^8",
    "jsii-srcmak",
    "jsii-pacmak",
    "sscaff",
    "yaml",
    "yargs@^15",
    "json2jsii",
    "colors",
    "ajv",
    "table",
    "semver",
    "axios",
    "tmp",
    "simple-git",
    "shelljs",
  ],
  devDeps: [
    "@types/fs-extra@^8",
    "@types/json-schema",
    "@types/semver",
    "glob",
    "@types/glob",
    "typescript-json-schema",
  ],
  gitignore: ["tmp/*", "dist-test/*"],
});
cdkansCli.gitattributes.addAttributes(
  "**/test/resources/*",
  "linguist-generated",
);
cdkansCli.deps.removeDependency("@types/node", DependencyType.BUILD);
cdkansCli.deps.addDependency("@types/node@^16", DependencyType.RUNTIME);

const testProject = new TypeScriptAppProject({
  parent: monorepo,
  outdir: path.join("packages", "test-project"),
  defaultReleaseBranch: "main",
  name: "test-cdk-ans",
  deps: [cdkans.package.packageName, "constructs@^10.0.0"],
  devDeps: ["@types/follow-redirects", "json-schema-to-typescript"],
  gitignore: ["tmp/*", "dist-test/*", "imports"],
});
testProject.addTask("synth", {
  description: "synth the project",
  exec: "ts-node src/main.ts",
});
// override the build task
testProject.removeTask("build");
testProject.addTask("build", {
  description: "don't build ;)",
  exec: "echo 'no build'",
});
testProject.eslint?.addOverride({
  files: ["*.ts"],
  rules: {
    "@typescript-eslint/no-require-imports": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: true,
      },
    ],
  },
});

const website = new PythonProject({
  parent: monorepo,
  moduleName: "nil",
  name: "cdk-ans-docs",
  authorName: "awlsring",
  authorEmail: "awlsring@gmail.com",
  version: "0.0.1",
  outdir: "website",
  deps: ["mkdocs", "mkdocs-material", "mkdocs-redirects"],
});
website.gitignore.addPatterns(
  "tests",
  "nil",
  "site",
  ".projen",
  "project.json",
  ".gitignore",
  ".gitattributes",
  "requirements.txt",
  "requirements-dev.txt",
);
website.removeTask("build");
website.addTask("build", {
  description: "build the docs",
  exec: "mkdocs build",
});
website.addTask("docs:serve", {
  description: "serve the docs",
  exec: "mkdocs serve",
});
website.addTask("docs:deploy", {
  description: "deploy the docs",
  exec: "mkdocs gh-deploy",
});

monorepo.synth();
