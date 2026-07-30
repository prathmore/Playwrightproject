// 52. Reverse each word
function reverseEachWord(sentence: string): string {
  return sentence
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseEachWord("hello world")); // olleh dlrow
