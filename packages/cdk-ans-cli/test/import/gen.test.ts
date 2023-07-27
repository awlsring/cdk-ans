/* eslint-disable import/no-extraneous-dependencies */
import * as fs from 'fs';
import path from 'path';
import { DirResult, dirSync } from 'tmp';
import { Language } from '../../lib/import/importer';
import { ImportType } from '../../src/config';
import { ModuleImporter } from '../../src/import/module';

const NAMESPACE = 'ansible.builtin';

describe('ModuleImporter.import', () => {
  let tempDir: DirResult;

  beforeAll(() => {
    tempDir = dirSync({ unsafeCleanup: true });
  });

  afterAll(() => {
    tempDir.removeCallback();
  });

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
      outdir: tempDir.name,
    });

    expect(fs.existsSync(path.join(tempDir.name, 'ansible-builtin-file.ts'))).toBe(true);
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
      outdir: tempDir.name,
    });

    expect(fs.existsSync(path.join(tempDir.name, 'ansible-builtin-reboot.ts'))).toBe(true);
  });

  test('Can generate python', async () => {
    const file = path.join(__dirname, '..', 'resources', 'reboot.py');
    const importer = new ModuleImporter({
      namespace: NAMESPACE,
      type: ImportType.MODULE,
      source: {
        file: file,
      },
    });

    await importer.import({
      targetLanguage: Language.PYTHON,
      outdir: tempDir.name,
    });

    expect(fs.existsSync(path.join(tempDir.name, 'ansible_builtin', 'reboot', '__init__.py'))).toBe(true);
  });

  test('Can generate java', async () => {
    const file = path.join(__dirname, '..', 'resources', 'reboot.py');
    const importer = new ModuleImporter({
      namespace: NAMESPACE,
      type: ImportType.MODULE,
      source: {
        file: file,
      },
    });

    await importer.import({
      targetLanguage: Language.JAVA,
      outdir: tempDir.name,
    });

    expect(fs.existsSync(path.join(tempDir.name, 'src', 'main', 'java', 'imports', 'ansible_builtin', 'reboot', 'RebootAction.java'))).toBe(true);
  });

  test('Can generate go', async () => {
    const file = path.join(__dirname, '..', 'resources', 'reboot.py');
    const importer = new ModuleImporter({
      namespace: NAMESPACE,
      type: ImportType.MODULE,
      source: {
        file: file,
      },
    });

    fs.writeFileSync(path.join(tempDir.name, 'go.mod'), 'module github.com/ansible/ansible-cdk');

    await importer.import({
      targetLanguage: Language.GO,
      outdir: tempDir.name,
    });

    expect(fs.existsSync(path.join(tempDir.name, 'ansible_builtin_reboot', 'main.go'))).toBe(true);
  });

  test('Can generate c#', async () => {
    const file = path.join(__dirname, '..', 'resources', 'reboot.py');
    const importer = new ModuleImporter({
      namespace: NAMESPACE,
      type: ImportType.MODULE,
      source: {
        file: file,
      },
    });

    await importer.import({
      targetLanguage: Language.DOTNET,
      outdir: tempDir.name,
    });

    expect(fs.existsSync(path.join(tempDir.name, 'Imports.ansible_builtin.reboot', 'Imports', 'ansible_builtin', 'reboot', 'RebootAction.cs'))).toBe(true);
  });
});