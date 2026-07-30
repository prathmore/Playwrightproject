// 44. Find longest consecutive sequence
function longestConsecutive(arr: number[]): number[] {
  if (arr.length === 0) return [];
  const set = new Set(arr);
  let maxSeq: number[] = [];

  for (const num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      const seq: number[] = [];
      while (set.has(current)) {
        seq.push(current);
        current++;
      }
      if (seq.length > maxSeq.length) {
        maxSeq = seq;
      }
    }
  }
  return maxSeq;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // [1, 2, 3, 4]
