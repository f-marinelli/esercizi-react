import { Routes, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Counter from './Counter';
import NotFound from './NotFound';
import GithubUsersList from './GithubUsersList';
import ShowGithubUser from './ShowGithubUser';

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
        <Route path="counter" element={<Counter />} />
        <Route path="users" element={<GithubUsersList />}>
          <Route index element={<p>Add a user and select it</p>} />
          <Route index path=":username" element={<ShowGithubUser />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
