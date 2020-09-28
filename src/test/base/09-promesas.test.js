import "@testing-library/jest-dom";
import { getHeroeByIdAsync, getHeroesByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Pruebas con Promises", () => {
  test("should retornar un Heroe aync", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  test("should retornar mensaje de error", (done) => {
    const id = 10;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
