// 59. Generate all substrings
function generateSubstrings(str: string): string[] {
  const substrings: string[] = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      substrings.push(str.substring(i, j));
    }
  }
  return substrings;
}

console.log(generateSubstrings("abc")); // ['a', 'ab', 'abc', 'b', 'bc', 'c']
