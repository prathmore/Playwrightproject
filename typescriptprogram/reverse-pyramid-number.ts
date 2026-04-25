// TypeScript program to print reverse pyramid pattern with numbers

function printReverseNumberPyramid(rows: number): void {
    for (let i = rows; i >= 1; i--) {
        // Print spaces
        let spaces = ' '.repeat(rows - i);
        // Print numbers
        let numbers = '';
        for (let j = 1; j <= i; j++) {
            numbers += j + ' ';
        }
        console.log(spaces + numbers);
    }
}

// Print a reverse number pyramid with 5 rows
printReverseNumberPyramid(5);

console.log('\n--- Another pyramid ---\n');

// Print a reverse number pyramid with 7 rows
printReverseNumberPyramid(7);