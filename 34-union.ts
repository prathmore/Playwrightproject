// 34. Find union of arrays
function findUnion(arr1: number[], arr2: number[]): number[] {
  return [...new Set([...arr1, ...arr2])];
}

console.log(findUnion([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]
