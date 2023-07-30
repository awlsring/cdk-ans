import * as path from 'path';
import * as fs from 'fs-extra';
import simpleGit from 'simple-git';
import { dirSync } from 'tmp';
import * as YAML from 'yaml';
import { ImportFileType, ImportOptions, Importer } from './importer';
import { CodeGenerator } from '../codegen/code-generator';
import { AnsibleModuleCodeGenerator } from '../codegen/module-generator';
import { convertKeysToCamel } from '../utils';

export enum AnsibleModuleArgumentSpecType {
  STRING = 'str',
  LIST = 'list',
  DICTIONARY = 'dict',
  BOOLEAN = 'bool',
  INTEGER = 'int',
  FLOAT = 'float',
  PATH = 'path',
  RAW = 'raw',
  JSON_ARG = 'jsonarg',
  JSON = 'json',
  BYTES = 'bytes',
  BITS = 'bits',
  ANY = 'any',
}

export interface AnsibleModuleArgumentSpec {
  readonly type: AnsibleModuleArgumentSpecType;
  readonly description?: string | string[];
  readonly default?: any;
  readonly elements?: AnsibleModuleArgumentSpecType;
  readonly required?: boolean;
  readonly versionAdded?: string;
  readonly choices?: string[];
}

export interface AnsibleModuleSpec {
  readonly module: string;
  readonly options?: { [key: string]: AnsibleModuleArgumentSpec };
  readonly shortDescription?: string;
  readonly notes?: string[];
  readonly description?: string | string[];
  readonly versionAdded?: string;
  readonly attributes?: Record<string, Record<string, any>>;
  readonly author?: string | string[];
}

export class ModuleImporter extends Importer {
  async loadModules(options: ImportOptions): Promise<CodeGenerator[]> {
    if (this.spec.source.file) {
      const spec = await this.loadModuleFromFile(this.spec.source.file);
      return [new AnsibleModuleCodeGenerator(spec, this.spec.namespace, options.targetLanguage, this.spec.prefix)];
    }
    if (this.spec.source.repo) {
      const specs = await this.loadModuleFromRepo(this.spec.source.repo);
      return specs.map((spec) => new AnsibleModuleCodeGenerator(spec, this.spec.namespace, options.targetLanguage, this.spec.prefix));
    }
    throw new Error('Invalid source');
  }

  async loadModuleFromFile(file: string): Promise<AnsibleModuleSpec> {
    const extension = this.determineFileType(file);
    const specFile = await this.readFileFromPathOrURI(file);
    switch (extension) {
      case ImportFileType.YAML:
        return this.extractDocumentationFromYamlFile(specFile);
      case ImportFileType.PYTHON:
        return this.extractDocumentationFromPythonFile(specFile);
      default:
        throw new Error(`Unsupported file type: ${extension}`);
    }
  }

  async loadModuleFromRepo(repo: string): Promise<AnsibleModuleSpec[]> {
    const specs: AnsibleModuleSpec[] = [];
    const repoDir = dirSync({ unsafeCleanup: true });
    try {
      // clone the repo
      await simpleGit().clone(repo, repoDir.name);

      // walk the repo to find a modules directory
      const modulesDir = await this.findModulesDirectory(repoDir.name);
      if (!modulesDir) {
        throw new Error(`No modules directory found in ${repoDir.name}`);
      }

      // list all files in the modules directory
      const files = await this.readDirectory(modulesDir);

      // extract documentation from all files
      for (const file of files) {
        try {
          const extension = this.determineFileType(file);
          const specFile = await this.readFileFromPathOrURI(file);
          switch (extension) {
            case ImportFileType.YAML:
              specs.push(await this.extractDocumentationFromYamlFile(specFile));
              break;
            case ImportFileType.PYTHON:
              specs.push(await this.extractDocumentationFromPythonFile(specFile));
              break;
            default:
              throw new Error(`Unsupported file type: ${extension}`);
          }
        } catch (e) {
          console.log(`Failed to extract documentation from ${file}: ${e}`);
          console.log(`Skipping ${file}`);
        }
      }
    } catch (e) {
      console.log(`Failed to load module from repo ${repo}: ${e}`);
      repoDir.removeCallback();
      throw e;
    }
    repoDir.removeCallback();
    return specs;
  }

  private async readDirectory(dir: string): Promise<string[]> {
    const files = await fs.readdir(dir);
    const filesWithFullPath = files.map((file) => path.join(dir, file));
    return filesWithFullPath.filter((file) => !file.endsWith('__init__.py'));
  }

  private async findModulesDirectory(dir: string): Promise<string | undefined> {
    const files = await this.readDirectory(dir);
    let modulesDir = files.find((file) => file.endsWith('modules'));
    if (modulesDir) {
      return modulesDir;
    }
    const subDirs = await Promise.all(files.map((file) => fs.stat(file).then((stat) => ({ file, stat }))));
    const subDirsWithFullPath = subDirs.filter((subDir) => subDir.stat.isDirectory()).map((subDir) => subDir.file);
    for (const subDir of subDirsWithFullPath) {
      modulesDir = await this.findModulesDirectory(subDir);
      if (modulesDir) {
        return modulesDir;
      }
    }
    return undefined;
  }


  private async extractDocumentationFromYamlFile(file: string): Promise<AnsibleModuleSpec> {
    const documentationYaml = YAML.parseAllDocuments(file);
    if (documentationYaml.length !== 1) {
      throw new Error('Failed to parse documentation YAML');
    }

    const documentationYamlObject = documentationYaml[0].toJSON();
    const documentationYamlObjectCamelCase = convertKeysToCamel(documentationYamlObject);
    return documentationYamlObjectCamelCase;
  }

  private async extractDocumentationFromPythonFile(file: string): Promise<AnsibleModuleSpec> {
    const documentationRegex = /(?:DOCUMENTATION\s*=\s*r*['"`]{3})(.*?)(?:(['"`]{3}))/s;
    const match = file.match(documentationRegex);

    if (!match) {
      throw new Error('Failed to extract documentation from file');
    }

    const spec = await this.extractDocumentationFromYamlFile(match[1]);
    return spec;
  }

  async convertNamespaceToPascalCase(namespace: string): Promise<string> {
    return namespace
      .split('.')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');
  }
}