// yoinked from https://github.com/cdk8s-team/cdk8s-core/blob/2.x/src/yaml.ts and modified

import * as fs from 'fs';
import * as YAML from 'yaml';

// Set default YAML schema to 1.1. This ensures saved YAML is backward compatible with other parsers, such as PyYAML
// It also ensures that octal numbers in the form `0775` will be parsed
// correctly on YAML load. (see https://github.com/eemeli/yaml/issues/205)
const yamlSchemaVersion = '1.1';

/**
 * YAML utilities.
 */
export class Yaml {
  /**
   * Saves a set of objects as a multi-document YAML file.
   * @param filePath The output path
   * @param docs The set of objects
   */
  public static save(filePath: string, docs: any[]) {
    const data = this.stringify(...docs);
    fs.writeFileSync(filePath, data, { encoding: 'utf8' });
  }

  /**
   * Stringify a document (or multiple documents) into YAML
   *
   * We convert undefined values to null, but ignore any documents that are
   * undefined.
   *
   * @param docs A set of objects to convert to YAML
   * @returns a YAML string. Multiple docs are separated by `---`.
   */
  public static stringify(...docs: any[]) {
    return docs.map(
      r => r === undefined ? '\n' : YAML.stringify(r, { keepUndefined: true, lineWidth: 0, version: yamlSchemaVersion }),
    ).join('---\n');
  }

  /**
   * Downloads a set of YAML documents from a file and returns them as javascript objects.
   *
   * Empty documents are filtered out.
   *
   * @param file path to load from
   * @returns an array of objects, each represents a document inside the YAML
   */
  public static load(file: string): any[] {
    const body = fs.readFileSync(file, { encoding: 'utf-8' });

    const objects = YAML.parseAllDocuments(body, {
      version: yamlSchemaVersion,
    });
    const result = new Array<any>();

    for (const obj of objects.map(x => x.toJSON())) {
      // skip empty documents
      if (obj === undefined) { continue; }
      if (obj === null) { continue; }
      if (Array.isArray(obj) && obj.length === 0) { continue; }
      if (typeof(obj) === 'object' && Object.keys(obj).length === 0) { continue; }

      result.push(obj);
    }

    return result;
  }

  /**
   * Utility class.
   */
  private constructor() {
    return;
  }
}