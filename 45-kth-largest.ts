// 45. Find kth largest element
function findKthLargest(arr: number[], k: number): number {
  if (k > arr.length || k <= 0) throw new Error("Invalid k");
  const sorted = [...arr].sort((a, b) => b - a);
  return sorted[k - 1];
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
