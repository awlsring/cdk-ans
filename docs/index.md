# cdk-ans

**cdkans** is a framework for defining Ansible playbooks in a CDK-esq way, following concepts that power other CDK frameworks such as [AWS CDK](https://github.com/aws/aws-cdk), [CDKTF](https://github.com/hashicorp/terraform-cdk), and [CDK8s](https://github.com/cdk8s-team/cdk8s). This project currently is in an alpha state and there may be breaking changes as it is developed.

## Packages
This repository is a monorepo containing the following packages:

* `cdk-ans` - The core framework for defining Ansible playbooks.
* `cdk-ans-cli` - A CLI for working with cdk-ans. This currently only supports code generation for Ansible modules.

## Roadmap

Currently this project is in alpha. Most critical features for defining playbooks are implemented, but there are several small additions to make / QOL features to add.

Some future feature targets are...

* Pregenerated modules as consumable construct libraries.
* Project template generation