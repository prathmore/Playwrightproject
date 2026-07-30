// 32. Move zeros to end
function moveZerosToEnd(arr: number[]): number[] {
  const nonZeros = arr.filter(num => num !== 0);
  const zeros = arr.filter(num => num === 0);
  return [...nonZeros, ...zeros];
}

console.log(moveZerosToEnd([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
