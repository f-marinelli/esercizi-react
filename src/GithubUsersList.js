import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

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
      {users.map((user, i) => (
        <Link key={i} to={user}>
          User: {user}
        </Link>
      ))}
      <Outlet />
    </>
  );
};

export default GithubUsersList;
