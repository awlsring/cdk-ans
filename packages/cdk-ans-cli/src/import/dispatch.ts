import { ImportOptions } from './importer';
import { ModuleImporter } from './module';
import { ImportSpec } from '../config';

export async function importDispatch(imports: ImportSpec[], options: ImportOptions) {
  for (const importSpec of imports) {
    const importer = await determineImporter(importSpec);

    await importer.import({
      moduleNamePrefix: importSpec.namespace,
      ...options,
    });
  }
}

async function determineImporter(importSpec: ImportSpec) {
  switch (importSpec.type) {
    case 'module':
      return new ModuleImporter(importSpec);
    default:
      throw new Error(`Unsupported import type: ${importSpec.type}`);
  }
}