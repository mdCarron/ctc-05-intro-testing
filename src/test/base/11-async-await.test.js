import "@testing-library/jest-dom";
import { getImagen } from "../../base/11-async-await.js";

describe("Testing con promesas Async/Await", () => {
  test("should retornar url de la imagen", async () => {
    const url = await getImagen();
    console.log(url);
    expect(url.includes("https://")).toBe(true);
  });
});
