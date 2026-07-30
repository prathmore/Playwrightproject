// 40. Implement map()
function myMap<T, U>(arr: T[], callback: (item: T, index: number) => U): U[] {
  const result: U[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i));
  }
  return result;
}

console.log(myMap([1, 2, 3], (x) => x * 2)); // [2, 4, 6]
