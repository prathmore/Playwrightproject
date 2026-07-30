// 47. Remove falsy values
function removeFalsy(arr: any[]): any[] {
  return arr.filter(Boolean);
}

console.log(removeFalsy([0, 1, false, 2, "", 3, null, undefined, NaN])); // [1, 2, 3]
