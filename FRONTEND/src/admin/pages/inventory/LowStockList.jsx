import React, { useState } from 'react';
import { AlertTriangle, Send, Phone, Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdminPageHeader from '../../components/AdminPageHeader';

const initialAlerts = [
  {
    sku: 'JW-DIA-RNG-009',
    name: 'Princess Cut Solitaire Engagement Ring',
    metal: '18K Yellow Gold',
    currentStock: 2,
    threshold: 6,
    deficit: 4,
    supplier: 'Surat Gem Works Ltd',
    supplierContact: '+91 98251 00293',
    leadTime: '5 Days'
  },
  {
    sku: 'JW-GLD-CHN-021',
    name: '22K Rope Chain (15.5g)',
    metal: '22K Gold (916)',
    currentStock: 1,
    threshold: 8,
    deficit: 7,
    supplier: 'MMTC PAMP Gold Bullion',
    supplierContact: '+91 11 4110 9988',
    leadTime: '3 Days'
  },
  {
    sku: 'JW-SLV-EAR-043',
    name: 'Zirconia Studs in 925 Silver',
    metal: '925 Sterling Silver',
    currentStock: 3,
    threshold: 15,
    deficit: 12,
    supplier: 'Jaipur Crafts Jewellers',
    supplierContact: '+91 141 289 1029',
    leadTime: '7 Days'
  }
];

const LowStockList = () => {
  const [alerts, setAlerts] = useState(initialAlerts);

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Critical Low Stock & Reorder Triggers"
        subtitle="Active inventory shortages requiring karigar work order or bullion replenishment"
        breadcrumbs={[
          { label: 'Inventory', to: '/admin/inventory' },
          { label: 'Low Stock' }
        ]}
        actions={
          <Link
            to="/admin/inventory"
            className="flex items-center space-x-1.5 px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-medium transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Full Inventory</span>
          </Link>
        }
      />

      <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 flex items-center space-x-3 text-xs text-rose-900">
        <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
        <div>
          <p className="font-bold">Attention Required: {alerts.length} Precious Metal SKUs Below Safe Stock</p>
          <p className="text-rose-700 mt-0.5">High risk of customer stockouts on bestselling catalog items. Issue bulk supplier POs immediately.</p>
        </div>
      </div>

      <div className="bg-white border border-stone-200 rounded-xl shadow-xs overflow-hidden">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-stone-50 text-stone-500 font-semibold border-b border-stone-200">
              <th className="p-3 pl-5">SKU & Item Name</th>
              <th className="p-3">Current Vault</th>
              <th className="p-3">Min Safe Threshold</th>
              <th className="p-3">Reorder Deficit</th>
              <th className="p-3">Primary Supplier / Karigar</th>
              <th className="p-3">Lead Time</th>
              <th className="p-3 pr-5 text-right">Procure Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {alerts.map((item) => (
              <tr key={item.sku} className="hover:bg-rose-50/20">
                <td className="p-3 pl-5">
                  <span className="font-semibold text-stone-900 block">{item.name}</span>
                  <span className="font-mono text-[10px] text-stone-400">{item.sku} • {item.metal}</span>
                </td>
                <td className="p-3 font-mono font-bold text-rose-600">{item.currentStock} pcs</td>
                <td className="p-3 font-mono text-stone-700">{item.threshold} pcs</td>
                <td className="p-3 font-mono font-bold text-amber-900">+{item.deficit} pcs needed</td>
                <td className="p-3">
                  <span className="font-medium text-stone-800 block">{item.supplier}</span>
                  <span className="text-[10px] text-stone-400 font-mono">{item.supplierContact}</span>
                </td>
                <td className="p-3 font-medium text-stone-600">{item.leadTime}</td>
                <td className="p-3 pr-5 text-right">
                  <button className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-lg text-[11px] transition-colors shadow-xs">
                    Issue PO
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LowStockList;
