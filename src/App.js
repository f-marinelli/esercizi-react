import { Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Counter from './Counter';
import ShowGithubUser from './ShowGithubUser';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome name="Fabrizio" />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/users/:username" element={<ShowGithubUser />} />
    </Routes>
  );
}

export default App;
