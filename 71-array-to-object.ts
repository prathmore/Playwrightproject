// 71. Convert array to object
function arrayToObject(arr: [string, any][]): Record<string, any> {
  const obj: Record<string, any> = {};
  for (const [key, value] of arr) {
    obj[key] = value;
  }
  return obj;
}

console.log(arrayToObject([["a", 1], ["b", 2], ["c", 3]]));
// { a: 1, b: 2, c: 3 }
