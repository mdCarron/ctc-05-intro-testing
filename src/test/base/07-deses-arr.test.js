import { retornaArreglo } from "../../base/07-deses-arr";
import "@testing-library/jest-dom";

describe("Pruebas en desestructuración", () => {
  test("retornaArreglo deberia retornar un arreglo con un string y un numero.", () => {
    const arr = retornaArreglo();
    // ['ABC', 123]
    const [letras, numero] = retornaArreglo();

    expect(arr).toEqual(["ABC", 123]);

    expect(letras).toBe("ABC");
    expect(typeof letras).toBe("string");

    expect(numero).toBe(123);
    expect(typeof numero).toBe("number");
  });
});
