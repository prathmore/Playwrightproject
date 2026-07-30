// 39. Find triplet with given sum
function findTriplet(arr: number[], target: number): [number, number, number] | null {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if (sum === target) {
        return [arr[i], arr[left], arr[right]];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return null;
}

console.log(findTriplet([1, 4, 45, 6, 10, 8], 22)); // [4, 8, 10]
