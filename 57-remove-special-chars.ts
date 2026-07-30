// 57. Remove special characters
function removeSpecialCharacters(str: string): string {
  return str.replace(/[^a-zA-Z0-9\s]/g, "");

  (/[^a-zA-Z0-9\s]/g)
}

console.log(removeSpecialCharacters("hello@world#123!")); // helloworld123
