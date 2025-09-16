const calculateScore = require('./preguntas');

describe("Cálculo de puntaje en concurso", () => {
  test("Jugador con 3 correctas y 2 incorrectas → 26 puntos", () => {
    expect(calculateScore(3, 2)).toBe(26);
  });

  test("Jugador con todas correctas → aplica bonus", () => {
    expect(calculateScore(5, 0)).toBe(55); // 5*10=50 +5 bonus
  });

  test("Jugador con todas incorrectas → nunca menor que 0", () => {
    expect(calculateScore(0, 5)).toBe(0); // No negativo
  });

  test("Jugador sin respuestas → puntaje 0", () => {
    expect(calculateScore(0, 0)).toBe(0);
  });

  test("Caso borde: 1 correcta y nada más", () => {
    expect(calculateScore(1, 0)).toBe(15); // 10 + 5 bonus
  });
});

