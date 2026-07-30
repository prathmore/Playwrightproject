// 55. Find longest word
function findLongestWord(sentence: string): string {
  const words = sentence.split(/\s+/);
  return words.reduce((longest, word) =>
    word.length > longest.length ? word : longest
  );
}

console.log(findLongestWord("the quick brown fox jumps")); // quick
