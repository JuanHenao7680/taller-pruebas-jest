const countVowels = require('./vocales');

describe("Conteo de vocales en un texto", () => {
  test('"hola" → 2', () => {
    expect(countVowels("hola")).toBe(2);
  });

  test('"rhythm" → 0', () => {
    expect(countVowels("rhythm")).toBe(0);
  });

  test('"Educación" → 5 (ignorar mayúsculas y tildes)', () => {
    expect(countVowels("Educación")).toBe(5);
  });

  test("Cadena vacía → 0", () => {
    expect(countVowels("")).toBe(0);
  });

  test("Entrada no string → 0", () => {
    expect(countVowels(12345)).toBe(0);
  });
});
