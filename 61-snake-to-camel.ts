// 61. Convert snake_case to camelCase
function snakeToCamel(str: string): string {
  return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
}

console.log(snakeToCamel("hello_world_string")); // helloWorldString
