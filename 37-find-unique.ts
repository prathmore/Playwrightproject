// 37. Find unique values
function findUnique<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

console.log(findUnique([1, 2, 2, 3, 3, 3, 4])); // [1, 2, 3, 4]
console.log(findUnique(["a", "b", "a", "c"])); // ['a', 'b', 'c']
