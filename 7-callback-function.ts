// 7. Callback function addition
function add(a: number, b: number, callback: (result: number) => void): void {
  const result = a + b;
  callback(result);
}

add(5, 10, (result) => {
  console.log("Sum is:", result); // Sum is: 15
});
