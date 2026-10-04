import React from 'react';
import { Download, Package, Sparkles } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const productPerformance = [
  { sku: 'JW-RNG-041', name: 'Royal Solitaire 1.5ct Diamond Ring', category: 'Rings', unitsSold: 64, revenue: 9280000, margin: '32%', returnRate: '1.2%' },
  { sku: 'JW-NCK-112', name: 'Traditional Temple Lakshmi Choker', category: 'Necklaces', unitsSold: 42, revenue: 11970000, margin: '24%', returnRate: '0.8%' },
  { sku: 'JW-BNG-089', name: 'Floral Rose Gold Diamond Bangle', category: 'Bangles', unitsSold: 58, revenue: 4872000, margin: '29%', returnRate: '1.8%' },
  { sku: 'JW-ANK-003', name: 'Celestial 925 Sterling Silver Anklet', category: 'Silver', unitsSold: 320, revenue: 2080000, margin: '48%', returnRate: '2.5%' }
];

const ProductReport = () => {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Product Merchandising & Margin Intelligence"
        subtitle="Analyze SKU turnover velocity, profit margins on making charges, and product return rates"
        breadcrumbs={[
          { label: 'Reports', to: '/admin/reports' },
          { label: 'Product Reports' }
        ]}
        actions={
          <button className="flex items-center space-x-1.5 px-3 py-2 bg-stone-900 hover:bg-stone-800 text-stone-100 rounded-lg text-xs font-medium transition-colors">
            <Download className="w-3.5 h-3.5" />
            <span>Export Merchandising Sheet</span>
          </button>
        }
      />

      <div className="bg-white border border-stone-200 rounded-xl shadow-xs overflow-hidden">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-stone-50 text-stone-500 font-semibold border-b border-stone-200">
              <th className="p-3 pl-5">Product SKU & Title</th>
              <th className="p-3">Department</th>
              <th className="p-3">Units Sold</th>
              <th className="p-3">Gross Realized</th>
              <th className="p-3">Gross Margin (%)</th>
              <th className="p-3 pr-5 text-right">Return Rate</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {productPerformance.map((p) => (
              <tr key={p.sku} className="hover:bg-amber-50/20">
                <td className="p-3 pl-5">
                  <span className="font-semibold text-stone-900 block">{p.name}</span>
                  <span className="font-mono text-[10px] text-stone-400">{p.sku}</span>
                </td>
                <td className="p-3 text-stone-700">{p.category}</td>
                <td className="p-3 font-mono font-bold">{p.unitsSold} pcs</td>
                <td className="p-3 font-mono font-bold text-stone-900">₹{p.revenue.toLocaleString('en-IN')}</td>
                <td className="p-3 font-mono text-emerald-700 font-bold">{p.margin}</td>
                <td className="p-3 pr-5 text-right font-mono text-stone-600">{p.returnRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductReport;
