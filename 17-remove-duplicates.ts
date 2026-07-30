// 17. Remove duplicates from an array
function removeDuplicates(arr: number[]): number[] {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // [1, 2, 3, 4]
