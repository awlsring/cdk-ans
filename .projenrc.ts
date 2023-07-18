import * as path from "path";
import { NxMonorepoProject } from "@aws-prototyping-sdk/nx-monorepo";
import { JsiiProject } from "projen/lib/cdk";
import { GithubCredentials } from "projen/lib/github";
import { TypeScriptAppProject } from "projen/lib/typescript";

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
  ],
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
});
cdkans.package.addPackageResolutions("@types/lodash@4.14.192");

const testProject = new TypeScriptAppProject({
  parent: monorepo,
  outdir: path.join("packages", "test-project"),
  defaultReleaseBranch: "main",
  name: "test-cdk-ans",
  devDeps: [
    "constructs",
    "@types/follow-redirects",
    "json-schema-to-typescript",
    cdkans.package.packageName,
  ],
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
