// 31. Rotate array
function rotateArray(arr: number[], steps: number): number[] {
  const n = arr.length;
  const actualSteps = ((steps % n) + n) % n;
  return [...arr.slice(actualSteps), ...arr.slice(0, actualSteps)];
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [3, 4, 5, 1, 2]
