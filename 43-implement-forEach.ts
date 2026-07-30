// 43. Implement forEach()
function myForEach<T>(arr: T[], callback: (item: T, index: number) => void): void {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

myForEach([1, 2, 3], (x) => console.log(x * 2)); // 2, 4, 6
