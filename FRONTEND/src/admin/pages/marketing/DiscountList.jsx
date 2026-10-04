import React, { useState } from 'react';
import { BadgePercent, Plus, Edit, Trash2 } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const initialDiscounts = [
  {
    id: 'disc-1',
    name: 'Making Charge Festive Waiver',
    type: 'Making Charge Off',
    value: '50% off on Making Charges',
    appliedTo: 'All 22K Gold Necklaces',
    status: 'Active',
    dates: '01 Oct 2026 - 31 Oct 2026'
  },
  {
    id: 'disc-2',
    name: 'Solitaire Upgrade Bonus',
    type: 'Cart Level Discount',
    value: '₹10,000 Flat Off',
    appliedTo: 'Cart Value > ₹1,50,000',
    status: 'Active',
    dates: 'Ongoing'
  },
  {
    id: 'disc-3',
    name: 'Silver Stack Deal',
    type: 'Volume Tier',
    value: 'Buy 2 Get 1 Free',
    appliedTo: '925 Silver Anklets & Rings',
    status: 'Scheduled',
    dates: 'Starts 15 Oct 2026'
  }
];

const DiscountList = () => {
  const [discounts, setDiscounts] = useState(initialDiscounts);

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Automated Discounts & Markdown Rules"
        subtitle="Manage flash sales, making charge concessions, and volume deals"
        breadcrumbs={[{ label: 'Discounts' }]}
        actions={
          <button className="flex items-center space-x-1.5 px-3.5 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-semibold rounded-lg text-xs transition-colors shadow-xs">
            <Plus className="w-3.5 h-3.5" />
            <span>Create Discount Rule</span>
          </button>
        }
      />

      <div className="bg-white border border-stone-200 rounded-xl shadow-xs overflow-hidden">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-stone-50 text-stone-500 font-semibold border-b border-stone-200">
              <th className="p-3 pl-5">Promotion Rule Name</th>
              <th className="p-3">Discount Type</th>
              <th className="p-3">Concession Value</th>
              <th className="p-3">Catalog Scope</th>
              <th className="p-3">Schedule</th>
              <th className="p-3 pr-5 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {discounts.map((d) => (
              <tr key={d.id} className="hover:bg-amber-50/20">
                <td className="p-3 pl-5 font-semibold text-stone-900">{d.name}</td>
                <td className="p-3 text-stone-600">{d.type}</td>
                <td className="p-3 font-mono font-bold text-amber-900">{d.value}</td>
                <td className="p-3 text-stone-700">{d.appliedTo}</td>
                <td className="p-3 text-stone-500">{d.dates}</td>
                <td className="p-3 pr-5 text-right">
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full font-bold text-[10px] ${
                      d.status === 'Active'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-stone-100 text-stone-700'
                    }`}
                  >
                    {d.status}
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

export default DiscountList;
