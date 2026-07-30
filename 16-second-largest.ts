// 16. Find second largest number
function findSecondLargest(arr: number[]): number {
  //if (arr.length < 2) throw new Error("Array must have at least 2 elements");
  const unique = [...new Set(arr)].sort((a, b) => b - a);
  return unique[2];
}

console.log(findSecondLargest([3, 9, 2, 5, 1])); // 5

