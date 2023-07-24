import { ImportOptions } from './importer';
import { ModuleImporter } from './module';
import { ImportSpec } from '../config';

export async function importModule(imports: ImportSpec[], options: ImportOptions) {
  for (const importSpec of imports) {
    const importer = new ModuleImporter(importSpec);

    await importer.import({
      moduleNamePrefix: importSpec.namespace,
      ...options,
    });
  }
}