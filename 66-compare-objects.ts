// 66. Compare two objects
function areObjectsEqual<T extends Record<string, any>>(
  obj1: T,
  obj2: T
): boolean {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log(areObjectsEqual({ a: 1, b: 2 }, { a: 1, b: 2 })); // true
console.log(areObjectsEqual({ a: 1, b: 2 }, { a: 1, b: 3 })); // false
