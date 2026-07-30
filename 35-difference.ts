// 35. Find array difference
function findDifference(arr1: number[], arr2: number[]): number[] {
  const set2 = new Set(arr2);
  return arr1.filter(num => !set2.has(num));
}

console.log(findDifference([1, 2, 3, 4], [2, 4])); // [1, 3]
