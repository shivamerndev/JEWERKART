import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, Mail, ShieldCheck, KeyRound, ArrowRight, Eye, EyeOff, Sparkles } from 'lucide-react';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('admin@jewerkart.com');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [twoFactorCode, setTwoFactorCode] = useState('');
  const [requires2FA, setRequires2FA] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/admin/dashboard');
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#0e0c09] flex flex-col justify-center py-12 sm:px-6 lg:px-8 text-stone-200 relative overflow-hidden">
      {/* Background ambient gold luxury glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-tr from-amber-600 to-amber-400 text-stone-950 font-serif font-black text-2xl shadow-xl shadow-amber-950/40 mb-4">
          J
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-serif text-amber-100">
          Jewerkart Back-Office ERP
        </h2>
        <p className="mt-2 text-xs text-stone-400">
          Enterprise Jewelry Operations, Inventory & Fulfillment Suite
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4">
        <div className="bg-[#181511] py-8 px-6 shadow-2xl rounded-2xl border border-[#2d261c] sm:px-10">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-medium text-stone-300">
                Staff Email ID / Operator UID
              </label>
              <div className="mt-1.5 relative rounded-lg shadow-xs">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-500">
                  <Mail className="h-4 w-4" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-9 pr-3 py-2.5 bg-[#0e0c09] border border-[#332b1f] rounded-lg text-xs text-stone-200 placeholder-stone-500 focus:outline-hidden focus:border-amber-500"
                  placeholder="admin@jewerkart.com"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-xs font-medium text-stone-300">
                  Password
                </label>
                <a href="#reset" className="text-[11px] text-amber-400 hover:text-amber-300">
                  Forgot key?
                </a>
              </div>
              <div className="mt-1.5 relative rounded-lg shadow-xs">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-500">
                  <Lock className="h-4 w-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-9 pr-10 py-2.5 bg-[#0e0c09] border border-[#332b1f] rounded-lg text-xs text-stone-200 placeholder-stone-500 focus:outline-hidden focus:border-amber-500"
                  placeholder="••••••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-stone-500 hover:text-stone-300"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {requires2FA && (
              <div>
                <label className="block text-xs font-medium text-amber-300">
                  Hardware 2FA / Authenticator OTP
                </label>
                <div className="mt-1.5 relative rounded-lg shadow-xs">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-amber-500">
                    <KeyRound className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    maxLength={6}
                    value={twoFactorCode}
                    onChange={(e) => setTwoFactorCode(e.target.value)}
                    className="block w-full pl-9 pr-3 py-2 bg-[#0e0c09] border border-amber-500/50 rounded-lg text-xs text-amber-200 tracking-widest font-mono"
                    placeholder="000 000"
                  />
                </div>
              </div>
            )}

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center space-x-2 text-stone-400 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-[#3a3124] text-amber-500 focus:ring-amber-500 bg-[#0e0c09]"
                />
                <span>Remember console terminal</span>
              </label>
              <button
                type="button"
                onClick={() => setRequires2FA(!requires2FA)}
                className="text-[11px] text-stone-400 hover:text-amber-400 transition-colors"
              >
                {requires2FA ? 'Standard Login' : 'Use 2FA Token'}
              </button>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center py-2.5 px-4 border border-transparent rounded-lg text-xs font-semibold text-stone-950 bg-linear-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 focus:outline-hidden shadow-lg shadow-amber-950/60 transition-all"
              >
                {loading ? (
                  <span className="inline-flex items-center">
                    <span className="w-3.5 h-3.5 border-2 border-stone-950 border-t-transparent rounded-full animate-spin mr-2"></span>
                    Authenticating Session...
                  </span>
                ) : (
                  <span className="inline-flex items-center space-x-2">
                    <span>Access ERP Console</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                )}
              </button>
            </div>
          </form>

          <div className="mt-6 pt-5 border-t border-[#2b241a] text-center">
            <div className="flex items-center justify-center space-x-2 text-[11px] text-stone-300">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>256-bit TLS Encrypted ERP Access</span>
            </div>
            <p className="mt-2 text-[10px] text-stone-400">
              Authorized personnel only. All access attempts are logged with IP & timestamp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
