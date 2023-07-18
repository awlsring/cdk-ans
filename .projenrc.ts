import * as path from "path";
import { NxMonorepoProject } from "@aws-prototyping-sdk/nx-monorepo";
import { JsiiProject } from "projen/lib/cdk";

const monorepo = new NxMonorepoProject({
  defaultReleaseBranch: "main",
  name: "cdk-ans",
  projenrcTs: true,
  github: false,
  devDeps: [
    "@aws-prototyping-sdk/nx-monorepo@^0.19.2",
    "eslint-plugin-header",
    "license-checker",
  ],
});

const project = new JsiiProject({
  parent: monorepo,
  outdir: path.join("packages", "cdk-ans"),
  author: "Matthew Rawlings",
  authorAddress: "awlsring@gmail.com",
  defaultReleaseBranch: "main",
  name: "cdk-ans",
  repositoryUrl: "https://github.com/mattcanemail/cdk-ans.git",
  projenrcTs: true,
  github: false,
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
project.package.addPackageResolutions("@types/lodash@4.14.192");

monorepo.synth();
