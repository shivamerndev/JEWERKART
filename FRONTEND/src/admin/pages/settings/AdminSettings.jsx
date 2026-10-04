import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, CreditCard, Truck, Bell, Shield, ArrowRight, Database, Coins } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const settingsModules = [
  {
    title: 'General & Store Identity',
    description: 'Enterprise brand name, GSTIN registration, registered jewellery hallmark license & currency.',
    to: '/admin/settings/general',
    icon: Settings,
    color: 'bg-amber-50 text-amber-700'
  },
  {
    title: 'Payment Gateways & Bullion Invoicing',
    description: 'Razorpay keys, UPI configurations, international cards, and automated GST tax invoices.',
    to: '/admin/settings/payment',
    icon: CreditCard,
    color: 'bg-blue-50 text-blue-700'
  },
  {
    title: 'Shipping Zones & Transit Insurance',
    description: 'BlueDart/Sequel API credentials, free shipping order cutoffs, and transit damage insurance limits.',
    to: '/admin/settings/shipping',
    icon: Truck,
    color: 'bg-emerald-50 text-emerald-700'
  },
  {
    title: 'Notification Engine (WhatsApp / SMS / Email)',
    description: 'Automated order confirmations, OTP delivery codes, and abandoned cart reminder triggers.',
    to: '/admin/settings/notifications',
    icon: Bell,
    color: 'bg-indigo-50 text-indigo-700'
  }
];

const AdminSettings = () => {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="ERP System Settings & Global Configurations"
        subtitle="Manage store identity, payment processors, courier APIs, and enterprise notification hooks"
        breadcrumbs={[{ label: 'Settings' }]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {settingsModules.map((m, idx) => {
          const Icon = m.icon;
          return (
            <Link
              key={idx}
              to={m.to}
              className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs hover:border-amber-400 hover:shadow-md transition-all group flex items-start space-x-4"
            >
              <div className={`p-3 rounded-xl ${m.color} shrink-0`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                    {m.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-amber-600 transition-transform group-hover:translate-x-1" />
                </div>
                <p className="text-xs text-stone-500 mt-1 leading-relaxed">{m.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AdminSettings;
