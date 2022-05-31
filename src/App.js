import { Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Counter from './Counter';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome name="Fabrizio" />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  );
}

export default App;
