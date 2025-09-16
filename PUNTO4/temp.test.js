const conversion = require('./temp');

describe("Conversión de Celsius a Fahrenheit", () => {
  test("0°C → 32°F", () => {
    expect(conversion(0)).toBe(32);
  });

  test("100°C → 212°F", () => {
    expect(conversion(100)).toBe(212);
  });

  test("-40°C → -40°F", () => {
    expect(conversion(-40)).toBe(-40);
  });

  test("Entrada no numérica → lanza error", () => {
    expect(() => conversion("abc")).toThrow("El valor debe ser numérico");
  });
});
