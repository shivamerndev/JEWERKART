import React, { useState } from 'react';
import { RotateCcw, CheckCircle, XCircle, Search, ShieldCheck } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const initialRefunds = [
  {
    refundId: 'RF-9041',
    orderId: 'JK-10488',
    customer: 'Simran Kaur',
    product: 'Emerald Drop Earrings (14K)',
    amount: 52000,
    reason: 'Incorrect ring size ordered by client',
    vaultVerification: 'Passed (IGI Seal Intact)',
    status: 'Pending Approval',
    date: '04 Oct 2026'
  },
  {
    refundId: 'RF-9040',
    orderId: 'JK-10412',
    customer: 'Arjun Nambiar',
    product: '925 Silver Chain (20-inch)',
    amount: 8500,
    reason: 'Client changed preference before dispatch',
    vaultVerification: 'Auto-Approved (Not Dispatched)',
    status: 'Processed & Settled',
    date: '02 Oct 2026'
  }
];

const RefundList = () => {
  const [refunds, setRefunds] = useState(initialRefunds);

  const handleApprove = (id) => {
    setRefunds(refunds.map(r => r.refundId === id ? { ...r, status: 'Processed & Settled' } : r));
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Refunds, Returns & Reverse Logistics"
        subtitle="Manage customer return claims, jewellery appraisal verification, and automated gateway refunds"
        breadcrumbs={[{ label: 'Refunds' }]}
      />

      <div className="bg-white border border-stone-200 rounded-xl shadow-xs overflow-hidden">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-stone-50 text-stone-500 font-semibold border-b border-stone-200">
              <th className="p-3 pl-5">Refund Claim ID</th>
              <th className="p-3">Order Ref</th>
              <th className="p-3">Client</th>
              <th className="p-3">Jewelry Piece</th>
              <th className="p-3">Refund Amount</th>
              <th className="p-3">Vault Quality Audit</th>
              <th className="p-3">Claim Status</th>
              <th className="p-3 pr-5 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {refunds.map((r) => (
              <tr key={r.refundId} className="hover:bg-amber-50/20">
                <td className="p-3 pl-5 font-mono font-semibold text-stone-900">{r.refundId}</td>
                <td className="p-3 font-mono text-amber-800">{r.orderId}</td>
                <td className="p-3 font-medium text-stone-800">{r.customer}</td>
                <td className="p-3 text-stone-700">{r.product}</td>
                <td className="p-3 font-mono font-bold text-stone-900">₹{r.amount.toLocaleString('en-IN')}</td>
                <td className="p-3">
                  <span className="text-emerald-700 font-semibold text-[11px] flex items-center">
                    <ShieldCheck className="w-3.5 h-3.5 mr-1" /> {r.vaultVerification}
                  </span>
                </td>
                <td className="p-3">
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      r.status === 'Processed & Settled'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {r.status}
                  </span>
                </td>
                <td className="p-3 pr-5 text-right">
                  {r.status !== 'Processed & Settled' && (
                    <button
                      onClick={() => handleApprove(r.refundId)}
                      className="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-lg text-[11px]"
                    >
                      Approve Payout
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RefundList;
