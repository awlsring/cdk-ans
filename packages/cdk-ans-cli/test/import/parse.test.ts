import path from 'path';
import { ImportType } from '../../src/config';
import { ModuleImporter } from '../../src/import/module';

const NAMESPACE = 'ansible.builtin';

describe('ModuleImporter', () => {
  test('read from local file', async () => {
    const file = path.join(__dirname, '..', 'resources', 'reboot.py');
    const importer = new ModuleImporter({
      namespace: NAMESPACE,
      type: ImportType.MODULE,
      source: {
        file: file,
      },
    });

    const spec = await importer.loadModuleFromFile(file);

    expect(spec !== undefined).toBeTruthy();
    expect(spec.module).toEqual('reboot');
  });

  test('read from remote file', async () => {
    const file = 'https://raw.githubusercontent.com/ansible/ansible/devel/lib/ansible/modules/file.py';
    const importer = new ModuleImporter({
      namespace: NAMESPACE,
      type: ImportType.MODULE,
      source: {
        file: file,
      },
    });

    const spec = await importer.loadModuleFromFile(file);

    expect(spec !== undefined).toBeTruthy();
    expect(spec.module).toEqual('file');
  });

});