import { useState } from 'react';
import GithubUser from './GithubUser';

function App() {
  const [username, setUsername] = useState();

  const handleUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.elements.username.value);
  };

  return (
    <>
      <form onSubmit={handleUsername}>
        <input name="username" type="text" />
        <button type="submit">Submit</button>
      </form>
      <GithubUser username={username} />
    </>
  );
}

export default App;
