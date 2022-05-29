import Sum from './Sum';
import Welcome from './Welcome';

function App() {
  return (
    <>
      <Welcome name="Fabrizio" />
      <Sum numeri={[1, 2, 3]} />
    </>
  );
}

export default App;
