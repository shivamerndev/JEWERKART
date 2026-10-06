import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle2, ShieldCheck, KeyRound } from 'lucide-react';
import useAuth from '../../hooks/useAuth';

const ForgotPassword = () => {
  const { handleForgotPassword, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [resetToken, setResetToken] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setError('');

    try {
      const res = await handleForgotPassword(email);
      setSubmitted(true);
      if (res?.data?.resetToken) {
        setResetToken(res.data.resetToken);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to dispatch recovery instructions. Please try again.');
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
        className="bg-theme-card w-full max-w-[440px] p-10 rounded-xl relative"
        style={{
          border: '1px solid var(--border-light)',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <div className="text-center mb-8">
          <div className="divider-ornament mb-3">
            <span className="badge-925 text-[9px] tracking-[2px]">
              SECURITY & ACCESS
            </span>
          </div>
          <h1
            className="font-serif text-[1.75rem] font-semibold mb-2"
            style={{
              color: 'var(--text-primary)',
            }}
          >
            Forgot Password
          </h1>
          <p
            className="font-garamond text-[1.05rem] m-0"
            style={{ color: 'var(--text-secondary)' }}
          >
            Enter your registered email address to receive password reset instructions.
          </p>
        </div>

        {error && (
          <div
            className="bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.2)] rounded py-3 px-4 mb-5 text-[#DC2626] text-[0.825rem]"
            style={{
              fontFamily: 'var(--font-sans)',
            }}
          >
            {error}
          </div>
        )}

        {submitted ? (
          <div className="text-center py-4">
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
              className="font-serif text-[1.25rem] mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              Reset Link Dispatched
            </h3>
            <p
              className="text-[0.9rem] leading-[1.5] mb-7"
              style={{ color: 'var(--text-secondary)' }}
            >
              We have processed your request for <strong style={{ color: 'var(--text-primary)' }}>{email}</strong>.
              Please check your inbox or proceed to update your password with the recovery session below.
            </p>

            {resetToken && (
              <div className="mb-6">
                <Link
                  to={`/reset-password/${resetToken}`}
                  className="btn-gold inline-flex items-center justify-center gap-2 w-full p-3.5 rounded-md no-underline font-semibold text-[0.9rem] mb-3"
                >
                  <KeyRound size={16} /> Proceed to Reset Password
                </Link>
              </div>
            )}

            <Link
              to="/login"
              className="btn-slate inline-flex items-center justify-center gap-2 w-full p-3.5 rounded-md no-underline font-semibold text-[0.95rem]"
            >
              <ArrowLeft size={16} /> Back to Sign In
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label
                className="block text-[0.85rem] font-semibold mb-2"
                style={{
                  color: 'var(--text-primary)',
                }}
              >
                Registered Email Address
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                  style={{
                    color: 'var(--text-secondary)',
                  }}
                />
                <input
                  type="email"
                  required
                  placeholder="e.g. yourname@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
              {loading ? 'Transmitting Instructions...' : 'Send Recovery Instructions'}
            </button>

            <div
              className="text-center mt-4 pt-5"
              style={{ borderTop: '1px solid var(--border-light)' }}
            >
              <Link
                to="/login"
                className="inline-flex items-center gap-1.5 text-[0.9rem] font-medium no-underline"
                style={{
                  color: 'var(--theme-gold)',
                }}
              >
                <ArrowLeft size={14} /> Back to Sign In
              </Link>
            </div>
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
          <span>256-Bit TLS Bank Grade Security for all patron credentials.</span>
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
