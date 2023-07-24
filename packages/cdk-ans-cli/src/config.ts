import * as os from 'os';
import * as path from 'path';
import * as fs from 'fs-extra';
import * as yaml from 'yaml';
import { Language } from './import/importer';

const CONFIG_FILE = 'cdkans.yaml';

export interface ImportSpec {
  readonly namespace: string;
  readonly source: string;
}

export interface ValidationConfig {
  readonly package: string;
  readonly version: string;
  readonly class: string;
  readonly installEnv?: { [key: string]: any };
  readonly properties?: { [key: string]: any };
}

export interface Config {
  readonly app?: string;
  readonly echo?: string;
  readonly language?: Language;
  readonly output?: string;
  readonly imports?: string[];
  readonly pluginsDirectory?: string;
  readonly validations?: string | ValidationConfig[];
}

const DEFAULTS: Config = {
  output: 'dist',
  pluginsDirectory: path.join(os.homedir(), '.cdkans', 'plugins'),
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