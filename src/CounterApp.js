import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const handleSus = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(value);
  };

  return (
    <Fragment>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleSus}>-1</button>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
    </Fragment>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

CounterApp.defaultProps = {
  value: 10,
};

export default CounterApp;
