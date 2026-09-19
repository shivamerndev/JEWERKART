import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const RegisterForm = ({ onRegister, loading }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    try {
      await onRegister({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  const inputStyle = {
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
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.775rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
    marginBottom: '0.5rem',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    fontFamily: 'var(--font-sans)',
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = 'var(--text-primary)';
    e.target.style.boxShadow = '0 0 0 3px rgba(197, 145, 74, 0.2)';
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = 'var(--border-light)';
    e.target.style.boxShadow = 'none';
  };

  return (
    <div style={{ width: '100%', maxWidth: '420px' }}>
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
          Create Account
        </h2>
        <p className="text-theme-secondary" style={{ fontSize: '0.875rem' }}>
          Join Jewerkart for exclusive collections
        </p>
      </div>

      {/* Error */}
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
        {/* Name */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label htmlFor="register-name" style={labelStyle}>Full Name</label>
          <input
            id="register-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        {/* Email */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label htmlFor="register-email" style={labelStyle}>Email Address</label>
          <input
            id="register-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label htmlFor="register-password" style={labelStyle}>Password</label>
          <div style={{ position: 'relative' }}>
            <input
              id="register-password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Min. 6 characters"
              style={{ ...inputStyle, paddingRight: '2.75rem' }}
              onFocus={handleFocus}
              onBlur={handleBlur}
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

        {/* Confirm Password */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="register-confirm" style={labelStyle}>Confirm Password</label>
          <input
            id="register-confirm"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter your password"
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        {/* Submit */}
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
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>
      </form>

      {/* Login Link */}
      <p
        className="text-theme-secondary"
        style={{ textAlign: 'center', fontSize: '0.85rem', margin: 0 }}
      >
        Already have an account?{' '}
        <Link
          to="/login"
          style={{
            color: 'var(--text-primary)',
            fontWeight: '600',
            textDecoration: 'none',
            borderBottom: '1px solid var(--text-primary)',
            transition: 'opacity 0.2s ease',
          }}
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
