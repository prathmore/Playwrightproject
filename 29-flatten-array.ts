// 29. Flatten nested arrays
function flattenArray(arr: any[]): any[] {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flattenArray(val) : val);
  }, []);
}

console.log(flattenArray([1, [2, 3, [4, 5, [6]]]])); // [1, 2, 3, 4, 5, 6]
