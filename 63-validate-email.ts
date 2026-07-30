// 63. Validate email
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

console.log(validateEmail("test@example.com")); // true
console.log(validateEmail("invalid.email")); // false
