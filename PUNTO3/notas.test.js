
const promedio = require('./notas');

describe("Cálculo de promedio de notas", () => {
  test("[3, 4, 5] → 4", () => {
    expect(promedio([3, 4, 5])).toBe(4);
  });

  test("[10] → 10", () => {
    expect(promedio([10])).toBe(10);
  });

  test("Lista vacía → 0", () => {
    expect(promedio([])).toBe(0);
  });

  test("[2.5, 3.5] → 3", () => {
    expect(promedio([2.5, 3.5])).toBe(3);
  });

  test("Entrada no es array → 0", () => {
    expect(promedio("no es lista")).toBe(0);
  });
});
