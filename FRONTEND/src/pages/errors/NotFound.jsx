import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Compass, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md w-full space-y-6">
        <div className="relative inline-block">
          <span className="font-serif text-8xl font-black text-amber-200/60 select-none">404</span>
          <div className="absolute inset-0 flex items-center justify-center">
            <Compass className="w-12 h-12 text-amber-600 animate-pulse" />
          </div>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 tracking-tight">
            Lost Treasure
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-2 leading-relaxed">
            The jewellery piece or destination you are seeking cannot be found in our current showcase.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-100 font-medium text-xs rounded-xl shadow-xs transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Boutique</span>
          </Link>
          <Link
            to="/shop"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold text-xs rounded-xl transition-colors"
          >
            <Search className="w-4 h-4" />
            <span>Explore Catalog</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
