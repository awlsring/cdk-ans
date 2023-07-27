import * as path from 'path';
import axios from 'axios';
import { CodeMaker } from 'codemaker';
import * as fs from 'fs-extra';
import * as srcmak from 'jsii-srcmak';
import { CodeGenerator } from '../codegen/code-generator';
import { ImportSpec } from '../config';
import { convertToFileCase, mkdtemp } from '../utils';

export enum Language {
  TYPESCRIPT = 'typescript',
  PYTHON = 'python',
  DOTNET = 'dotnet',
  JAVA = 'java',
  GO = 'go',
}

export enum ImportFileType {
  YAML = 'yaml',
  JSON = 'json',
  PYTHON = 'py',
}

export enum ImportType {
  MODULE = 'module',
}

export interface ImportOptions {
  readonly moduleNamePrefix?: string;
  readonly targetLanguage: Language;
  readonly outdir: string;
  /**
   * Path to copy the output .jsii file.
   * @default - jsii file is not emitted
   */
  readonly outputJsii?: string;
}

export abstract class Importer {
  constructor(readonly spec: ImportSpec) {}

  protected determineFileType(filePathOrURI: string): string {
    const ext = path.extname(filePathOrURI);
    switch (ext) {
      case '.yaml':
      case '.yml':
        return ImportFileType.YAML;
      case '.json':
        return ImportFileType.JSON;
      case '.py':
        return ImportFileType.PYTHON;
      default:
        throw new Error(`Unsupported file type: ${ext}`);
    }
  }

  protected async readFileFromPathOrURI(filePathOrURI: string): Promise<string> {
    const isRemoteFile = filePathOrURI.startsWith('http://') || filePathOrURI.startsWith('https://');
    if (isRemoteFile) {
      const response = await axios.get(filePathOrURI);
      return response.data;
    } else {
      const data = fs.readFileSync(filePathOrURI, 'utf-8');
      return data;
    }
  }

  protected abstract loadModules(options: ImportOptions): Promise<CodeGenerator[]>;

  public async import(options: ImportOptions) {
    const code = new CodeMaker();

    const outdir = path.resolve(options.outdir);
    await fs.mkdirp(outdir);
    const isTypescript = options.targetLanguage === Language.TYPESCRIPT;

    const modules = await this.loadModules(options);

    for (const module of modules) {
      // output the name of the imported resource
      console.log(module.name);

      const fileName = convertToFileCase(module.prefix ? `${module.prefix}_${module.filename}.ts` : `${module.filename}.ts`);
      code.openFile(fileName);
      code.indentation = 2;
      await module.generate(code, {});

      code.closeFile(fileName);

      if (isTypescript) {
        await code.save(outdir);
      }

      if (!isTypescript || options.outputJsii) {
        await mkdtemp(async (staging: string) => {
          // this is not typescript, so we generate in a staging directory and
          // use jsii-srcmak to compile and extract the language-specific source
          // into our project.
          await code.save(staging);

          // these are the module dependencies we compile against
          const deps = ['@types/node', 'constructs', 'cdk-ans'];

          const opts: srcmak.Options = {
            entrypoint: fileName,
            moduleKey: module.prefix ? `${module.prefix}_${module.filename}` : module.filename,
            deps: deps.map(dep => path.dirname(require.resolve(`${dep}/package.json`))),
          };

          // used for testing.
          if (options.outputJsii) {
            opts.jsii = { path: options.outputJsii };
          }

          // python!
          if (options.targetLanguage === Language.PYTHON) {
            const moduleName = `${module.prefix ? `${module.prefix}.${module.filename}` : module.filename}`.replace(/-/g, '_');
            opts.python = {
              outdir: outdir,
              moduleName,
            };
          }

          // java!
          if (options.targetLanguage === Language.JAVA) {
            const javaName = module.name.replace(/\//g, '.').replace(/-/g, '_');
            opts.java = {
              outdir: outdir,
              package: `imports.${module.prefix ? module.prefix + '.' + javaName : javaName}`,
            };
          }

          // dotnet!
          if (options.targetLanguage === Language.DOTNET) {
            const dotnetName = module.name.replace(/\//g, '.').replace(/-/g, '_');
            opts.csharp = {
              outdir: outdir,
              namespace: `Imports.${module.prefix ? module.prefix + '.' + dotnetName : dotnetName}`,
            };
          }

          // go!
          if (options.targetLanguage === Language.GO) {
            const { userModuleName, userModulePath } = this.getGoModuleName(outdir);
            const relativeDir = path.relative(userModulePath, outdir);
            const importModuleName = module.name.replace(/[^A-Za-z0-9]/g, '').toLocaleLowerCase();

            opts.golang = {
              outdir: outdir,
              moduleName: `${userModuleName}/${relativeDir}`,
              packageName: module.prefix ? module.prefix + '_' + importModuleName : importModuleName,
            };
          }

          await srcmak.srcmak(staging, opts);
        });
      }
    }
  }

  /**
   * Traverses up directories until it finds a directory with a go.mod file,
   * and parses the module name from the file.
   */
  private getGoModuleName(origOutdir: string) {
    let outdir = path.resolve(origOutdir);

    while (outdir !== path.dirname(outdir)) {
      const file = path.join(outdir, 'go.mod');

      if (fs.existsSync(file)) {
        const contents = fs.readFileSync(file, 'utf8');
        const matches = /module (.*)/.exec(contents);

        if (!matches) {
          throw new Error('Invalid go.mod file - could not find module path.');
        }

        return {
          userModuleName: matches[1],
          userModulePath: outdir,
        };
      }

      outdir = path.dirname(outdir);
    }

    throw new Error(`Cannot find go.mod file within ${origOutdir} or any of its parent directories.`);
  }
}