import * as fs from 'fs-extra';
import * as yaml from 'yaml';
import { Language } from './import/importer';

const CONFIG_FILE = 'cdkans.yaml';

export enum ImportType {
  MODULE = 'module',
  ROLE = 'role',
}

export interface ImportSource {
  /**
   * A file to import from. Can be a path or a URI.
   */
  readonly file?: string;
  /**
   * A git repository to import from.
   */
  readonly repo?: string;
}

export interface ImportSpec {
  readonly type: ImportType;
  readonly namespace: string;
  readonly source: ImportSource;
  readonly prefix?: string;
}

export interface Config {
  readonly app?: string;
  readonly language?: Language;
  readonly output?: string;
  readonly imports?: ImportSpec[];
}

const DEFAULTS: Config = {
  output: 'dist',
};

export function readConfigSync(): Config {
  let config: Config = DEFAULTS;
  if (fs.existsSync(CONFIG_FILE)) {
    config = {
      ...config,
      ...yaml.parse(fs.readFileSync(CONFIG_FILE, 'utf-8')),
    };
  }
  return config;
}