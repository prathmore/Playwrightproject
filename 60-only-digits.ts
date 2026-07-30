// 60. Check if string contains only digits
function isOnlyDigits(str: string): boolean {
  return /^\d+$/.test(str);
}

console.log(isOnlyDigits("12345")); // true
console.log(isOnlyDigits("123abc")); // false
