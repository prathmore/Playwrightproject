// TypeScript program to print pyramid pattern

function printPyramid(rows: number): void {
    for (let i = 1; i <= rows; i++) {
        // Print spaces
        let spaces = ' '.repeat(rows - i);
        // Print stars
        let stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}

// Print a pyramid with 5 rows
printPyramid(5);

console.log('\n--- Another pyramid ---\n');

// Print a pyramid with 7 rows
printPyramid(7);