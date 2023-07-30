import * as path from "path";
import { NxMonorepoProject } from "@aws-prototyping-sdk/nx-monorepo";
import { DependencyType } from "projen";
import { JsiiProject } from "projen/lib/cdk";
import { GithubCredentials } from "projen/lib/github";
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
    "constructs",
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
cdkansCli.deps.removeDependency("@types/node", DependencyType.BUILD);
cdkansCli.deps.addDependency("@types/node@^16", DependencyType.RUNTIME);

const testProject = new TypeScriptAppProject({
  parent: monorepo,
  outdir: path.join("packages", "test-project"),
  defaultReleaseBranch: "main",
  name: "test-cdk-ans",
  deps: [cdkans.package.packageName, "constructs"],
  devDeps: ["@types/follow-redirects", "json-schema-to-typescript"],
  gitignore: ["tmp/*", "dist-test/*"],
});
testProject.addTask("synth", {
  description: "synth the project",
  exec: "ts-node src/main.ts",
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

monorepo.synth();
