// Program to remove duplicate strings
function removeDuplicateStrings(str: string): string {
  // Split the string by spaces to get individual words
  const words: string[] = str.split(' ');
  
  // Use Set to keep only unique words (Set automatically removes duplicates)
  const uniqueWords: string[] = Array.from(new Set(words));
  
  // Join the unique words back together
  return uniqueWords.join(' ');
}

// Test with the provided string
const inputString: string = 'typescript is language typescript';
console.log('Input String: ' + inputString);

const result: string = removeDuplicateStrings(inputString);
console.log('Result after removing duplicates: ' + result);

// Additional test cases
console.log('\n--- Additional Test Cases ---');
const testString1: string = 'hello world hello typescript';
console.log('Input: ' + testString1);
console.log('Output: ' + removeDuplicateStrings(testString1));

const testString2: string = 'typescript typescript typescript';
console.log('Input: ' + testString2);
console.log('Output: ' + removeDuplicateStrings(testString2));

const testString3: string = 'one two three four five';
console.log('Input: ' + testString3);
console.log('Output: ' + removeDuplicateStrings(testString3));
