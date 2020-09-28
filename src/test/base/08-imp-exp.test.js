import "@testing-library/jest-dom";
import heroes from "../../data/heroes.js";
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp.js";

describe("Pruebas en funciones de Heroe", () => {
  test("should retornar heroe por id", () => {
    const id = 1;
    const heroeTest = getHeroeById(id);
    const heroeData = heroes.find((heroe) => heroe.id === id);

    expect(heroeTest).toEqual(heroeData);
  });

  test("should retornar undefined si heroe no exite", () => {
    const id = 10;
    const heroeTest = getHeroeById(id);

    expect(heroeTest).toBe(undefined);
  });

  // TAREA
  // retornar arreglo con heroes de dc, toequal al arreglo filtrado
  test("should retornar heroes DC", () => {
    const owner = "DC";
    const heroeTest = getHeroesByOwner(owner);
    const heroeData = heroes.filter((heroe) => heroe.owner === owner);

    expect(heroeTest).toEqual(heroeData);
  });

  test("should retornar heroes Marvel", () => {
    const owner = "Marvel";
    const cantidad = 2;
    const heroeTest = getHeroesByOwner(owner);

    expect(heroeTest.length).toBe(cantidad);
  });
});
