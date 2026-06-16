import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="topbar">
      <Link to="/" className="brand">
        Blogify
      </Link>
      <nav className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        {user ? (
          <>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/posts/new">Write</NavLink>
            <button type="button" className="link-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register" className="button-link">
              Join Now
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
