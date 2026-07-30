// 65. Merge objects
function mergeObjects<T extends Record<string, any>>(
  obj1: T,
  obj2: T
): T {
  return { ...obj1, ...obj2 };
}

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
console.log(mergeObjects(obj1, obj2)); // { a: 1, b: 2, c: 3, d: 4 }
