// 38. Find pair with given sum
function findPair(arr: number[], target: number): [number, number] | null {
  const seen = new Set<number>();
  for (const num of arr) {
    const complement = target - num;
    if (seen.has(complement)) {
      return [complement, num];
    }
    seen.add(num);
  }
  return null;
}

console.log(findPair([1, 5, 7, -1, 5], 6)); // [1, 5]
console.log(findPair([2, 3, 5, 9], 10)); // null
