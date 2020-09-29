import React from "react";
import CounterApp from "../CounterApp";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

describe("Testing en CounterApp", () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should mostrar nuevo valor por defecto de 100", () => {
    const nuevoValue = 100;
    const wrapper = shallow(<CounterApp value={nuevoValue} />);

    const h2Value = wrapper.find("h2").text();

    expect(h2Value).toBe(`${nuevoValue}`);
  });

  test("should incrementar en 1", () => {
    wrapper.find("button").at(1).simulate("click");
    const counterText = wrapper.find("h2").text();

    expect(counterText).toBe("11");
  });

  test("should decrementar en 1", () => {
    const wrapper = shallow(<CounterApp />);

    wrapper.find("button").at(0).simulate("click");
    const counterText = wrapper.find("h2").text();

    expect(counterText).toBe("9");
  });
});
