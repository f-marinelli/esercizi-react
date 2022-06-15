import { useEffect } from 'react';
import { useGithubUser } from './useGithubUser';

const GithubUser = ({ username }) => {
  const { userData, onFetchUser } = useGithubUser();

  useEffect(() => {
    onFetchUser(username);
  }, [username, onFetchUser]);

  return (
    userData && (
      <div>
        <h1>{userData.login}</h1>
        <h2>{userData.url}</h2>
      </div>
    )
  );
};

export default GithubUser;
