import { CodeMaker } from 'codemaker';
import { CodeGenerator, GenerateOptions } from './code-generator';
import { Language } from '../import/importer';
import { AnsibleModuleArgumentSpec, AnsibleModuleArgumentSpecType, AnsibleModuleSpec } from '../import/module';
import { snakeToPascalCase } from '../utils';

export class AnsibleModuleCodeGenerator extends CodeGenerator {
  constructor(readonly spec: AnsibleModuleSpec, readonly namespace: string, language: Language, prefix?: string) {
    const pre = prefix ?? namespace.replace(/\./g, '_');
    super(spec.module, language, pre);
    this.name;
  }

  protected writeConstructHeader(code: CodeMaker) {
    code.line('/**');
    if (this.spec.shortDescription) {
      code.line(` * ${this.spec.shortDescription}`);
      code.line(' *');
    }
    if (this.spec.description) {
      for (const line of this.strOrStrList(this.spec.description)) {
        code.line(` * ${line}`);
      }
      code.line(' *');
    }
    if (this.spec.notes) {
      code.line(' * #### Notes:');
      for (const line of this.strOrStrList(this.spec.notes)) {
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
      for (const line of this.strOrStrList(this.spec.author)) {
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
      case AnsibleModuleArgumentSpecType.ANY:
        return 'any';
      default:
        return 'any';
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

  private writePropsLine(code: CodeMaker, name: string, spec: AnsibleModuleArgumentSpec, type?: string) {
    if (spec.description && spec.description.length > 0) {
      this.writeDocumentationHeader(code, spec.description);
    }
    const required = spec.required ? '' : '?';
    if (type) {
      code.line(`readonly ${name}${required}: ${type};`);
    } else if (name === 'freeForm') {
      code.line(`readonly freeForm${required}: string;`);
    } else {
      code.line(`readonly ${name}${required}: ${this.getArgumentType(spec)};`);
    }
  }

  protected writeConstructProps(code: CodeMaker, options: GenerateOptions) {
    options; // ignore for now

    const propertyWithEnum: Record<string, string> = {};

    // loop through options and create enums if needed
    if (this.spec.options) {
      for (const [name, spec] of Object.entries(this.spec.options)) {
        if (spec.choices) {
          if (spec.choices.includes('*regex*')) {
            console.warn(`Skipping enum ${name} because it has a regex choice`);
            continue;
          }
          const enumName = `${this.name}_${name}`;
          this.writeEnum(code, enumName, spec.choices);
          propertyWithEnum[name] = snakeToPascalCase(enumName);
        }
      }
    }

    this.writeDocumentationHeader(code, [
      `Props for the generated action ${this.constructName}`,
    ]);
    code.openBlock(`export interface ${this.constructName}Props extends TaskActionProps`);
    if (this.spec.options) {
      for (const [name, spec] of Object.entries(this.spec.options)) {
        const type = propertyWithEnum.hasOwnProperty(name) ? propertyWithEnum[name] : undefined;
        this.writePropsLine(code, name, spec, type);
      }
    }
    code.closeBlock();
    code.line('');
  }

  protected writeModuleImports(code: CodeMaker) {
    code.line('import { TaskAction, TaskActionProps } from \'cdk-ans\';');
    code.line('');
  }
}