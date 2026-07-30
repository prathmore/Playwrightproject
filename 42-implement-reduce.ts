// 42. Implement reduce()
function myReduce<T, U>(arr: T[], callback: (acc: U, curr: T, index: number) => U, initial: U): U {
  let acc = initial;
  for (let i = 0; i < arr.length; i++) {
    acc = callback(acc, arr[i], i);
  }
  return acc;
}

console.log(myReduce([1, 2, 3, 4], (acc, x) => acc + x, 0)); // 10
