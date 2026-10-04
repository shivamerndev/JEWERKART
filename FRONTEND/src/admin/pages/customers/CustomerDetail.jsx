import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, ShieldCheck, ShoppingBag, Heart, Award } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const CustomerDetail = () => {
  const { id } = useParams();

  const customer = {
    id: id || 'cust-101',
    name: 'Dr. Sunita Rao',
    email: 'sunita.rao@apollo.com',
    phone: '+91 98450 11223',
    city: 'Bangalore',
    tier: 'Diamond VIP',
    panNumber: 'ABCDE1234F (Verified)',
    memberSince: '14 Jan 2024',
    totalSpent: '₹3,40,000',
    ordersCount: 6,
    avgOrderValue: '₹56,666',
    address: '402 Prestige Acropolis, Koramangala 3rd Block, Bangalore, Karnataka - 560034',
    recentOrders: [
      { id: 'JK-10492', date: '04 Oct 2026', items: '22K Gold Mangalsutra (8.4g)', amount: '₹74,200', status: 'Processing' },
      { id: 'JK-9820', date: '18 Aug 2026', items: 'Solitaire Stud Earrings (1.0ct)', amount: '₹1,25,000', status: 'Delivered' },
      { id: 'JK-8910', date: '02 May 2026', items: 'Floral Diamond Bangle (18K)', amount: '₹84,000', status: 'Delivered' }
    ]
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title={`Client 360: ${customer.name}`}
        subtitle={`VIP Member • KYC PAN Verified • ${customer.city}`}
        breadcrumbs={[
          { label: 'Customers', to: '/admin/customers' },
          { label: customer.name }
        ]}
        actions={
          <Link
            to="/admin/customers"
            className="flex items-center space-x-1.5 px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-medium transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Directory</span>
          </Link>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-xs">
        {/* Client KPI & Profile Info */}
        <div className="space-y-6">
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs space-y-4">
            <div className="flex items-center space-x-3 pb-3 border-b border-stone-100">
              <div className="w-12 h-12 rounded-full bg-stone-900 text-amber-300 font-bold text-lg flex items-center justify-center">
                {customer.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-sm font-bold text-stone-900">{customer.name}</h3>
                <span className="px-2 py-0.5 bg-amber-100 text-amber-900 rounded font-semibold text-[10px] inline-block mt-0.5">
                  {customer.tier}
                </span>
              </div>
            </div>

            <div className="space-y-2 text-stone-600">
              <p className="flex items-center"><Mail className="w-4 h-4 mr-2 text-stone-400" /> {customer.email}</p>
              <p className="flex items-center"><Phone className="w-4 h-4 mr-2 text-stone-400" /> {customer.phone}</p>
              <p className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-stone-400" /> {customer.city}</p>
              <p className="flex items-center text-emerald-700 font-semibold">
                <ShieldCheck className="w-4 h-4 mr-2" /> PAN: {customer.panNumber}
              </p>
            </div>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs space-y-3">
            <h4 className="text-xs font-bold uppercase text-stone-500">Commercial Metrics</h4>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-stone-50 rounded-lg">
                <span className="text-[10px] text-stone-400 block">Lifetime Spend</span>
                <span className="text-sm font-bold text-stone-900 font-mono">{customer.totalSpent}</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-lg">
                <span className="text-[10px] text-stone-400 block">Orders</span>
                <span className="text-sm font-bold text-stone-900 font-mono">{customer.ordersCount}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Order History */}
        <div className="lg:col-span-2 bg-white border border-stone-200 rounded-xl p-5 shadow-xs">
          <h3 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-3 flex items-center justify-between">
            <span>Customer Purchase History</span>
            <span className="text-stone-400 font-mono text-[11px]">{customer.recentOrders.length} Completed Orders</span>
          </h3>

          <div className="divide-y divide-stone-100 mt-3">
            {customer.recentOrders.map((ord) => (
              <div key={ord.id} className="py-3 flex items-center justify-between">
                <div>
                  <Link to={`/admin/orders/${ord.id}`} className="font-mono font-bold text-amber-800 hover:underline">
                    {ord.id}
                  </Link>
                  <p className="text-stone-700 font-medium mt-0.5">{ord.items}</p>
                  <p className="text-[10px] text-stone-400">{ord.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono font-bold text-stone-900">{ord.amount}</p>
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full font-bold text-[10px] inline-block mt-0.5">
                    {ord.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetail;
