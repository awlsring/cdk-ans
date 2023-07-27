import path from 'path';
import { Language } from '../../lib/import/importer';
import { ImportType } from '../../src/config';
import { ModuleImporter } from '../../src/import/module';

const NAMESPACE = 'ansible.builtin';

describe('ModuleImporter.import', () => {
  test('Can generate typescript', async () => {
    const file = path.join(__dirname, '..', 'resources', 'file.py');
    const importer = new ModuleImporter({
      namespace: NAMESPACE,
      type: ImportType.MODULE,
      source: {
        file: file,
      },
    });

    await importer.import({
      targetLanguage: Language.TYPESCRIPT,
      outdir: path.join(__dirname, '..', '..', 'tmp'),
    });
  });
  test('Can generate typescript', async () => {
    const file = path.join(__dirname, '..', 'resources', 'reboot.py');
    const importer = new ModuleImporter({
      namespace: NAMESPACE,
      type: ImportType.MODULE,
      source: {
        file: file,
      },
    });

    await importer.import({
      targetLanguage: Language.TYPESCRIPT,
      outdir: path.join(__dirname, '..', '..', 'tmp'),
    });
  });
  test('Can generate python', async () => {
    // Generation outside of python won't work until cdk-ans is published to all package managers

    // const file = path.join(__dirname, '..', 'resources', 'reboot.py');
    // const importer = new ModuleImporter({
    //   namespace: NAMESPACE,
    //   type: ImportType.MODULE,
    //   source: {
    //     file: file,
    //   },
    // });

    // await importer.import({
    //   targetLanguage: Language.PYTHON,
    //   outdir: path.join(__dirname, '..', '..', 'tmp'),
    // });
  });
});