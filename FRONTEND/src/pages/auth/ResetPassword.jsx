import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Lock, Eye, EyeOff, CheckCircle2, ShieldCheck } from 'lucide-react';
import useAuth from '../../hooks/useAuth';

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const { handleResetPassword, loading } = useAuth();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password.length < 6) {
      setError('Password must contain at least 6 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      await handleResetPassword(token, password);
      setSuccess(true);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to reset password. The link may have expired or is invalid.');
    }
  };

  return (
    <main
      className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-6"
      style={{
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div
        className="bg-theme-card w-full max-w-[440px] p-10 rounded-xl"
        style={{
          border: '1px solid var(--border-light)',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <div className="text-center mb-8">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">
              ENCRYPTED CREDENTIALS
            </span>
          </div>
          <h1
            className="font-serif text-[1.75rem] font-semibold mb-2"
            style={{
              color: 'var(--text-primary)',
            }}
          >
            Reset Password
          </h1>
          <p
            className="font-garamond text-[1.05rem] m-0"
            style={{ color: 'var(--text-secondary)' }}
          >
            Create a secure new password for your Jewerkart patron account.
          </p>
        </div>

        {success ? (
          <div className="text-center py-6">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{
                backgroundColor: 'var(--theme-champagne)',
                color: 'var(--theme-gold)',
                border: '1px solid var(--border-light)',
              }}
            >
              <CheckCircle2 size={32} />
            </div>
            <h3
              className="font-serif text-[1.35rem] mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              Password Updated Successfully
            </h3>
            <p
              className="text-[0.9rem] mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              Your credentials have been securely updated. Redirecting you to the sign in portal...
            </p>
            <Link
              to="/login"
              className="btn-slate inline-block py-3 px-8 rounded-md font-semibold no-underline"
            >
              Proceed to Sign In
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {error && (
              <div className="py-3 px-4 rounded-md bg-[#FEE2E2] border border-[#FCA5A5] text-[#991B1B] text-[0.85rem]">
                {error}
              </div>
            )}

            <div>
              <label
                className="block text-[0.85rem] font-semibold mb-2"
                style={{
                  color: 'var(--text-primary)',
                }}
              >
                New Password
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                  style={{
                    color: 'var(--text-secondary)',
                  }}
                />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Minimum 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full py-3 px-10 rounded-md text-[0.9rem] outline-none box-border"
                  style={{
                    border: '1px solid var(--border-light)',
                    backgroundColor: 'var(--bg-card-warm)',
                    color: 'var(--text-primary)',
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer p-0"
                  style={{
                    color: 'var(--text-secondary)',
                  }}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label
                className="block text-[0.85rem] font-semibold mb-2"
                style={{
                  color: 'var(--text-primary)',
                }}
              >
                Confirm New Password
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                  style={{
                    color: 'var(--text-secondary)',
                  }}
                />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Re-enter new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full py-3 pr-4 pl-10 rounded-md text-[0.9rem] outline-none box-border"
                  style={{
                    border: '1px solid var(--border-light)',
                    backgroundColor: 'var(--bg-card-warm)',
                    color: 'var(--text-primary)',
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-slate w-full p-3.5 rounded-md font-semibold text-[0.95rem] mt-2 cursor-pointer disabled:cursor-not-allowed"
            >
              {loading ? 'Updating Password...' : 'Save New Password'}
            </button>
          </form>
        )}

        <div
          className="mt-8 p-3 rounded-md flex items-center gap-2 text-[0.8rem]"
          style={{
            backgroundColor: 'var(--theme-champagne-light)',
            border: '1px dashed var(--border-light)',
            color: 'var(--text-secondary)',
          }}
        >
          <ShieldCheck size={18} className="shrink-0" style={{ color: 'var(--theme-gold)' }} />
          <span>Reset Token Active: {token ? `${token.substring(0, 8)}...` : 'Verified Authenticated Session'}</span>
        </div>
      </div>
    </main>
  );
};

export default ResetPassword;
