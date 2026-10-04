import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, TrendingUp, Package, Users, Download, ArrowRight, IndianRupee, PieChart } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const reportCards = [
  {
    title: 'Financial & Sales Intelligence',
    description: 'Revenue trajectories, average order value, payment gateway split, and GST tax collections.',
    to: '/admin/reports/sales',
    icon: IndianRupee,
    color: 'bg-emerald-50 text-emerald-700'
  },
  {
    title: 'Jewelry Product & SKU Merchandising',
    description: 'Best-selling gold & diamond SKUs, dead stock velocity, return rates and karigar making charge margins.',
    to: '/admin/reports/products',
    icon: Package,
    color: 'bg-amber-50 text-amber-700'
  },
  {
    title: 'Client Acquisition & Loyalty Analytics',
    description: 'Customer lifetime value (LTV), repeat purchase velocity, cohort analysis and VIP diamond retention.',
    to: '/admin/reports/customers',
    icon: Users,
    color: 'bg-blue-50 text-blue-700'
  }
];

const ReportsHub = () => {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Enterprise Business Intelligence & Reports"
        subtitle="Audited financial summaries, merchandise performance and customer cohort analytics"
        breadcrumbs={[{ label: 'Reports' }]}
        actions={
          <button className="flex items-center space-x-1.5 px-3 py-2 bg-stone-900 hover:bg-stone-800 text-stone-100 rounded-lg text-xs font-medium transition-colors">
            <Download className="w-3.5 h-3.5" />
            <span>Download Annual Dossier</span>
          </button>
        }
      />

      {/* High-level ERP metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        <div className="bg-white border border-stone-200 rounded-xl p-4">
          <span className="text-stone-400 block uppercase font-semibold text-[10px]">FY 2026-27 YTD Revenue</span>
          <h3 className="text-xl font-bold font-mono text-stone-900 mt-1">₹6.42 Crore</h3>
          <span className="text-emerald-700 font-semibold text-[10px]">+24.8% vs last FY</span>
        </div>
        <div className="bg-white border border-stone-200 rounded-xl p-4">
          <span className="text-stone-400 block uppercase font-semibold text-[10px]">Gross Profit Margin</span>
          <h3 className="text-xl font-bold font-mono text-stone-900 mt-1">28.4%</h3>
          <span className="text-stone-500 text-[10px]">Net of bullion base metal</span>
        </div>
        <div className="bg-white border border-stone-200 rounded-xl p-4">
          <span className="text-stone-400 block uppercase font-semibold text-[10px]">Average Order Value</span>
          <h3 className="text-xl font-bold font-mono text-stone-900 mt-1">₹58,400</h3>
          <span className="text-stone-500 text-[10px]">Precious jewelry average</span>
        </div>
        <div className="bg-white border border-stone-200 rounded-xl p-4">
          <span className="text-stone-400 block uppercase font-semibold text-[10px]">Repeat Client Rate</span>
          <h3 className="text-xl font-bold font-mono text-stone-900 mt-1">42.6%</h3>
          <span className="text-emerald-700 font-semibold text-[10px]">High retention VIP club</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {reportCards.map((r, idx) => {
          const Icon = r.icon;
          return (
            <Link
              key={idx}
              to={r.to}
              className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs hover:border-amber-400 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className={`w-10 h-10 rounded-xl ${r.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                  {r.title}
                </h3>
                <p className="text-xs text-stone-500 mt-1.5 leading-relaxed">{r.description}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-amber-700">
                <span>Open Detailed Dossier</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ReportsHub;
