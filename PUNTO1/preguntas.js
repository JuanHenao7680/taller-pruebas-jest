function calculateScore(correct, incorrect) {
  let score = correct * 10 - incorrect * 2;

  if (incorrect === 0 && correct > 0) {
    score += 5;
  }

  if (score < 0) {
    score = 0;
  }

  return score;
}

module.exports = calculateScore;
