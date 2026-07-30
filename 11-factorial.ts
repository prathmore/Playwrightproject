// 11. Find factorial of a number
function factorial(n: number): number {
  if (n < 0) throw new Error("Factorial not defined for negative numbers");
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(2)); // 2
console.log(factorial(0)); // 1
