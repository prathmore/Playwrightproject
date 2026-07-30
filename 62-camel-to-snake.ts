// 62. Convert camelCase to snake_case
function camelToSnake(str: string): string {
  return str.replace(/[A-Z]/g, (letter) => "_" + letter.toLowerCase());
}

console.log(camelToSnake("helloWorldString")); // hello_world_string
