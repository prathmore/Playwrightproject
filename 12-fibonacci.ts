// 12. Generate Fibonacci series
function fibonacci(n: number): number[] {
  const series: number[] = [];
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    series.push(a);
    [a, b] = [b, a + b];
  }
  return series;
}

console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
