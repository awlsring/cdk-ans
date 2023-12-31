import { homedir } from 'os';
import { join } from 'path';
import * as cdkans from 'cdk-ans';
import { readFileSync, statSync } from 'fs-extra';
import { _fs } from './_fs';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const pkg = require('../package.json');

const CACHE = {
  cacheTtlSec: 60 * 30, // 30min
  cacheFile: join(homedir(), '.cdk-ans-cli.version'),
};

/**
 * Checks if there is a new version of the CLI available on npm.
 *
 * @returns `undefined` if there is no upgrade available. If there is a new
 * version, returns an object with `latest` (the latest version) and `current`
 * (the current version).
 */
export function upgradeAvailable() {
  const latest = getLatestVersion(pkg.name, CACHE);
  if (latest !== pkg.version) {
    return { latest, current: pkg.version };
  } else {
    return undefined;
  }
}

/**
 * Returns the latest version of an npm module. The version is cached for 30min
 * to ~/.cdk-ans-cli.version.
 *
 * Never throws.
 *
 * @param module The module name
 * @param options cache options
 */
export function getLatestVersion(module: string, options: { cacheFile: string; cacheTtlSec: number }) {
  let latest = readCache();
  if (!latest) {
    try {
      const info = cdkans.Yaml.load(`http://registry.npmjs.org/${module}/latest`);
      if (!info || info.length < 1) {
        return undefined;
      }
      latest = info[0].version;
    } catch (e) {
      return undefined;
    }

    if (!latest) {
      return undefined;
    }

    writeCache(latest);
  }

  return latest;

  function readCache(): string | undefined {
    try {
      const lastModified = statSync(options.cacheFile).mtime;
      const diff = (new Date().getTime()) - lastModified.getTime();
      if (diff > options.cacheTtlSec * 1000) {
        return undefined;
      }

      return readFileSync(options.cacheFile, 'utf-8').trim();
    } catch (e) {
      return undefined;
    }
  }

  function writeCache(version: string) {
    try {
      _fs.writeFileSync(options.cacheFile, version);
    } catch (e) {
      return;
    }
  }
}
