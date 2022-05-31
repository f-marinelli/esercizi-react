import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1>Page not Found</h1>
      <Link to="/">Homepage</Link>
    </>
  );
};

export default NotFound;
