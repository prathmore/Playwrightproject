// 50. First non-repeated character
function firstNonRepeated(str: string): string | null {
  const charCount: Record<string, number> = {};
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (const char of str) {
    if (charCount[char] === 1) return char;
  }
  return null;
}

console.log(firstNonRepeated("abcdefba")); // "c"
console.log(firstNonRepeated("aabbcc")); // null
