import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, AlertCircle, RefreshCw, ShoppingCart, HelpCircle } from 'lucide-react';

const PaymentFailed = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center mx-auto text-rose-600">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div>
          <span className="px-2.5 py-0.5 bg-rose-100 text-rose-800 rounded-full font-bold text-[10px] uppercase tracking-wider">
            Transaction Declined
          </span>
          <h1 className="text-2xl font-bold font-serif text-stone-900 tracking-tight mt-2">
            Payment Could Not Be Completed
          </h1>
          <p className="text-xs text-stone-500 mt-2 leading-relaxed">
            Your bank or card issuer was unable to authorize the transaction. No amount has been deducted. If deducted, it will be automatically refunded within 48-72 hours.
          </p>
        </div>

        <div className="p-3 bg-stone-50 rounded-xl text-left text-xs space-y-1 text-stone-600">
          <p><strong className="text-stone-800">Reason:</strong> Bank authorization timeout or card limit reached</p>
          <p><strong className="text-stone-800">Suggested Action:</strong> Retry via UPI, NetBanking or another card</p>
        </div>

        <div className="flex flex-col gap-2.5 pt-2">
          <Link
            to="/checkout"
            className="w-full inline-flex items-center justify-center space-x-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs rounded-xl shadow-xs transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Retry Payment Method</span>
          </Link>
          <Link
            to="/cart"
            className="w-full inline-flex items-center justify-center space-x-2 px-6 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium text-xs rounded-xl transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Review Items in Bag</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
