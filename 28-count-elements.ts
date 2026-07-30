// 28. Count occurrences of elements
function countElements(arr: (string | number)[]): Record<string | number, number> {
  const count: Record<string | number, number> = {};
  for (const elem of arr) {
    count[elem] = (count[elem] || 0) + 1;
  }
  return count;
}

console.log(countElements([1, 2, 2, 3, 3, 3, "a", "a"])); // { '1': 1, '2': 2, '3': 3, 'a': 2 }
