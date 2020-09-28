import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PrimeraApp from "../PrimeraApp";

describe("Testing en PrimeraApp", () => {
  test("should mostrar mensaje Hola, soy un Titlo", () => {
    const saludo = "Hola, soy un Titulo";
    const { getByText } = render(<PrimeraApp saludo={saludo} />);

    expect(getByText(saludo)).toBeInTheDocument();
  });
});
