// 46. Find majority element
function findMajorityElement(arr: number[]): number | null {
  const count: Record<number, number> = {};
  const majority = Math.floor(arr.length / 2);
  for (const num of arr) {
    count[num] = (count[num] || 0) + 1;
    if (count[num] > majority) return num;
  }
  return null;
}

console.log(findMajorityElement([3, 2, 3])); // 3
console.log(findMajorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
