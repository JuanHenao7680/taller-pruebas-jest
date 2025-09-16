const palindromo = require('./palindromos');

describe("Detección de palíndromos", () => {
  test('"oso" → true', () => {
    expect(palindromo("oso")).toBe(true);
  });

  test('"casa" → false', () => {
    expect(palindromo("casa")).toBe(false);
  });

  test("Cadena vacía → true", () => {
    expect(palindromo("")).toBe(true);
  });

  test('"Ana" (mayúsculas no deben afectar) → true', () => {
    expect(palindromo("Ana")).toBe(true);
  });

  test("Entrada no string → false", () => {
    expect(palindromo(12321)).toBe(false);
  });
});
