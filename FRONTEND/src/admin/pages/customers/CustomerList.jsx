import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Download, Eye, Users, ShieldCheck, Mail, Phone } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const initialCustomers = [
  {
    id: 'cust-101',
    name: 'Dr. Sunita Rao',
    email: 'sunita.rao@apollo.com',
    phone: '+91 98450 11223',
    city: 'Bangalore',
    ordersCount: 6,
    totalSpent: 340000,
    tier: 'Diamond VIP',
    kycVerified: true,
    lastOrder: '02 Oct 2026'
  },
  {
    id: 'cust-102',
    name: 'Kavita Chawla',
    email: 'kavita.c@gmail.com',
    phone: '+91 98200 44556',
    city: 'Mumbai',
    ordersCount: 3,
    totalSpent: 118000,
    tier: 'Gold Club',
    kycVerified: true,
    lastOrder: '28 Sep 2026'
  },
  {
    id: 'cust-103',
    name: 'Amitabh Deshmukh',
    email: 'amitabh.d@tcs.com',
    phone: '+91 97640 88990',
    city: 'Pune',
    ordersCount: 2,
    totalSpent: 74000,
    tier: 'Silver',
    kycVerified: false,
    lastOrder: '15 Sep 2026'
  },
  {
    id: 'cust-104',
    name: 'Priyanka Sen',
    email: 'priyanka.sen@wb.gov.in',
    phone: '+91 98310 99887',
    city: 'Kolkata',
    ordersCount: 4,
    totalSpent: 195000,
    tier: 'Gold Club',
    kycVerified: true,
    lastOrder: '24 Sep 2026'
  },
  {
    id: 'cust-105',
    name: 'Rohan Singhania',
    email: 'rohan@singhaniaexports.com',
    phone: '+91 98101 22334',
    city: 'New Delhi',
    ordersCount: 8,
    totalSpent: 620000,
    tier: 'Diamond VIP',
    kycVerified: true,
    lastOrder: '04 Oct 2026'
  }
];

const CustomerList = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [search, setSearch] = useState('');
  const [tierFilter, setTierFilter] = useState('All');

  const filtered = customers.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.city.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search);
    const matchesTier = tierFilter === 'All' || c.tier === tierFilter;
    return matchesSearch && matchesTier;
  });

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Client CRM & VIP Directory"
        subtitle="Manage customer relationships, bullion KYC compliance and purchase history"
        breadcrumbs={[{ label: 'Customers' }]}
        actions={
          <button className="flex items-center space-x-1.5 px-3 py-2 bg-stone-900 hover:bg-stone-800 text-stone-100 rounded-lg text-xs font-medium transition-colors">
            <Download className="w-3.5 h-3.5" />
            <span>Export Client Data</span>
          </button>
        }
      />

      <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-xs flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Search by client name, email, phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:border-amber-500"
          />
        </div>

        <select
          value={tierFilter}
          onChange={(e) => setTierFilter(e.target.value)}
          className="text-xs bg-stone-50 border border-stone-200 rounded-lg px-3 py-1.5 focus:outline-hidden focus:border-amber-500 text-stone-700"
        >
          <option value="All">All Loyalty Tiers</option>
          <option value="Diamond VIP">Diamond VIP (LTV &gt; ₹3L)</option>
          <option value="Gold Club">Gold Club (LTV &gt; ₹1L)</option>
          <option value="Silver">Silver</option>
        </select>
      </div>

      <div className="bg-white border border-stone-200 rounded-xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-stone-50 text-stone-500 font-semibold border-b border-stone-200">
                <th className="p-3 pl-5">Client Name</th>
                <th className="p-3">Contact Details</th>
                <th className="p-3">City</th>
                <th className="p-3">Loyalty Tier</th>
                <th className="p-3">Orders</th>
                <th className="p-3">Lifetime Value</th>
                <th className="p-3">Bullion KYC</th>
                <th className="p-3 pr-5 text-right">360 View</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filtered.map((c) => (
                <tr key={c.id} className="hover:bg-amber-50/20">
                  <td className="p-3 pl-5">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-full bg-stone-900 text-amber-300 font-bold flex items-center justify-center text-xs">
                        {c.name.charAt(0)}
                      </div>
                      <Link
                        to={`/admin/customers/${c.id}`}
                        className="font-semibold text-stone-900 hover:text-amber-700"
                      >
                        {c.name}
                      </Link>
                    </div>
                  </td>
                  <td className="p-3">
                    <span className="text-stone-700 block">{c.email}</span>
                    <span className="text-[10px] text-stone-400 font-mono">{c.phone}</span>
                  </td>
                  <td className="p-3 font-medium text-stone-700">{c.city}</td>
                  <td className="p-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                        c.tier === 'Diamond VIP'
                          ? 'bg-amber-100 text-amber-900 border border-amber-300'
                          : c.tier === 'Gold Club'
                          ? 'bg-amber-50 text-amber-800'
                          : 'bg-stone-100 text-stone-700'
                      }`}
                    >
                      {c.tier}
                    </span>
                  </td>
                  <td className="p-3 font-mono font-medium">{c.ordersCount} orders</td>
                  <td className="p-3 font-mono font-bold text-stone-900">
                    ₹{c.totalSpent.toLocaleString('en-IN')}
                  </td>
                  <td className="p-3">
                    {c.kycVerified ? (
                      <span className="inline-flex items-center text-emerald-700 text-[10px] font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5 mr-1" /> PAN Verified
                      </span>
                    ) : (
                      <span className="text-stone-400 text-[10px]">Unverified</span>
                    )}
                  </td>
                  <td className="p-3 pr-5 text-right">
                    <Link
                      to={`/admin/customers/${c.id}`}
                      className="p-1 text-stone-400 hover:text-amber-700 inline-block"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>
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

export default CustomerList;
