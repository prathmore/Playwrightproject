// TypeScript program to print reverse pyramid pattern with stars

function printReverseStarPyramid(rows: number): void {
    for (let i = rows; i >= 1; i--) {
        // Print spaces
        let spaces = ' '.repeat(rows - i);
        // Print stars
        let stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}

// Print a reverse star pyramid with 5 rows
printReverseStarPyramid(5);

console.log('\n--- Another pyramid ---\n');

// Print a reverse star pyramid with 7 rows
printReverseStarPyramid(7);