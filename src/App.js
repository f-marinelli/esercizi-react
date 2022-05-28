import { Counter } from './Counter';

function App() {
  return (
    <>
      <Counter initialValue={10} incrementValue={2} incrementInterval={500} />
    </>
  );
}

export default App;
