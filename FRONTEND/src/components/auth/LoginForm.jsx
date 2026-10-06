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
    <div className="w-full max-w-[420px]">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="font-serif text-[1.75rem] font-semibold text-text-primary mb-2">
          Welcome Back
        </h2>
        <p className="text-text-secondary text-sm">
          Sign in to your Jewerkart account
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded p-3 mb-5 text-red-600 text-xs font-sans">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div className="mb-5">
          <label
            htmlFor="login-email"
            className="block text-xs font-semibold text-text-primary mb-2 tracking-[0.5px] uppercase font-sans"
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
            className="w-full px-4 py-3 border border-border-light rounded text-sm font-sans text-text-primary bg-bg-card outline-none transition focus:border-text-primary focus:ring-2 focus:ring-gold/20 box-border"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label
            htmlFor="login-password"
            className="block text-xs font-semibold text-text-primary mb-2 tracking-[0.5px] uppercase font-sans"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="login-password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full pl-4 pr-11 py-3 border border-border-light rounded text-sm font-sans text-text-primary bg-bg-card outline-none transition focus:border-text-primary focus:ring-2 focus:ring-gold/20 box-border"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Toggle password visibility"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-text-secondary flex p-0.5 hover:text-text-primary transition"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="btn-slate w-full py-3.5 rounded text-xs tracking-[1.5px] uppercase cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 mb-6 transition"
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>

      {/* Register Link */}
      <p className="text-center text-text-secondary text-sm m-0">
        Don't have an account?{' '}
        <Link
          to="/register"
          className="text-text-primary font-semibold no-underline border-b border-text-primary hover:opacity-80 transition-opacity"
        >
          Create Account
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
