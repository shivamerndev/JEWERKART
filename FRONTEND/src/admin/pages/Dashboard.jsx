import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  TrendingDown,
  ShoppingBag,
  IndianRupee,
  Package,
  Users,
  AlertTriangle,
  RotateCcw,
  CreditCard,
  ShoppingCart,
  Clock,
  Truck,
  CheckCircle2,
  XCircle,
  ArrowUpRight,
  Filter,
  Download,
  Calendar,
  Layers,
  MapPin,
  Sparkles,
  RefreshCw,
  Coins
} from 'lucide-react';
import KpiCard from '../components/KpiCard';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('today');

  // ERP Metrics Data
  const orderFulfillmentPipeline = [
    { label: "Today's Orders", count: 48, amount: "₹4,82,500", icon: ShoppingBag, color: "text-blue-600 bg-blue-50" },
    { label: "Pending Verification", count: 12, amount: "₹1,24,000", icon: Clock, color: "text-amber-600 bg-amber-50" },
    { label: "Processing & Hallmarking", count: 18, amount: "₹2,10,500", icon: Package, color: "text-indigo-600 bg-indigo-50" },
    { label: "Shipped / In Transit", count: 11, amount: "₹1,02,000", icon: Truck, color: "text-sky-600 bg-sky-50" },
    { label: "Delivered Today", count: 7, amount: "₹46,000", icon: CheckCircle2, color: "text-emerald-600 bg-emerald-50" },
    { label: "Cancelled / RTO", count: 2, amount: "₹18,500", icon: XCircle, color: "text-rose-600 bg-rose-50" },
  ];

  const recentOrders = [
    { id: 'JK-10492', customer: 'Ananya Sharma', items: '22K Gold Mangalsutra (8.4g)', amount: '₹74,200', status: 'Processing', time: '12 min ago' },
    { id: 'JK-10491', customer: 'Vikramaditya Roy', items: 'Solitaire Diamond Ring (1.2ct)', amount: '₹1,45,000', status: 'Pending', time: '35 min ago' },
    { id: 'JK-10490', customer: 'Pooja Hegde', items: 'Rose Gold Floral Pendant (18K)', amount: '₹28,500', status: 'Shipped', time: '1 hour ago' },
    { id: 'JK-10489', customer: 'Rajesh Mehra', items: '925 Silver Men Cufflinks', amount: '₹6,400', status: 'Delivered', time: '2 hours ago' },
    { id: 'JK-10488', customer: 'Simran Kaur', items: 'Emerald Drop Earrings (14K)', amount: '₹52,000', status: 'Cancelled', time: '4 hours ago' },
  ];

  const topProducts = [
    { name: 'Royal Solitaire 1.5ct Diamond Ring', sku: 'JW-RNG-041', purity: '18K White Gold', sold: 34, revenue: '₹48,20,000', stock: 8 },
    { name: 'Traditional Temple Lakshmi Choker', sku: 'JW-NCK-112', purity: '22K Yellow Gold (38g)', sold: 21, revenue: '₹32,55,000', stock: 5 },
    { name: 'Floral Rose Gold Diamond Bangle', sku: 'JW-BNG-089', purity: '18K Rose Gold', sold: 29, revenue: '₹24,36,000', stock: 12 },
    { name: 'Celestial 925 Sterling Silver Anklet', sku: 'JW-ANK-003', purity: '925 Hallmarked Silver', sold: 88, revenue: '₹5,72,000', stock: 45 },
  ];

  const lowStockAlerts = [
    { sku: 'JW-DIA-RNG-009', name: 'Princess Cut Solitaire Engagement Ring', stock: 2, minThreshold: 6, supplier: 'Surat Gem Works' },
    { sku: 'JW-GLD-CHN-021', name: '22K Rope Chain (15.5g)', stock: 1, minThreshold: 8, supplier: 'MMTC PAMP Hub' },
    { sku: 'JW-SLV-EAR-043', name: 'Zirconia Studs in 925 Silver', stock: 3, minThreshold: 15, supplier: 'Jaipur Crafts Co' },
  ];

  const recentCustomers = [
    { name: 'Dr. Sunita Rao', email: 'sunita.rao@apollo.com', orders: 6, ltv: '₹3,40,000', tier: 'Diamond VIP', city: 'Bangalore' },
    { name: 'Kavita Chawla', email: 'kavita.c@gmail.com', orders: 3, ltv: '₹1,18,000', tier: 'Gold Club', city: 'Mumbai' },
    { name: 'Amitabh Deshmukh', email: 'amitabh.d@tcs.com', orders: 1, ltv: '₹74,000', tier: 'Silver', city: 'Pune' },
  ];

  return (
    <div className="space-y-6">
      {/* Top Header & Range Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold font-serif text-stone-900 tracking-tight">Executive ERP Console</h1>
            <span className="px-2 py-0.5 text-[11px] font-semibold bg-amber-100 text-amber-800 rounded-md border border-amber-200">
              Live Operations
            </span>
          </div>
          <p className="text-xs text-stone-500 mt-0.5">
            Real-time jewellery catalog performance, inventory valuation & logistics pipeline
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="bg-stone-100 p-1 rounded-lg flex items-center text-xs">
            {['today', '7d', '30d', 'year'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1 rounded-md capitalize font-medium transition-colors ${
                  timeRange === range
                    ? 'bg-white text-stone-900 shadow-xs font-semibold'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                {range === '7d' ? 'Past 7 Days' : range === '30d' ? '30 Days' : range}
              </button>
            ))}
          </div>

          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 text-stone-100 hover:bg-stone-800 rounded-lg text-xs font-medium transition-colors shadow-xs">
            <Download className="w-3.5 h-3.5" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Primary KPI Ribbon */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          title="Today's Gross Sales"
          value="₹4,82,500"
          change="+18.4%"
          changeType="positive"
          period="vs yesterday"
          icon={IndianRupee}
          iconColor="text-emerald-700 bg-emerald-50 border-emerald-200"
        />
        <KpiCard
          title="Total Orders Count"
          value="48 Orders"
          change="+12.0%"
          changeType="positive"
          period="vs avg daily"
          icon={ShoppingBag}
          iconColor="text-blue-700 bg-blue-50 border-blue-200"
        />
        <KpiCard
          title="Average Order Value (AOV)"
          value="₹10,052"
          change="+5.8%"
          changeType="positive"
          period="high-ticket bridal"
          icon={TrendingUp}
          iconColor="text-amber-700 bg-amber-50 border-amber-200"
        />
        <KpiCard
          title="Checkout Conversion Rate"
          value="3.42%"
          change="-0.3%"
          changeType="negative"
          period="traffic spike"
          icon={TrendingDown}
          iconColor="text-rose-700 bg-rose-50 border-rose-200"
        />
      </div>

      {/* Secondary Operational KPIs: Refunds, Failed Payments, Abandoned Carts, Inventory Value */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-stone-200 rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase text-stone-500">Refunds Processed</p>
            <h4 className="text-lg font-bold text-stone-900 mt-0.5">₹24,500</h4>
            <span className="text-[11px] text-stone-400">2 claims under verification</span>
          </div>
          <div className="p-2.5 bg-rose-50 border border-rose-100 text-rose-600 rounded-lg">
            <RotateCcw className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white border border-stone-200 rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase text-stone-500">Failed Payments</p>
            <h4 className="text-lg font-bold text-stone-900 mt-0.5">3 Transactions</h4>
            <span className="text-[11px] text-rose-500 font-medium">Gateway retry sent</span>
          </div>
          <div className="p-2.5 bg-amber-50 border border-amber-100 text-amber-600 rounded-lg">
            <CreditCard className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white border border-stone-200 rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase text-stone-500">Abandoned Carts</p>
            <h4 className="text-lg font-bold text-stone-900 mt-0.5">14 Carts (₹3.2L)</h4>
            <span className="text-[11px] text-stone-400">WhatsApp recovery active</span>
          </div>
          <div className="p-2.5 bg-stone-50 border border-stone-200 text-stone-600 rounded-lg">
            <ShoppingCart className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white border border-stone-200 rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase text-stone-500">Total Vault Inventory</p>
            <h4 className="text-lg font-bold text-stone-900 mt-0.5">₹1.84 Crore</h4>
            <span className="text-[11px] text-emerald-600 font-medium">1,420 Certified Items</span>
          </div>
          <div className="p-2.5 bg-amber-50 border border-amber-200 text-amber-700 rounded-lg">
            <Coins className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Order Fulfillment Status Pipeline (Today's Orders breakdown) */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-bold text-stone-900">Today's Fulfillment Pipeline</h2>
            <p className="text-xs text-stone-500">Live order progression from validation to doorstep delivery</p>
          </div>
          <Link to="/admin/orders" className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center">
            <span>Manage Orders</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {orderFulfillmentPipeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="p-3.5 rounded-lg border border-stone-100 bg-stone-50/60 hover:bg-stone-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className={`p-1.5 rounded-md ${item.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-lg font-bold text-stone-900">{item.count}</span>
                </div>
                <p className="text-xs font-semibold text-stone-700 mt-2 truncate">{item.label}</p>
                <p className="text-[11px] text-stone-400 font-mono mt-0.5">{item.amount}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Middle Grid: Recent Orders & Low Stock Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders (2 Columns) */}
        <div className="lg:col-span-2 bg-white border border-stone-200 rounded-xl shadow-xs overflow-hidden">
          <div className="p-5 border-b border-stone-100 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-stone-900">Recent Customer Orders</h2>
              <p className="text-xs text-stone-500">Latest jewelry orders placed across web & mobile</p>
            </div>
            <Link to="/admin/orders" className="text-xs font-semibold text-amber-700 hover:text-amber-800">
              View All
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-stone-50 text-stone-500 font-semibold border-b border-stone-100">
                  <th className="p-3 pl-5">Order ID</th>
                  <th className="p-3">Customer</th>
                  <th className="p-3">Jewelry Item</th>
                  <th className="p-3">Total Amount</th>
                  <th className="p-3">Fulfillment</th>
                  <th className="p-3 pr-5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-amber-50/30 transition-colors">
                    <td className="p-3 pl-5 font-mono font-semibold text-amber-800">{order.id}</td>
                    <td className="p-3 font-medium text-stone-900">{order.customer}</td>
                    <td className="p-3 text-stone-600 truncate max-w-xs">{order.items}</td>
                    <td className="p-3 font-semibold text-stone-900 font-mono">{order.amount}</td>
                    <td className="p-3">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          order.status === 'Delivered'
                            ? 'bg-emerald-100 text-emerald-800'
                            : order.status === 'Shipped'
                            ? 'bg-sky-100 text-sky-800'
                            : order.status === 'Processing'
                            ? 'bg-indigo-100 text-indigo-800'
                            : order.status === 'Pending'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="p-3 pr-5 text-right">
                      <Link
                        to={`/admin/orders/${order.id}`}
                        className="text-stone-500 hover:text-amber-700 font-semibold"
                      >
                        Inspect
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Low Stock Watchlist (1 Column) */}
        <div className="bg-white border border-stone-200 rounded-xl shadow-xs p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <h2 className="text-base font-bold text-stone-900">Low Stock Watch</h2>
              </div>
              <Link to="/admin/inventory/low-stock" className="text-xs font-semibold text-rose-600 hover:underline">
                View 7 Alerts
              </Link>
            </div>
            <p className="text-xs text-stone-500 mt-2 mb-4">
              Vault inventory fallen below safety reorder threshold
            </p>

            <div className="space-y-3">
              {lowStockAlerts.map((item, idx) => (
                <div key={idx} className="p-3 rounded-lg border border-rose-100 bg-rose-50/40">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-rose-900">{item.sku}</span>
                    <span className="px-1.5 py-0.5 bg-rose-200 text-rose-900 rounded font-bold text-[10px]">
                      {item.stock} left (Min: {item.minThreshold})
                    </span>
                  </div>
                  <p className="text-xs font-medium text-stone-800 mt-1 line-clamp-1">{item.name}</p>
                  <p className="text-[10px] text-stone-500 mt-0.5">Supplier: {item.supplier}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-stone-100">
            <Link
              to="/admin/inventory/low-stock"
              className="w-full flex items-center justify-center py-2 px-3 text-xs font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
            >
              Issue Purchase Order (PO)
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Grid: Top Selling Luxury Products & VIP Customers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Jewelry Products */}
        <div className="bg-white border border-stone-200 rounded-xl shadow-xs p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-bold text-stone-900">Top Revenue Products</h2>
              <p className="text-xs text-stone-500">Highest grossing SKUs this billing period</p>
            </div>
            <Link to="/admin/reports/products" className="text-xs font-semibold text-amber-700 hover:underline">
              Deep Analytics
            </Link>
          </div>

          <div className="space-y-3">
            {topProducts.map((prod, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-stone-100 hover:bg-stone-50">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-bold text-xs">
                    #{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-stone-900">{prod.name}</h3>
                    <p className="text-[11px] text-stone-400 font-mono">{prod.sku} • {prod.purity}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-stone-900 font-mono">{prod.revenue}</p>
                  <p className="text-[10px] text-stone-400">{prod.sold} units sold</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* High Net Worth / Recent VIP Customers */}
        <div className="bg-white border border-stone-200 rounded-xl shadow-xs p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-bold text-stone-900">Recent High-Value Clients</h2>
              <p className="text-xs text-stone-500">Top customer acquisitions & lifetime value (LTV)</p>
            </div>
            <Link to="/admin/customers" className="text-xs font-semibold text-amber-700 hover:underline">
              View CRM
            </Link>
          </div>

          <div className="space-y-3">
            {recentCustomers.map((cust, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-stone-100 hover:bg-stone-50">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-stone-900 text-amber-300 flex items-center justify-center font-bold text-xs">
                    {cust.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-stone-900">{cust.name}</h3>
                    <p className="text-[11px] text-stone-400">{cust.city} • {cust.email}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2 py-0.5 text-[10px] font-bold rounded bg-amber-100 text-amber-900 mb-0.5">
                    {cust.tier}
                  </span>
                  <p className="text-xs font-semibold text-stone-800 font-mono">LTV: {cust.ltv}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;