// 48. Deep flatten array
function deepFlatten(arr: any[]): any[] {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? deepFlatten(val) : val);
  }, []);
}

console.log(deepFlatten([1, [2, [3, [4, [5]]]]])); // [1, 2, 3, 4, 5]
