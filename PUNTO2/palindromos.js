function isPalindrome(word) {
  if (typeof word !== "string") return false;

  const normalized = word.toLowerCase();

  const reversed = normalized.split("").reverse().join("");

  return normalized === reversed;
}

module.exports = isPalindrome;
