// 58. Check balanced parentheses
function isBalanced(str: string): boolean {
  const stack: string[] = [];
  const pairs: Record<string, string> = { ")": "(", "}": "{", "]": "[" };

  for (const char of str) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.pop() !== pairs[char]) return false;
    }
  }
  return stack.length === 0;
}

console.log(isBalanced("({[]})")); // true
console.log(isBalanced("({[}])")); // false
