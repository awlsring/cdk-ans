import * as yargs from 'yargs';
import { readConfigSync, ImportSpec, ImportSource } from '../../config';
import { importDispatch } from '../../import/dispatch';

const config = readConfigSync();

const DEFAULT_OUTDIR = 'src/imports';
const LANGUAGES = ['typescript', 'python', 'java', 'go'];
const IMPORT_TYPES = ['module', 'role'];

class Command implements yargs.CommandModule {
  public readonly command = 'import';
  public readonly describe = 'Imports modules from Ansible module files';
  public readonly aliases = ['gen', 'import', 'generate'];

  public readonly builder = (args: yargs.Argv) => args
    .example('cdkans import', 'Imports all specs from cdkans.yaml')
    .example('cdkans import', 'Imports all specs from cdkans.yaml')

    .option('type', { choices: IMPORT_TYPES, type: 'string', describe: 'The type of import to perform', alias: 't' })
    .option('namespace', { type: 'string', desc: 'The type ', alias: 't' })
    .option('source', { type: 'string', desc: 'The source of the import.', alias: 't' })
    .option('prefix', { type: 'string', desc: 'A prefix to add to all generated class names. By default, this is derived from the provided namespace. Must be PascalCase' })
    .option('output', { default: DEFAULT_OUTDIR, type: 'string', desc: 'Output directory', alias: 'o' })
    .option('language', { default: config.language, demand: true, type: 'string', desc: 'Output programming language', alias: 'l', choices: LANGUAGES });

  public async handler(argv: any) {
    const specs = determineSpecs(argv);

    await importDispatch(specs, {
      outdir: argv.output,
      targetLanguage: argv.language,
    });
  }
}

function determineSpecs(argv: any): ImportSpec[] {
  const imports: ImportSpec[] = [];
  if (argv.type && argv.namespace && argv.source) {
    imports.push({
      type: argv.type,
      namespace: argv.namespace,
      source: parseSource(argv.source),
      prefix: argv.prefix ?? undefined,
    });
  } else if (config.imports) {
    imports.push(...config.imports);
  }

  if (imports.length === 0) {
    throw new Error('No imports specified');
  }

  return imports;
}

function parseSource(source: string): ImportSource {
  if (!source.includes('@')) {
    throw new Error(`Invalid source: ${source}. Expected format: <type>@<value>`);
  }

  const [type, value] = source.split('@');
  switch (type) {
    case 'file':
      return { file: value };
    case 'repo':
      return { repo: value };
    default:
      throw new Error(`Invalid source type: ${type}`);
  }
}

module.exports = new Command();