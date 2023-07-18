export function convertKeysToSnakeCase(obj: Record<string, any>): Record<string, any> {
  const snakeCaseObject: Record<string, any> = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const snakeCaseKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
      snakeCaseObject[snakeCaseKey] = obj[key];
    }
  }

  return snakeCaseObject;
}