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
}

export interface AnsibleModuleArgumentSpec {
  readonly type: AnsibleModuleArgumentSpecType;
  readonly description?: string[];
  readonly default?: any;
  readonly elements?: AnsibleModuleArgumentSpecType;
  readonly required?: boolean;
  readonly versionAdded?: string;
  readonly choices?: string[];
}

export interface AnsibleModuleSpec {
  readonly module: string;
  readonly options: { [key: string]: AnsibleModuleArgumentSpec };
  readonly shortDescription?: string;
  readonly notes?: string[];
  readonly description?: string[];
  readonly versionAdded?: string;
  readonly attributes?: Record<string, Record<string, any>>;
  readonly author?: string[];
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
    repo;
    throw new Error('Not implemented');
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
    const documentationRegex = new RegExp("r?'''([\\s\\S]*?)'''|r?\"\"\"([\\s\\S]*?)\"\"\"");
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