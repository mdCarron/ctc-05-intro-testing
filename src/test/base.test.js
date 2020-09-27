test("Este es el primer test", () => {
  const isActive = false;
  if (!isActive) {
    throw new Error("El estado no es Activo");
  }
});
