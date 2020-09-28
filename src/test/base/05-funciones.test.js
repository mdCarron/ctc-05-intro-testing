import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo } from "../../base/05-funciones.js";

describe("Testing de 05-funciones.js", () => {
  test("getUser debe de retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test("getUsuarioActivo debe de retornar un objeto", () => {
    const nombre = "Sopita";

    const usuarioActivoTest = getUsuarioActivo(nombre);

    expect(usuarioActivoTest).toEqual({
      uid: "ABC567",
      username: nombre,
    });
  });
});
