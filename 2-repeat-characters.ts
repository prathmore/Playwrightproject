// 2. Repeat characters in string
function repeatCharacters(str: string, times: number): string {
  return str.split("").map(char => char.repeat(times)).join("");
}

console.log(repeatCharacters("abcA", 5)); // aaaaaabbbbbcccccc