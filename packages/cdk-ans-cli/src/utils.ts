import * as os from 'os';
import * as path from 'path';
import * as fs from 'fs-extra';

export async function mkdtemp(closure: (dir: string) => Promise<void>) {
  const workdir = await fs.mkdtemp(path.join(os.tmpdir(), 'cdkans-'));
  try {
    await closure(workdir);
  } finally {
    await fs.remove(workdir);
  }
}

function convertSnakeToCamel(str: string): string {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

export function convertToSnakeCase(str: string): string {
  const s = str.replace(/([A-Z])/g, (_, letter) => `_${letter.toLowerCase()}`);
  return s.replace(/-/g, '_');
}

export function snakeToPascalCase(input: string): string {
  return input
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function removeLeadingHyphen(fileName: string): string {
  const pattern = /^-(?=[a-zA-Z0-9])/;
  return fileName.replace(pattern, '');
}

export function convertToFileCase(str: string): string {
  const snake = convertToSnakeCase(str);
  const s = snake.replace(/_/g, '-');
  return removeLeadingHyphen(s);
}

export function convertKeysToCamel(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map((item) => convertKeysToCamel(item));
  } else if (typeof obj === 'object' && obj !== null) {
    const newObj: any = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const newKey = convertSnakeToCamel(key);
        newObj[newKey] = convertKeysToCamel(obj[key]);
      }
    }
    return newObj;
  }
  return obj;
}