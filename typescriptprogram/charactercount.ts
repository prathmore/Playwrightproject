const str1: string = "prathamesh";

// Create a map to store character counts
const charCount: { [key: string]: number } = {};

// Count each character
for (let char of str1) {
    if (charCount[char]) {
        charCount[char]++;
    } else {
        charCount[char] = 1;
    }
}

console.log(`String: "${str1}"`);
console.log("Character Count:");
console.log(charCount);

// Display in a more readable format
console.log("\nDetailed Breakdown:");
for (let char in charCount) {
    console.log(`'${char}' appears ${charCount[char]} time(s)`);
}
