function getPalindromeSequences(numbers) {
  // Get all possible palindrome sequences from the array.
  const palindromeSequences = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      for (let k = j + 1; k < numbers.length; k++) {
        if (numbers[i] == numbers[j] && numbers[j] == numbers[k]) {
          palindromeSequences.push([numbers[i], numbers[j], numbers[k]]);
        }
      }
    }
  }

  // Choose three random palindrome sequences.
  const randomPalindromeSequences = [];
  while (randomPalindromeSequences.length < 3) {
    const randomIndex = Math.floor(Math.random() * palindromeSequences.length);
    randomPalindromeSequences.push(palindromeSequences[randomIndex]);
  }

  // Return the three random palindrome sequences.
  return randomPalindromeSequences;
}

// Generate an array of 12 random numbers.
const numbers = [random.randint(0, 100) for _ in range(12)];

// Get three palindrome sequences from the array.
const palindromeSequences = getPalindromeSequences(numbers);

// Print the three palindrome sequences.
for (const palindromeSequence of palindromeSequences) {
  console.log(palindromeSequence);