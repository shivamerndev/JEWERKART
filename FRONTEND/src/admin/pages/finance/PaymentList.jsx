import React, { useState } from 'react';
import { CreditCard, Search, Download, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const initialPayments = [
  {
    txnId: 'pay_Or02kL90aZs81v',
    orderId: 'JK-10492',
    customer: 'Ananya Sharma',
    amount: 74200,
    gateway: 'Razorpay UPI',
    status: 'Captured',
    fee: 1484,
    netSettled: 72716,
    date: '04 Oct 2026, 04:31 PM'
  },
  {
    txnId: 'pay_Or99mK12bXw77q',
    orderId: 'JK-10491',
    customer: 'Vikramaditya Roy',
    amount: 145000,
    gateway: 'HDFC CC (Mastercard)',
    status: 'Captured',
    fee: 2900,
    netSettled: 142100,
    date: '04 Oct 2026, 03:46 PM'
  },
  {
    txnId: 'pay_Fail98218xZa',
    orderId: 'JK-10485',
    customer: 'Meenal Joshi',
    amount: 32000,
    gateway: 'ICICI NetBanking',
    status: 'Failed (Bank Timeout)',
    fee: 0,
    netSettled: 0,
    date: '04 Oct 2026, 01:20 PM'
  }
];

const PaymentList = () => {
  const [payments, setPayments] = useState(initialPayments);

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Payment Gateway Ledger & Settlements"
        subtitle="Manage real-time Razorpay/Stripe transactions, gateway MDR fees and bank payouts"
        breadcrumbs={[{ label: 'Payments' }]}
        actions={
          <button className="flex items-center space-x-1.5 px-3 py-2 bg-stone-900 hover:bg-stone-800 text-stone-100 rounded-lg text-xs font-medium transition-colors">
            <Download className="w-3.5 h-3.5" />
            <span>Download Bank Reconciliation</span>
          </button>
        }
      />

      <div className="bg-white border border-stone-200 rounded-xl shadow-xs overflow-hidden">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-stone-50 text-stone-500 font-semibold border-b border-stone-200">
              <th className="p-3 pl-5">Gateway Txn ID</th>
              <th className="p-3">Order Ref</th>
              <th className="p-3">Client</th>
              <th className="p-3">Method</th>
              <th className="p-3">Gross Amount</th>
              <th className="p-3">Gateway MDR (2%)</th>
              <th className="p-3">Net Settlement</th>
              <th className="p-3 pr-5 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {payments.map((p) => (
              <tr key={p.txnId} className="hover:bg-amber-50/20">
                <td className="p-3 pl-5 font-mono font-semibold text-stone-900">{p.txnId}</td>
                <td className="p-3 font-mono text-amber-800 font-medium">{p.orderId}</td>
                <td className="p-3 font-medium text-stone-800">{p.customer}</td>
                <td className="p-3 text-stone-600">{p.gateway}</td>
                <td className="p-3 font-mono font-bold text-stone-900">₹{p.amount.toLocaleString('en-IN')}</td>
                <td className="p-3 font-mono text-stone-500">₹{p.fee.toLocaleString('en-IN')}</td>
                <td className="p-3 font-mono font-bold text-emerald-700">₹{p.netSettled.toLocaleString('en-IN')}</td>
                <td className="p-3 pr-5 text-right">
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      p.status === 'Captured'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-rose-100 text-rose-800'
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentList;
