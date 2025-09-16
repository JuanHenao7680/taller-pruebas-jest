function promedio(notas) {
  if (!Array.isArray(notas) || notas.length === 0) {
    return 0;
  }

  const sum = notas.reduce((acc, n) => acc + n, 0);
  return sum / notas.length;
}

module.exports = promedio;
