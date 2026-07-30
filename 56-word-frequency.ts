// 56. Count word frequency
function countWordFrequency(text: string): Record<string, number> {
  const words = text.toLowerCase().split(/\s+/);
  const frequency: Record<string, number> = {};
  for (const word of words) {
    frequency[word] = (frequency[word] || 0) + 1;
  }
  return frequency;
}

console.log(countWordFrequency("hello world hello")); // { hello: 2, world: 1 }
