// 24. Find missing number in an array
function findMissing(arr: number[]): number {
  const n = arr.length + 1;
  const expectedSum = (n * (arr[0] + arr[arr.length - 1])) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

console.log(findMissing([1, 2, 3, 5, 6])); // 4
