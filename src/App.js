import { useState } from 'react';
import Counter from './Counter';

function App() {
  const [mount, setMount] = useState(true);

  const onCounterChange = (counter) => {
    console.log(`Counter: ${counter}`);
  };

  const handleMount = () => {
    setMount((mount) => !mount);
  };

  return (
    <>
      <button onClick={handleMount}>Mount Counter</button>
      {mount && <Counter onCounterChange={onCounterChange} />}
    </>
  );
}

export default App;
