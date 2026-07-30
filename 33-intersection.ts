// 33. Find intersection of arrays
function findIntersection(arr1: number[], arr2: number[]): number[] {
  const set2 = new Set(arr2);
  return [...new Set(arr1.filter(num => set2.has(num)))];
}

console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]
