function findDuplicateCharacters(str: string): string[] {
  // Convert string into array of characters
  let chars = str.split("");

  // Use a map to count occurrences
  let charCount: { [key: string]: number } = {};

  for (let ch of chars) {
    charCount[ch] = (charCount[ch] || 0) + 1;
  }

  // Collect characters that appear more than once
  let duplicates = Object.keys(charCount).filter((ch) => charCount[ch] > 1);

  return duplicates;
}

// Example usage
//let input = "prathamesh";
 

console.log(findDuplicateCharacters("prathamesh"));
