// 20. Count vowels in a string
function countVowels(str: string): number {
  const vowels = str.toLowerCase().match(/[aeiou]/g);
  return vowels ? vowels.length : 0;
}

console.log(countVowels("hello world")); // 3
console.log(countVowels("typescript")); // 1
