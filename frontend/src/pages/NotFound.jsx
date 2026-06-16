import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="surface empty-state">
      <h1>Page not found</h1>
      <p>The page you requested does not exist.</p>
      <Link to="/" className="primary-button">
        Go home
      </Link>
    </div>
  );
};

export default NotFound;
