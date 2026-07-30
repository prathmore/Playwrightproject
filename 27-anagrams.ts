// 27. Check if two strings are anagrams
function areAnagrams(str1: string, str2: string): boolean {
  const normalize = (s: string) =>
     s.toLowerCase().split("").sort().join("");
  return normalize(str1) === normalize(str2);
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false
