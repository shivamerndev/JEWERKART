import React from 'react';
import { Link } from 'react-router-dom';
import { KeyRound, Home, LogIn } from 'lucide-react';

const Unauthorized = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md w-full space-y-6">
        <div className="relative inline-block">
          <span className="font-serif text-8xl font-black text-amber-200/50 select-none">401</span>
          <div className="absolute inset-0 flex items-center justify-center">
            <KeyRound className="w-12 h-12 text-amber-600" />
          </div>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 tracking-tight">
            Authentication Required
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-2 leading-relaxed">
            Your secure session has expired or requires valid cryptographic authorization to proceed.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/login"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-100 font-medium text-xs rounded-xl shadow-xs transition-colors"
          >
            <LogIn className="w-4 h-4" />
            <span>Sign In to Account</span>
          </Link>
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium text-xs rounded-xl transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Storefront</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
