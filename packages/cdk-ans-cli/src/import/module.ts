import { CodeMaker } from 'codemaker';
import * as YAML from 'yaml';
import { GenerateOptions, ImportFileType, Importer } from './importer';
import { ImportSpec } from '../config';
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
  readonly shortDescription: string;
  readonly notes: string[];
  readonly description: string[];
  readonly versionAdded: string;
  readonly attributes: Record<string, any>;
  readonly author: string[];
}

export class ModuleImporter extends Importer {
  constructor(readonly spec: ImportSpec) {
    super();
  }

  get moduleNames(): string[] {
    return [];
  }

  async generateTypeScript(code: CodeMaker, moduleName: string, options: GenerateOptions) {
    code;
    moduleName;
    options;
  }

  async loadSpec() {
    const extension = this.determineFileType(this.spec.source);
    const specFile = await this.readFileFromPathOrURI(this.spec.source);
    switch (extension) {
      case ImportFileType.YAML:
        return this.extractDocumentationFromYamlFile(specFile);
      case ImportFileType.PYTHON:
        return this.extractDocumentationFromPythonFile(specFile);
      default:
        throw new Error(`Unsupported file type: ${extension}`);
    }
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
}