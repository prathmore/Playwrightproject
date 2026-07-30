// 49. Longest substring without repeating characters
function longestSubstring(str: string): string {
  let maxStr = "";
  let currentStr = "";
  const charSet = new Set<string>();

  for (const char of str) {
    if (charSet.has(char)) {
      if (currentStr.length > maxStr.length) {
        maxStr = currentStr;
      }
      currentStr = currentStr.slice(currentStr.indexOf(char) + 1);
    }
    currentStr += char;
    charSet.add(char);
  }

  return currentStr.length > maxStr.length ? currentStr : maxStr;
}

console.log(longestSubstring("abcabcbb")); // "abc"
