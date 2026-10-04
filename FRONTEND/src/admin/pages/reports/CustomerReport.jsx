import React from 'react';
import { Download, Users } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const cohortData = [
  { cohort: 'Q3 2026', newClients: 420, repeatPurchases: 180, repeatRate: '42.8%', avgCustomerSpend: 78000, topCity: 'Mumbai' },
  { cohort: 'Q2 2026', newClients: 380, repeatPurchases: 155, repeatRate: '40.7%', avgCustomerSpend: 69000, topCity: 'Bangalore' },
  { cohort: 'Q1 2026', newClients: 310, repeatPurchases: 130, repeatRate: '41.9%', avgCustomerSpend: 62000, topCity: 'New Delhi' }
];

const CustomerReport = () => {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Client Acquisition & Lifetime Value (LTV) Report"
        subtitle="Evaluate client retention rates, geographical purchasing power and repeat order cycles"
        breadcrumbs={[
          { label: 'Reports', to: '/admin/reports' },
          { label: 'Customer Reports' }
        ]}
        actions={
          <button className="flex items-center space-x-1.5 px-3 py-2 bg-stone-900 hover:bg-stone-800 text-stone-100 rounded-lg text-xs font-medium transition-colors">
            <Download className="w-3.5 h-3.5" />
            <span>Export Client Cohorts</span>
          </button>
        }
      />

      <div className="bg-white border border-stone-200 rounded-xl shadow-xs overflow-hidden">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-stone-50 text-stone-500 font-semibold border-b border-stone-200">
              <th className="p-3 pl-5">Acquisition Cohort</th>
              <th className="p-3">New High-Net-Worth Clients</th>
              <th className="p-3">Repeat Orders</th>
              <th className="p-3">Retention Rate</th>
              <th className="p-3">Average Spend (LTV)</th>
              <th className="p-3 pr-5 text-right">Top Geographic Hub</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {cohortData.map((c) => (
              <tr key={c.cohort} className="hover:bg-amber-50/20">
                <td className="p-3 pl-5 font-semibold text-stone-900">{c.cohort}</td>
                <td className="p-3 font-mono font-bold text-stone-800">{c.newClients} clients</td>
                <td className="p-3 font-mono text-stone-700">{c.repeatPurchases} buyers</td>
                <td className="p-3 font-mono font-bold text-emerald-700">{c.repeatRate}</td>
                <td className="p-3 font-mono font-bold text-stone-900">₹{c.avgCustomerSpend.toLocaleString('en-IN')}</td>
                <td className="p-3 pr-5 text-right font-medium text-stone-700">{c.topCity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerReport;
