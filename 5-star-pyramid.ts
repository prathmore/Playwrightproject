// 5. Pyramid of stars
function starPyramid(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
  }
}

console.log("Star Pyramid:");
starPyramid(5);
