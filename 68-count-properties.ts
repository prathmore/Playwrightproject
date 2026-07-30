// 68. Count object properties
function countProperties(obj: Record<string, any>): number {
  return Object.keys(obj).length;
}

console.log(countProperties({ a: 1, b: 2, c: 3 })); // 3
