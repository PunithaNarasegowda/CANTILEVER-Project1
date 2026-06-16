import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const navigate = useNavigate();
  const { register, loading } = useAuth();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await register(form);
    if (result.ok) {
      navigate('/dashboard');
      return;
    }
    setError(result.message);
  };

  return (
    <div className="auth-shell">
      <form className="surface auth-card" onSubmit={handleSubmit}>
        <p className="eyebrow">Start publishing</p>
        <h1>Create account</h1>
        <label>
          Name
          <input
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            minLength={6}
            value={form.password}
            onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
            required
          />
        </label>
        {error ? <p className="error-banner">{error}</p> : null}
        <button className="primary-button" type="submit" disabled={loading}>
          {loading ? 'Creating account...' : 'Register'}
        </button>
        <p className="switch-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
