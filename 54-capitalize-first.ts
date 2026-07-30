// 54. Capitalize first letter
function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeFirst("hello")); // Hello
