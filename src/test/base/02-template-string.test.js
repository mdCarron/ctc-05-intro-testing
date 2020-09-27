import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string.js";

describe("Pruebas en 02-template-string.test.js", () => {
  test("getSaludo tiene que retornar hola Sopita", () => {
    const nombre = "Sopita";
    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre);
  });

  test("getSaludo debe retornar Hola Chocolinas con argumento por defecto.", () => {
    const saludoDefecto = getSaludo();
    expect(saludoDefecto).toBe("Hola Chocolinas");
  });
});
