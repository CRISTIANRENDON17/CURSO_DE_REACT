import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10 }) => {
  const [count, setCount] = useState(value);

  const handleAdd = () => setCount(count + 1);

  const handleSubtract = () => setCount(prev => prev - 1);

  const handleReset = () => setCount(value);

  return (
    <>
      <hr />
      <h1>Counter App</h1>
      <p>Count: {count}</p>

      <button onClick={handleAdd}>Increment</button>
      <button onClick={handleSubtract}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number
};

export default CounterApp;
