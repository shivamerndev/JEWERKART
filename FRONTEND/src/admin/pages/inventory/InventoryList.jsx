import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Warehouse, AlertTriangle, Search, Filter, Plus, ArrowDownUp, Coins } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const initialInventory = [
  {
    sku: 'JW-RNG-041',
    name: 'Royal Solitaire 1.5ct Diamond Ring',
    metal: '18K White Gold',
    grossWeight: '4.82g',
    unitValue: 145000,
    stock: 8,
    reorderLevel: 3,
    vault: 'Mumbai Vault B-12',
    status: 'Healthy'
  },
  {
    sku: 'JW-NCK-112',
    name: 'Traditional Temple Lakshmi Choker',
    metal: '22K Yellow Gold',
    grossWeight: '38.20g',
    unitValue: 285000,
    stock: 4,
    reorderLevel: 2,
    vault: 'Mumbai Vault A-01',
    status: 'Healthy'
  },
  {
    sku: 'JW-DIA-RNG-009',
    name: 'Princess Cut Solitaire Engagement Ring',
    metal: '18K Yellow Gold',
    grossWeight: '3.90g',
    unitValue: 112000,
    stock: 2,
    reorderLevel: 6,
    vault: 'Delhi Vault D-05',
    status: 'Critical Low'
  },
  {
    sku: 'JW-GLD-CHN-021',
    name: '22K Rope Chain (15.5g)',
    metal: '22K Gold',
    grossWeight: '15.50g',
    unitValue: 118000,
    stock: 1,
    reorderLevel: 8,
    vault: 'Mumbai Vault A-08',
    status: 'Critical Low'
  },
  {
    sku: 'JW-ANK-003',
    name: 'Celestial 925 Sterling Silver Anklet',
    metal: '925 Silver',
    grossWeight: '12.00g',
    unitValue: 6500,
    stock: 45,
    reorderLevel: 15,
    vault: 'Jaipur Depot S-02',
    status: 'Healthy'
  }
];

const InventoryList = () => {
  const [items, setItems] = useState(initialInventory);
  const [search, setSearch] = useState('');

  const filtered = items.filter(
    (i) =>
      i.name.toLowerCase().includes(search.toLowerCase()) ||
      i.sku.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Vault Inventory & Supply Control"
        subtitle="Real-time precious metal weights, diamond carats, and secure warehouse distribution"
        breadcrumbs={[{ label: 'Inventory' }]}
        actions={
          <Link
            to="/admin/inventory/low-stock"
            className="flex items-center space-x-1.5 px-3.5 py-2 bg-rose-50 border border-rose-200 text-rose-700 font-semibold rounded-lg text-xs hover:bg-rose-100 transition-colors"
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Low Stock Reorders (7)</span>
          </Link>
        }
      />

      {/* Vault KPI Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        <div className="bg-white border border-stone-200 rounded-xl p-4">
          <span className="text-stone-400 block uppercase font-semibold text-[10px]">Total Bullion Valuation</span>
          <h3 className="text-xl font-bold font-mono text-stone-900 mt-1">₹1,84,50,000</h3>
          <span className="text-emerald-700 text-[10px] font-medium">+4.2% bullion market rise</span>
        </div>
        <div className="bg-white border border-stone-200 rounded-xl p-4">
          <span className="text-stone-400 block uppercase font-semibold text-[10px]">Vault Gold Mass</span>
          <h3 className="text-xl font-bold font-mono text-stone-900 mt-1">14.820 Kilograms</h3>
          <span className="text-stone-500 text-[10px]">BIS 916 & 750 Hallmarked</span>
        </div>
        <div className="bg-white border border-stone-200 rounded-xl p-4">
          <span className="text-stone-400 block uppercase font-semibold text-[10px]">Certified Diamonds</span>
          <h3 className="text-xl font-bold font-mono text-stone-900 mt-1">184.50 Carats</h3>
          <span className="text-stone-500 text-[10px]">IGI / GIA Registered</span>
        </div>
        <div className="bg-white border border-stone-200 rounded-xl p-4">
          <span className="text-stone-400 block uppercase font-semibold text-[10px]">Active SKUs in Vault</span>
          <h3 className="text-xl font-bold font-mono text-stone-900 mt-1">340 Unique Pieces</h3>
          <span className="text-rose-600 text-[10px] font-bold">7 SKUs below safe reorder</span>
        </div>
      </div>

      <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-xs flex items-center justify-between">
        <div className="relative w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Search SKU or item name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:border-amber-500"
          />
        </div>
      </div>

      <div className="bg-white border border-stone-200 rounded-xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-stone-50 text-stone-500 font-semibold border-b border-stone-200">
                <th className="p-3 pl-5">SKU & Description</th>
                <th className="p-3">Metal Purity</th>
                <th className="p-3">Gross Wt.</th>
                <th className="p-3">Unit Valuation</th>
                <th className="p-3">Available Stock</th>
                <th className="p-3">Vault Location</th>
                <th className="p-3 pr-5 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filtered.map((item) => (
                <tr key={item.sku} className="hover:bg-amber-50/20">
                  <td className="p-3 pl-5">
                    <span className="font-semibold text-stone-900 block">{item.name}</span>
                    <span className="font-mono text-[10px] text-stone-400">{item.sku}</span>
                  </td>
                  <td className="p-3 font-medium text-stone-700">{item.metal}</td>
                  <td className="p-3 font-mono text-stone-600">{item.grossWeight}</td>
                  <td className="p-3 font-mono font-bold text-stone-900">
                    ₹{item.unitValue.toLocaleString('en-IN')}
                  </td>
                  <td className="p-3">
                    <span className={`font-mono font-bold ${item.stock <= item.reorderLevel ? 'text-rose-600' : 'text-stone-800'}`}>
                      {item.stock} pcs
                    </span>
                    <span className="text-[10px] text-stone-400 block">Min: {item.reorderLevel}</span>
                  </td>
                  <td className="p-3 font-medium text-stone-600">{item.vault}</td>
                  <td className="p-3 pr-5 text-right">
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        item.status === 'Healthy'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventoryList;
