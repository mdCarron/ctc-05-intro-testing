import React from "react";
import CounterApp from "../CounterApp";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

describe("Testing en CounterApp", () => {
  test("should match snapshot", () => {
    const wrapper = shallow(<CounterApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test("should mostrar nuevo valor por defecto de 100", () => {
    const nuevoValue = 100;
    const wrapper = shallow(<CounterApp value={nuevoValue} />);

    const h2Value = wrapper.find("h2").text();

    expect(h2Value).toBe(`${nuevoValue}`);
  });
});
