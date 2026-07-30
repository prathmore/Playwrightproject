// 51. String compression
function compressString(str: string): string {
  if (str.length === 0) return "";
  let compressed = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (i + 1 < str.length && str[i] === str[i + 1]) {
      count++;
    } else {
      compressed += str[i] + count;
      count = 1;
    }
  }
  return compressed.length < str.length ? compressed : str;
}

console.log(compressString("abcccccde")); // a1b1c5d1e1
