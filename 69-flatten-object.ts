// 69. Flatten nested object
function flattenObject(
  obj: any,
  prefix = "",
  result: Record<string, any> = {}
): Record<string, any> {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      const newKey = prefix ? `${prefix}.${key}` : key;
      if (value !== null && typeof value === "object" && !Array.isArray(value)) {
        flattenObject(value, newKey, result);
      } else {
        result[newKey] = value;
      }
    }
  }
  return result;
}

console.log(flattenObject({ a: { b: { c: 1 }, d: 2 } }));
// { 'a.b.c': 1, 'a.d': 2 }
