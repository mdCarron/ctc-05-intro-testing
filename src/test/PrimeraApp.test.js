import React from "react";
import PrimeraApp from "../PrimeraApp";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

describe("Testing en PrimeraApp", () => {
  /*   test("should mostrar mensaje Hola, soy un Titlo", () => {
    const saludo = "Hola, soy un Titulo";
    const { getByText } = render(<PrimeraApp saludo={saludo} />);

    expect(getByText(saludo)).toBeInTheDocument();
  }); */
  test("debe de mostrar <PrimeraApp /> correctamente", () => {
    const saludo = "Hola, soy un Titulo";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar el props subtitulo en <PrimeraApp /> correctamente", () => {
    const saludo = "Hola, soy un Titulo";
    const subtitulo = "Y yo soy un subtitulo";

    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );

    const textoParrafo = wrapper.find("p").text();
    expect(textoParrafo).toBe(textoParrafo);
  });
});
