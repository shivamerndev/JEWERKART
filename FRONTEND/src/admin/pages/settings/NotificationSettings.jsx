import React, { useState } from 'react';
import { Save, Bell, MessageSquare, Mail } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const NotificationSettings = () => {
  const [whatsappNotifications, setWhatsappNotifications] = useState(true);
  const [orderConfirmationSms, setOrderConfirmationSms] = useState(true);
  const [abandonedCartNudges, setAbandonedCartNudges] = useState(true);
  const [lowStockAdminAlerts, setLowStockAdminAlerts] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();
    alert('Notification settings saved.');
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Notification & Webhook Engine"
        subtitle="Manage WhatsApp business alerts, customer transactional SMS and vault admin notices"
        breadcrumbs={[
          { label: 'Settings', to: '/admin/settings' },
          { label: 'Notifications' }
        ]}
        actions={
          <button
            onClick={handleSave}
            className="flex items-center space-x-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-lg text-xs transition-colors shadow-xs"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save Preferences</span>
          </button>
        }
      />

      <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs max-w-2xl space-y-4 text-xs">
        <div className="flex items-center justify-between py-2 border-b border-stone-100">
          <div>
            <h4 className="font-bold text-stone-900">WhatsApp Business API Updates</h4>
            <p className="text-stone-400 text-[11px]">Send live shipment tracking & OTP via official WhatsApp handle</p>
          </div>
          <input
            type="checkbox"
            checked={whatsappNotifications}
            onChange={(e) => setWhatsappNotifications(e.target.checked)}
            className="rounded border-stone-300 text-amber-600 focus:ring-amber-500"
          />
        </div>

        <div className="flex items-center justify-between py-2 border-b border-stone-100">
          <div>
            <h4 className="font-bold text-stone-900">Transactional Order Confirmation SMS</h4>
            <p className="text-stone-400 text-[11px]">SMS alert on order placement with invoice download link</p>
          </div>
          <input
            type="checkbox"
            checked={orderConfirmationSms}
            onChange={(e) => setOrderConfirmationSms(e.target.checked)}
            className="rounded border-stone-300 text-amber-600 focus:ring-amber-500"
          />
        </div>

        <div className="flex items-center justify-between py-2 border-b border-stone-100">
          <div>
            <h4 className="font-bold text-stone-900">Abandoned Cart Recovery Nudges</h4>
            <p className="text-stone-400 text-[11px]">Automated message sent 2 hours after cart dropoff</p>
          </div>
          <input
            type="checkbox"
            checked={abandonedCartNudges}
            onChange={(e) => setAbandonedCartNudges(e.target.checked)}
            className="rounded border-stone-300 text-amber-600 focus:ring-amber-500"
          />
        </div>

        <div className="flex items-center justify-between py-2">
          <div>
            <h4 className="font-bold text-stone-900">Vault Low Stock Push Alerts</h4>
            <p className="text-stone-400 text-[11px]">Immediate email alert to operations desk when SKU drops below min threshold</p>
          </div>
          <input
            type="checkbox"
            checked={lowStockAdminAlerts}
            onChange={(e) => setLowStockAdminAlerts(e.target.checked)}
            className="rounded border-stone-300 text-amber-600 focus:ring-amber-500"
          />
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
