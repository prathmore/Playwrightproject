// 23. Reverse words in a sentence
function reverseWords(sentence: string): string {
  return sentence.split(" ").reverse().join(" ");
}

console.log(reverseWords("hello world typescript")); // typescript world hello
