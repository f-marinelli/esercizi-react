import { useEffect, useState } from 'react';

export const useGithubUser = (username) => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchUser = async (username) => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const data = await res.json();
        setUserData(data);
      } catch (err) {
        throw new Error(err.message);
      }
    };

    fetchUser(username);
  }, [username]);

  return { userData };
};
