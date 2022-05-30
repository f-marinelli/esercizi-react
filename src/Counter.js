import { useEffect, useState } from 'react';

const Counter = (props) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((state) => state + 1);
  };

  useEffect(() => {
    props.onCounterChange(counter);
  }, [counter, props]);

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
};

export default Counter;
