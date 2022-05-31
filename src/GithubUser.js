import { useGithubUser } from './useGithubUser';

const GithubUser = ({ username }) => {
  const { data, error, isLoading } = useGithubUser(username);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Error</h2>}
      {data && (
        <div>
          <h1>{data.login}</h1>
          <h2>{data.url}</h2>
        </div>
      )}
    </>
  );
};

export default GithubUser;
