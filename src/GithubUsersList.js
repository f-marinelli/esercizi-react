import GithubUser from './GithubUser';
import { useState } from 'react';

const GithubUsersList = () => {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);

  const handleInput = (e) => {
    setUser(e.target.value);
  };

  const handleAddUser = () => {
    setUsers((prevState) => [...prevState, user]);
  };

  return (
    <>
      <input type="text" name="user" onChange={handleInput} />
      <button onClick={handleAddUser}>Add User</button>
      {users.map((u, i) => (
        <GithubUser key={i} username={u} />
      ))}
    </>
  );
};

export default GithubUsersList;
