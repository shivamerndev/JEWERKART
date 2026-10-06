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

  return (
    <div className="w-full max-w-[420px]">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="font-serif text-[1.75rem] font-semibold text-text-primary mb-2">
          Create Account
        </h2>
        <p className="text-text-secondary text-sm">
          Join Jewerkart for exclusive collections
        </p>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded p-3 mb-5 text-red-600 text-xs font-sans">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-5">
          <label
            htmlFor="register-name"
            className="block text-xs font-semibold text-text-primary mb-2 tracking-[0.5px] uppercase font-sans"
          >
            Full Name
          </label>
          <input
            id="register-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full px-4 py-3 border border-border-light rounded text-sm font-sans text-text-primary bg-bg-card outline-none transition focus:border-text-primary focus:ring-2 focus:ring-gold/20 box-border"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label
            htmlFor="register-email"
            className="block text-xs font-semibold text-text-primary mb-2 tracking-[0.5px] uppercase font-sans"
          >
            Email Address
          </label>
          <input
            id="register-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full px-4 py-3 border border-border-light rounded text-sm font-sans text-text-primary bg-bg-card outline-none transition focus:border-text-primary focus:ring-2 focus:ring-gold/20 box-border"
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <label
            htmlFor="register-password"
            className="block text-xs font-semibold text-text-primary mb-2 tracking-[0.5px] uppercase font-sans"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="register-password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Min. 6 characters"
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

        {/* Confirm Password */}
        <div className="mb-6">
          <label
            htmlFor="register-confirm"
            className="block text-xs font-semibold text-text-primary mb-2 tracking-[0.5px] uppercase font-sans"
          >
            Confirm Password
          </label>
          <input
            id="register-confirm"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter your password"
            className="w-full px-4 py-3 border border-border-light rounded text-sm font-sans text-text-primary bg-bg-card outline-none transition focus:border-text-primary focus:ring-2 focus:ring-gold/20 box-border"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="btn-slate w-full py-3.5 rounded text-xs tracking-[1.5px] uppercase cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 mb-6 transition"
        >
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>
      </form>

      {/* Login Link */}
      <p className="text-center text-text-secondary text-sm m-0">
        Already have an account?{' '}
        <Link
          to="/login"
          className="text-text-primary font-semibold no-underline border-b border-text-primary hover:opacity-80 transition-opacity"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
