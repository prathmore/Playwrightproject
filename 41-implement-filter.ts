// 41. Implement filter()
function myFilter<T>(arr: T[], callback: (item: T, index: number) => boolean): T[] {
  const result: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(myFilter([1, 2, 3, 4, 5], (x) => x % 2 === 0)); // [2, 4]
