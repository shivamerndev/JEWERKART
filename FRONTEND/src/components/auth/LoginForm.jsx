import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const LoginForm = ({ onLogin, loading }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      await onLogin(formData);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '420px',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2
          className="font-serif"
          style={{
            fontSize: '1.75rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
            margin: '0 0 0.5rem',
          }}
        >
          Welcome Back
        </h2>
        <p
          className="text-theme-secondary"
          style={{ fontSize: '0.875rem' }}
        >
          Sign in to your Jewerkart account
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div
          style={{
            background: 'rgba(239, 68, 68, 0.08)',
            border: '1px solid rgba(239, 68, 68, 0.2)',
            borderRadius: '4px',
            padding: '0.75rem 1rem',
            marginBottom: '1.25rem',
            color: '#DC2626',
            fontSize: '0.825rem',
            fontFamily: 'var(--font-sans)',
          }}
        >
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label
            htmlFor="login-email"
            style={{
              display: 'block',
              fontSize: '0.775rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Email Address
          </label>
          <input
            id="login-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              border: '1px solid var(--border-light)',
              borderRadius: '4px',
              fontSize: '0.875rem',
              fontFamily: 'var(--font-sans)',
              color: 'var(--text-primary)',
              backgroundColor: 'var(--bg-card)',
              outline: 'none',
              transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
              boxSizing: 'border-box',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--text-primary)';
              e.target.style.boxShadow = '0 0 0 3px rgba(197, 145, 74, 0.2)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--border-light)';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label
            htmlFor="login-password"
            style={{
              display: 'block',
              fontSize: '0.775rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Password
          </label>
          <div style={{ position: 'relative' }}>
            <input
              id="login-password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '0.75rem 2.75rem 0.75rem 1rem',
                border: '1px solid var(--border-light)',
                borderRadius: '4px',
                fontSize: '0.875rem',
                fontFamily: 'var(--font-sans)',
                color: 'var(--text-primary)',
                backgroundColor: 'var(--bg-card)',
                outline: 'none',
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                boxSizing: 'border-box',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--text-primary)';
                e.target.style.boxShadow = '0 0 0 3px rgba(197, 145, 74, 0.2)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--border-light)';
                e.target.style.boxShadow = 'none';
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Toggle password visibility"
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-secondary)',
                display: 'flex',
                padding: '2px',
              }}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="btn-slate"
          style={{
            width: '100%',
            padding: '0.85rem',
            borderRadius: '4px',
            fontSize: '0.8rem',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1,
            marginBottom: '1.5rem',
          }}
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>

      {/* Register Link */}
      <p
        className="text-theme-secondary"
        style={{
          textAlign: 'center',
          fontSize: '0.85rem',
          margin: 0,
        }}
      >
        Don't have an account?{' '}
        <Link
          to="/register"
          style={{
            color: 'var(--text-primary)',
            fontWeight: '600',
            textDecoration: 'none',
            borderBottom: '1px solid var(--text-primary)',
            transition: 'opacity 0.2s ease',
          }}
        >
          Create Account
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
