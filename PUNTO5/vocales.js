function vocales(text) {
  if (typeof text !== "string") return 0;

  const normalized = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (const char of normalized) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

module.exports = vocales;
