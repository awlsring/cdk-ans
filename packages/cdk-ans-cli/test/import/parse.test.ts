import path from 'path';
import { ModuleImporter } from '../../src/import/module';

const NAMESPACE = 'ansible.builtin';

describe('ModuleImporter', () => {

  test('read from local file', async () => {
    const importSpec = {
      namespace: NAMESPACE,
      source: path.join(__dirname, '..', 'resources', 'reboot.py'),
    };

    const importer = new ModuleImporter(importSpec);

    const spec = await importer.loadSpec();

    expect(spec !== undefined).toBeTruthy();
    expect(spec.module).toEqual('reboot');
  });

  test('read from remote file', async () => {
    const importSpec = {
      namespace: NAMESPACE,
      source: 'https://raw.githubusercontent.com/ansible/ansible/devel/lib/ansible/modules/file.py',
    };
    const importer = new ModuleImporter(importSpec);

    const spec = await importer.loadSpec();

    expect(spec !== undefined).toBeTruthy();
    expect(spec.module).toEqual('file');
  });

});