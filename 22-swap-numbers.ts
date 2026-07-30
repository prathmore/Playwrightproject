// 22. Swap two numbers
function swapNumbers(a: number, b: number): [number, number] {
  [a, b] = [b, a];
  return [a, b];
}

const [x, y] = swapNumbers(5, 10);
console.log(`a = ${x}, b = ${y}`); // a = 10, b = 5
