import Counter from './Counter';

function App() {
  const onCounterChange = (counter) => {
    console.log(`Counter: ${counter}`);
  };

  return (
    <>
      <Counter onCounterChange={onCounterChange} />
    </>
  );
}

export default App;
