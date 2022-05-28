import { Counter } from './Counter';

function App() {
  return (
    <>
      <Counter initialValue={10} incrementValue={1} incrementInterval={1000} />
    </>
  );
}

export default App;
