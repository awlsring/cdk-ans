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