import React from 'react';
import { Link } from 'react-router-dom';
import { WifiOff, RefreshCw, Home } from 'lucide-react';

const NetworkError = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md w-full space-y-6">
        <div className="w-20 h-20 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-500">
          <WifiOff className="w-10 h-10 text-stone-600" />
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 tracking-tight">
            Connection Lost
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-2 leading-relaxed">
            Unable to communicate with the Jewerkart server. Please check your internet connection and try again.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-100 font-medium text-xs rounded-xl shadow-xs transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Reconnect</span>
          </button>
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

export default NetworkError;
