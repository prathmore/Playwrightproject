// Program to remove duplicate strings
function removeDuplicateStrings(str) {
    // Split the string by spaces to get individual words
    var words = str.split(' ');
    // Use Set to keep only unique words (Set automatically removes duplicates)
    var uniqueWords = Array.from(new Set(words));
    // Join the unique words back together
    return uniqueWords.join(' ');
}
// Test with the provided string
var inputString = 'typescript is language typescript';
console.log('Input String: ' + inputString);
var result = removeDuplicateStrings(inputString);
console.log('Result after removing duplicates: ' + result);
// Additional test cases
console.log('\n--- Additional Test Cases ---');
var testString1 = 'hello world hello typescript';
console.log('Input: ' + testString1);
console.log('Output: ' + removeDuplicateStrings(testString1));
var testString2 = 'typescript typescript typescript';
console.log('Input: ' + testString2);
console.log('Output: ' + removeDuplicateStrings(testString2));
var testString3 = 'one two three four five';
console.log('Input: ' + testString3);
console.log('Output: ' + removeDuplicateStrings(testString3));
