// 4. String includes specific word
function includesWord(str: string, word: string): boolean {
  return str.toLowerCase().includes(word.toLowerCase());
}

console.log(includesWord("hello world", "world")); // true
console.log(includesWord("hello world", "xyz")); // false
