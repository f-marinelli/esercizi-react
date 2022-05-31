import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useGithubUser = (username) => {
  const { data, error } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  return { data, error, isLoading: !data && !error };
};
