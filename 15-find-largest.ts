// 15. Find largest number in an array
function findLargest(arr: number[]): number {
  //if (arr.length === 0) throw new Error("Array is empty");
  return Math.max(...arr);
}

console.log(findLargest([3, 9, 2, 5, 1])); // 9
/*Math.max → works only with separate numbers, not arrays.

Spread operator → expands arrays into individual arguments.*/ 