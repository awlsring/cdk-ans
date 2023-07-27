import { CodeMaker } from 'codemaker';
import * as YAML from 'yaml';
import { CodeGenerator, GenerateOptions, ImportFileType, ImportOptions, Importer, Language } from './importer';
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

export class AnsibleModuleCodeGenerator extends CodeGenerator {
  constructor(readonly spec: AnsibleModuleSpec, readonly namespace: string, language: Language, prefix?: string) {
    super(spec.module, language, prefix);
    this.name;
  }

  protected writeConstructHeader(code: CodeMaker) {
    code.line('/**');
    if (this.spec.shortDescription) {
      code.line(` * ${this.spec.shortDescription}`);
      code.line(' *');
    }
    if (this.spec.description) {
      for (const line of this.spec.description) {
        code.line(` * ${line}`);
      }
      code.line(' *');
    }
    if (this.spec.notes) {
      code.line(' * #### Notes:');
      for (const line of this.spec.notes) {
        code.line(` * ${line}`);
      }
      code.line(' *');
    }
    if (this.spec.attributes) {
      code.line(' * #### Attributes:');
      for (const [key, value] of Object.entries(this.spec.attributes)) {
        code.line(` * - ${key}:`);
        for (const [k, v] of Object.entries(value)) {
          code.line(` *   - ${k}: ${v}`);
        }
      }
      code.line(' *');
    }
    if (this.spec.author) {
      code.line(' * #### Created by:');
      for (const line of this.spec.author) {
        code.line(` * - ${line}`);
      }
      code.line(' *');
    }
    if (this.spec.versionAdded) {
      code.line(` * @versionAdded ${this.spec.versionAdded}`);
    }
    code.line(` * @collection ${this.namespace}`);
    code.line(' */');
  }

  private getArgumentType(spec: AnsibleModuleArgumentSpec): string {
    switch (spec.type) {
      case AnsibleModuleArgumentSpecType.LIST:
        if (!spec.elements) {
          throw new Error('List argument type requires elements to be specified');
        }
        if (spec.elements === AnsibleModuleArgumentSpecType.LIST) {
          throw new Error('Nested lists are not supported');
        }
        const type = this.getArgumentType({ type: spec.elements });
        return `${type}[]`;
      case AnsibleModuleArgumentSpecType.DICTIONARY:
        return 'Record<string, any>';
      case AnsibleModuleArgumentSpecType.BOOLEAN:
        return 'boolean';
      case AnsibleModuleArgumentSpecType.INTEGER:
      case AnsibleModuleArgumentSpecType.FLOAT:
        return 'number';
      case AnsibleModuleArgumentSpecType.STRING:
      case AnsibleModuleArgumentSpecType.PATH:
      case AnsibleModuleArgumentSpecType.RAW:
      case AnsibleModuleArgumentSpecType.JSON_ARG:
      case AnsibleModuleArgumentSpecType.JSON:
      case AnsibleModuleArgumentSpecType.BYTES:
      case AnsibleModuleArgumentSpecType.BITS:
        return 'string';
      default:
        throw new Error(`Unsupported argument type: ${spec.type}`);
    }
  }

  protected writeConstruct(code: CodeMaker, options: GenerateOptions): void {
    options; // ignore for now
    this.writeConstructHeader(code);
    code.openBlock(`export class ${this.constructName}Action extends TaskAction`);
    code.openBlock(`constructor(props: ${this.constructName}Props)`);
    code.line(`super(\'${this.namespace}.${this.name}\', props);`);
    code.closeBlock();
    code.closeBlock();
  }

  protected writeConstructProps(code: CodeMaker, options: GenerateOptions) {
    options; // ignore for now
    this.writeDocumentationHeader(code, [
      `Props for the generated action ${this.constructName}`,
    ]);
    code.openBlock(`export interface ${this.constructName}Props extends TaskActionProps`);
    for (const [name, spec] of Object.entries(this.spec.options)) {
      if (spec.description && spec.description.length > 0) {
        this.writeDocumentationHeader(code, spec.description);
      }
      code.line(`readonly ${name}: ${this.getArgumentType(spec)};`);
    }
    code.closeBlock();
    code.line('');
  }

  protected writeModuleImports(code: CodeMaker) {
    code.line('import { TaskAction, TaskActionProps } from \'cdk-ans\';');
    code.line('');
  }
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