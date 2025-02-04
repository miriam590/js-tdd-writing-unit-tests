export function pointsForWord(word) {
  if (typeof word !== 'string') {
    return 0; // Return 0 for non-string inputs
  }

  let points = 0;
  for (const char of word) {
    if (["a", "e", "i", "o", "u"].includes(char.toLowerCase())) {
      points += 1; // 1 point for vowels
    } else if (/[a-z]/i.test(char)) {
      points += 2; // 2 points for consonants
    }
  }
  return points;
}
