// 72. Implement Object.assign()
function myAssign<T extends Record<string, any>>(target: T, ...sources: any[]): T {
  for (const source of sources) {
    if (source !== null && source !== undefined) {
      for (const key in source) {
        if (source.hasOwnProperty(key)) {
          target[key] = source[key];
        }
      }
    }
  }
  return target;
}

const target = { a: 1 };
myAssign(target, { b: 2 }, { c: 3 });
console.log(target); // { a: 1, b: 2, c: 3 }
