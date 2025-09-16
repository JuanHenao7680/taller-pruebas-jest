function conversion(celsius) {
  if (typeof celsius !== "number") {
    throw new Error("El valor debe ser numérico");
  }
  return (celsius * 9) / 5 + 32;
}

module.exports = conversion;