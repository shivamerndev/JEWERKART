import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, XCircle, ArrowLeft, Headphones } from 'lucide-react';

const OrderFailed = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center mx-auto text-rose-600">
          <XCircle className="w-8 h-8" />
        </div>

        <div>
          <span className="px-2.5 py-0.5 bg-rose-100 text-rose-800 rounded-full font-bold text-[10px] uppercase tracking-wider">
            Order Placement Failed
          </span>
          <h1 className="text-2xl font-bold font-serif text-stone-900 tracking-tight mt-2">
            Unable to Process Order
          </h1>
          <p className="text-xs text-stone-500 mt-2 leading-relaxed">
            One or more selected jewelry items may have just sold out from the vault or your order session expired.
          </p>
        </div>

        <div className="flex flex-col gap-2.5 pt-2">
          <Link
            to="/cart"
            className="w-full inline-flex items-center justify-center space-x-2 px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-100 font-medium text-xs rounded-xl shadow-xs transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Shopping Bag</span>
          </Link>
          <Link
            to="/contact"
            className="w-full inline-flex items-center justify-center space-x-2 px-6 py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-900 font-semibold text-xs rounded-xl transition-colors"
          >
            <Headphones className="w-4 h-4" />
            <span>Contact Jewellery Concierge</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderFailed;
