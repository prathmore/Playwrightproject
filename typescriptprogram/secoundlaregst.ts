function secondLargest(numbers: number[]): number | undefined {
  const uniqueNumbers = [...new Set(numbers)];
  if (uniqueNumbers.length < 2) {
    return undefined;
  }

  uniqueNumbers.sort((a, b) => b - a);
  return uniqueNumbers[1];
}

// Example usage
const values = [7, 3, 9, 5, 9, 4];
const result = secondLargest(values);
console.log('Second largest number:', result);
