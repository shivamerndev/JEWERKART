import React, { useState } from 'react';
import { Download, IndianRupee, TrendingUp, Calendar } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const monthlySales = [
  { month: 'September 2026', orders: 1240, grossSales: 9850000, returns: 140000, netRevenue: 9710000, gstCollected: 291300 },
  { month: 'August 2026', orders: 1080, grossSales: 8420000, returns: 110000, netRevenue: 8310000, gstCollected: 249300 },
  { month: 'July 2026', orders: 990, grossSales: 7650000, returns: 95000, netRevenue: 7555000, gstCollected: 226650 },
  { month: 'June 2026', orders: 860, grossSales: 6800000, returns: 84000, netRevenue: 6716000, gstCollected: 201480 }
];

const SalesReport = () => {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Revenue & Sales Intelligence Report"
        subtitle="Audited financial ledger, GST tax liabilities, monthly performance and returns deduction"
        breadcrumbs={[
          { label: 'Reports', to: '/admin/reports' },
          { label: 'Sales Reports' }
        ]}
        actions={
          <button className="flex items-center space-x-1.5 px-3 py-2 bg-stone-900 hover:bg-stone-800 text-stone-100 rounded-lg text-xs font-medium transition-colors">
            <Download className="w-3.5 h-3.5" />
            <span>Export Financial Ledger (Excel)</span>
          </button>
        }
      />

      <div className="bg-white border border-stone-200 rounded-xl shadow-xs overflow-hidden">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-stone-50 text-stone-500 font-semibold border-b border-stone-200">
              <th className="p-3 pl-5">Billing Month</th>
              <th className="p-3">Order Volume</th>
              <th className="p-3">Gross Turn Over</th>
              <th className="p-3">Returns / Refunds</th>
              <th className="p-3">Net Realized Revenue</th>
              <th className="p-3 pr-5 text-right">Precious GST (3%)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {monthlySales.map((m) => (
              <tr key={m.month} className="hover:bg-amber-50/20">
                <td className="p-3 pl-5 font-semibold text-stone-900">{m.month}</td>
                <td className="p-3 font-mono">{m.orders} orders</td>
                <td className="p-3 font-mono text-stone-800">₹{m.grossSales.toLocaleString('en-IN')}</td>
                <td className="p-3 font-mono text-rose-600">-₹{m.returns.toLocaleString('en-IN')}</td>
                <td className="p-3 font-mono font-bold text-emerald-700">₹{m.netRevenue.toLocaleString('en-IN')}</td>
                <td className="p-3 pr-5 text-right font-mono font-medium text-stone-700">
                  ₹{m.gstCollected.toLocaleString('en-IN')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesReport;
