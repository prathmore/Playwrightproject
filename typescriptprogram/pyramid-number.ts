// TypeScript program to print pyramid pattern with numbers

function printNumberPyramid(rows: number): void {
    for (let i = 1; i <= rows; i++) {
        // Print spaces
        //let spaces = ' '.repeat(rows - i);
        // Print numbers
        let numbers = '';
        for (let j = 1; j <= i; j++) {
            numbers += j + ' ';
        }
        console.log(numbers);
    }
}

// Print a number pyramid with 5 rows
printNumberPyramid(5);

console.log('\n--- Another pyramid ---\n');

// Print a number pyramid with 7 rows
printNumberPyramid(7);