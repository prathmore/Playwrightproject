// 6. Reverse pyramid of stars
function reverseStarPyramid(n: number): void {
  for (let i = n; i >= 1; i--) {
    console.log("*".repeat(i));
  }
}

console.log("Reverse Star Pyramid:");
reverseStarPyramid(5);
