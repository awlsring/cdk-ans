import * as yargs from 'yargs';
import { readConfigSync, ImportSpec } from '../../config';
import { importModule } from '../../import/dispatch';

const config = readConfigSync();

const DEFAULT_OUTDIR = 'imports';
const LANGUAGES = ['typescript', 'python', 'java', 'go'];

class Command implements yargs.CommandModule {
  public readonly command = 'import [SPEC]';
  public readonly describe = 'Imports modules from Ansible module files';
  public readonly aliases = ['gen', 'import', 'generate'];

  public readonly builder = (args: yargs.Argv) => args
    .positional('SPEC', { default: config.imports, desc: 'import module spec with the syntax <NAMESPACE>@<SOURCE> where NAMESPACE is the collection the module belongs to and SOURCE is a the file path or URI to retrive the module file. Example: ansible.builtin@https://raw.githubusercontent.com/ansible/ansible/devel/lib/ansible/modules/command.py', array: true })
    .example('cdkans import ansible.builtin@https://raw.githubusercontent.com/ansible/ansible/devel/lib/ansible/modules/command.py', 'Imports constructs for the command module with the default prefix derived from namespace. (AnsibleBuiltin)')
    .example('cdkans import ansible.builtin@https://raw.githubusercontent.com/ansible/ansible/devel/lib/ansible/modules/command.py --class-prefix Ansible', 'Imports the module with prefix Ansible')

    .option('output', { default: DEFAULT_OUTDIR, type: 'string', desc: 'Output directory', alias: 'o' })
    .option('class-prefix', { type: 'string', desc: 'A prefix to add to all generated class names. By default, this is derived from the provided namespace. Must be PascalCase' })
    .option('language', { default: config.language, demand: true, type: 'string', desc: 'Output programming language', alias: 'l', choices: LANGUAGES });

  public async handler(argv: any) {
    const imports: string[] = Array.isArray(argv.spec) ? argv.spec : [argv.spec];
    const specs: ImportSpec[] = imports.filter(spec => spec != null).map(parseImports);
    const classNamePrefix = argv.classPrefix === false ? '' : argv.classPrefix;

    await importModule(specs, {
      outdir: argv.output,
      targetLanguage: argv.language,
      classNamePrefix,
    });
  }
}

function parseImports(spec: string): ImportSpec {
  const splitImport = spec.split('@');

  if (splitImport.length === 1) {
    throw new Error('Unable to parse import specification. Syntax is NAMESPACE@SOURCE');
  }

  if (splitImport.length === 2) {
    return {
      namespace: splitImport[0],
      source: splitImport[1],
    };
  }

  throw new Error('Unable to parse import specification. Syntax is [NAMESPACE@SOURCE');
}

module.exports = new Command();