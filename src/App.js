import { Routes, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Counter from './Counter';
import ShowGithubUser from './ShowGithubUser';
import NotFound from './NotFound';

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Welcome name="Fabrizio" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
