import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useGithubUser = (username) => {
  const { data, error } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  return { data, error, isLoading: !data && !error };
};
