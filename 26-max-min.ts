// 26. Find max and min values
function findMaxMin(arr: number[]): { max: number; min: number } {
  //if (arr.length === 0) throw new Error("Array is empty");
  return {
    max: Math.max(...arr),
    min: Math.min(...arr),
  };
}

console.log(findMaxMin([3, 9, 2, 5, 1])); // { max: 9, min: 1 }
