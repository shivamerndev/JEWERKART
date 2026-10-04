import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Filter,
  Download,
  Eye,
  ShoppingBag,
  Clock,
  Package,
  Truck,
  CheckCircle2,
  XCircle,
  Printer
} from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const mockOrders = [
  {
    id: 'JK-10492',
    date: '04 Oct 2026, 04:30 PM',
    customer: 'Ananya Sharma',
    phone: '+91 98201 45892',
    city: 'Mumbai',
    items: '22K Gold Mangalsutra (8.4g)',
    quantity: 1,
    amount: 74200,
    paymentMethod: 'Prepaid (Razorpay UPI)',
    paymentStatus: 'Paid',
    fulfillment: 'Processing',
    awb: 'BLUEDART-8492019'
  },
  {
    id: 'JK-10491',
    date: '04 Oct 2026, 03:45 PM',
    customer: 'Vikramaditya Roy',
    phone: '+91 94330 19283',
    city: 'Kolkata',
    items: 'Solitaire Diamond Ring (1.2ct)',
    quantity: 1,
    amount: 145000,
    paymentMethod: 'Prepaid (HDFC Credit Card)',
    paymentStatus: 'Paid',
    fulfillment: 'Pending',
    awb: 'Pending Vault Verification'
  },
  {
    id: 'JK-10490',
    date: '04 Oct 2026, 02:15 PM',
    customer: 'Pooja Hegde',
    phone: '+91 98840 91823',
    city: 'Hyderabad',
    items: 'Rose Gold Floral Pendant (18K)',
    quantity: 1,
    amount: 28500,
    paymentMethod: 'Cash On Delivery (COD)',
    paymentStatus: 'COD Pending',
    fulfillment: 'Shipped',
    awb: 'DELHIVERY-9948271'
  },
  {
    id: 'JK-10489',
    date: '04 Oct 2026, 11:20 AM',
    customer: 'Rajesh Mehra',
    phone: '+91 98110 54321',
    city: 'Delhi NCR',
    items: '925 Silver Men Cufflinks (Pair)',
    quantity: 2,
    amount: 6400,
    paymentMethod: 'Prepaid (Paytm UPI)',
    paymentStatus: 'Paid',
    fulfillment: 'Delivered',
    awb: 'BLUEDART-8491823'
  },
  {
    id: 'JK-10488',
    date: '04 Oct 2026, 09:10 AM',
    customer: 'Simran Kaur',
    phone: '+91 98765 43210',
    city: 'Chandigarh',
    items: 'Emerald Drop Earrings (14K)',
    quantity: 1,
    amount: 52000,
    paymentMethod: 'Prepaid (Net Banking)',
    paymentStatus: 'Refunded',
    fulfillment: 'Cancelled',
    awb: 'Cancelled by Customer'
  }
];

const OrderList = () => {
  const [orders, setOrders] = useState(mockOrders);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filtered = orders.filter((o) => {
    const matchesSearch =
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.customer.toLowerCase().includes(search.toLowerCase()) ||
      o.phone.includes(search);
    const matchesStatus = statusFilter === 'All' || o.fulfillment === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Sales Orders & Fulfillment"
        subtitle="Manage customer orders, hallmarking dispatch manifests and BlueDart / Delhivery logistics"
        breadcrumbs={[{ label: 'Orders' }]}
        actions={
          <>
            <button className="flex items-center space-x-1.5 px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-medium transition-colors">
              <Printer className="w-3.5 h-3.5" />
              <span>Print Picklists</span>
            </button>
            <button className="flex items-center space-x-1.5 px-3 py-2 bg-stone-900 hover:bg-stone-800 text-stone-100 rounded-lg text-xs font-medium transition-colors">
              <Download className="w-3.5 h-3.5" />
              <span>Export Orders</span>
            </button>
          </>
        }
      />

      {/* Tabs */}
      <div className="flex border-b border-stone-200 text-xs font-medium space-x-4 overflow-x-auto">
        {['All', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'].map((tab) => (
          <button
            key={tab}
            onClick={() => setStatusFilter(tab)}
            className={`pb-3 px-1 border-b-2 font-semibold transition-colors whitespace-nowrap ${
              statusFilter === tab
                ? 'border-amber-500 text-stone-900'
                : 'border-transparent text-stone-400 hover:text-stone-700'
            }`}
          >
            {tab} Orders
          </button>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-xs flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Search by Order ID, name or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:border-amber-500"
          />
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white border border-stone-200 rounded-xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-stone-50 text-stone-500 font-semibold border-b border-stone-200">
                <th className="p-3 pl-5">Order ID & Date</th>
                <th className="p-3">Customer Info</th>
                <th className="p-3">Jewellery Items</th>
                <th className="p-3">Order Total</th>
                <th className="p-3">Payment</th>
                <th className="p-3">Fulfillment Status</th>
                <th className="p-3 pr-5 text-right">Inspect</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filtered.map((order) => (
                <tr key={order.id} className="hover:bg-amber-50/20 transition-colors">
                  <td className="p-3 pl-5">
                    <Link
                      to={`/admin/orders/${order.id}`}
                      className="font-mono font-bold text-amber-800 hover:underline block"
                    >
                      {order.id}
                    </Link>
                    <span className="text-[10px] text-stone-400">{order.date}</span>
                  </td>
                  <td className="p-3">
                    <span className="font-semibold text-stone-900 block">{order.customer}</span>
                    <span className="text-[10px] text-stone-400 font-mono">{order.city} • {order.phone}</span>
                  </td>
                  <td className="p-3">
                    <span className="text-stone-800 font-medium block truncate max-w-xs">{order.items}</span>
                    <span className="text-[10px] text-stone-400">{order.quantity} pc(s)</span>
                  </td>
                  <td className="p-3 font-mono font-bold text-stone-900">
                    ₹{order.amount.toLocaleString('en-IN')}
                  </td>
                  <td className="p-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                        order.paymentStatus === 'Paid'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : order.paymentStatus === 'Refunded'
                          ? 'bg-purple-50 text-purple-700 border border-purple-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}
                    >
                      {order.paymentStatus}
                    </span>
                    <span className="text-[10px] text-stone-400 block mt-0.5">{order.paymentMethod}</span>
                  </td>
                  <td className="p-3">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        order.fulfillment === 'Delivered'
                          ? 'bg-emerald-100 text-emerald-800'
                          : order.fulfillment === 'Shipped'
                          ? 'bg-sky-100 text-sky-800'
                          : order.fulfillment === 'Processing'
                          ? 'bg-indigo-100 text-indigo-800'
                          : order.fulfillment === 'Pending'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {order.fulfillment}
                    </span>
                  </td>
                  <td className="p-3 pr-5 text-right">
                    <Link
                      to={`/admin/orders/${order.id}`}
                      className="p-1.5 text-stone-400 hover:text-amber-800 rounded inline-block"
                      title="Inspect Order"
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

export default OrderList;
