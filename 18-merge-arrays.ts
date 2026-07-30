// 18. Merge two arrays
function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(['a', 'b'], ['c', 'd'])); // ['a', 'b', 'c', 'd']
