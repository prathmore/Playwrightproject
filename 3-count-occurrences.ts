// 3. Find how many times char or word is repeating in string
function countOccurrences(str: string, target: string): number {
  //const regex = new RegExp(target.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
  const matches = str.match(new RegExp(target, 'g'));
  //const matches = str.match(regex);
  return matches ? matches.length : 0;
}

console.log(countOccurrences("hello world world WORLD", "world")); // 2
console.log(countOccurrences("aabbcc", "e")); // 2
