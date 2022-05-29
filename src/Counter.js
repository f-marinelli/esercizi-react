import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((state) => state + 1);
  };

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
};

export default Counter;
