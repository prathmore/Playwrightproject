const str: string = "prathamesh";
const searchChar: string = "a";

// Count occurrences of the specific character
let count: number = 0;

for (let char of str) {
    if (char === searchChar) {
        count++;
    }
}

console.log(`String: "${str}"`);
console.log(`Character to find: '${searchChar}'`);
console.log(`The character '${searchChar}' appears ${count} time(s) in the string`);
