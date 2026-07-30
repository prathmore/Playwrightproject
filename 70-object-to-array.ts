// 70. Convert object to array
function objectToArray<T extends Record<string, any>>(obj: T): [string, any][] {
  return Object.entries(obj);
}

console.log(objectToArray({ a: 1, b: 2, c: 3 }));
// [['a', 1], ['b', 2], ['c', 3]]
