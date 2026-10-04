import React, { useState } from 'react';
import {
  Menu,
  Search,
  Bell,
  Plus,
  LogOut,
  User,
  Shield,
  HelpCircle,
  ExternalLink,
  Coins
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const AdminNavbar = ({ setMobileOpen }) => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showQuickAdd, setShowQuickAdd] = useState(false);

  const notifications = [
    { id: 1, title: 'Critical Stock: Solitaire Ring (14K)', time: '5m ago', unread: true },
    { id: 2, title: 'High Value Order #JK-9942 (₹1,45,000)', time: '22m ago', unread: true },
    { id: 3, title: 'Return request for Order #JK-9901', time: '1h ago', unread: false },
    { id: 4, title: 'Payment verified via Razorpay', time: '2h ago', unread: false },
  ];

  return (
    <header className="h-16 bg-white border-b border-stone-200 sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6 shadow-xs">
      <div className="flex items-center space-x-3">
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 rounded-lg text-stone-600 hover:bg-stone-100 lg:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Global ERP Search Bar */}
        <div className="relative hidden md:block w-72 lg:w-96">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Search SKU, Order ID, Customer phone..."
            className="w-full pl-9 pr-4 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:border-amber-500 focus:bg-white transition-colors"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-3">
        {/* Live Gold Rate ERP Tracker */}
        <div className="hidden xl:flex items-center space-x-2 px-3 py-1 bg-amber-50/70 border border-amber-200/80 rounded-full text-xs text-amber-900 font-medium">
          <Coins className="w-3.5 h-3.5 text-amber-600" />
          <span>24K Gold: <strong className="text-amber-800">₹7,420/g</strong></span>
          <span className="text-[10px] text-emerald-600 font-bold">(+0.4%)</span>
        </div>

        {/* Quick Add Button */}
        <div className="relative">
          <button
            onClick={() => {
              setShowQuickAdd(!showQuickAdd);
              setShowNotifications(false);
              setShowProfileMenu(false);
            }}
            className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold text-stone-900 bg-linear-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 rounded-lg shadow-xs transition-all"
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Create</span>
          </button>

          {showQuickAdd && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-stone-200 rounded-xl shadow-lg py-1.5 z-50 text-xs">
              <Link
                to="/admin/products/new"
                onClick={() => setShowQuickAdd(false)}
                className="block px-4 py-2 hover:bg-stone-50 text-stone-700 font-medium"
              >
                + New Product SKU
              </Link>
              <Link
                to="/admin/categories/new"
                onClick={() => setShowQuickAdd(false)}
                className="block px-4 py-2 hover:bg-stone-50 text-stone-700 font-medium"
              >
                + New Category
              </Link>
              <Link
                to="/admin/collections/new"
                onClick={() => setShowQuickAdd(false)}
                className="block px-4 py-2 hover:bg-stone-50 text-stone-700 font-medium"
              >
                + New Collection
              </Link>
              <Link
                to="/admin/coupons"
                onClick={() => setShowQuickAdd(false)}
                className="block px-4 py-2 hover:bg-stone-50 text-stone-700 font-medium"
              >
                + New Coupon Code
              </Link>
            </div>
          )}
        </div>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowQuickAdd(false);
              setShowProfileMenu(false);
            }}
            className="relative p-2 rounded-lg text-stone-600 hover:bg-stone-100 transition-colors"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white border border-stone-200 rounded-xl shadow-xl py-2 z-50">
              <div className="px-4 py-2 border-b border-stone-100 flex items-center justify-between">
                <span className="text-xs font-bold text-stone-900">ERP System Notifications</span>
                <span className="text-[10px] text-amber-600 font-semibold cursor-pointer">Mark all read</span>
              </div>
              <div className="divide-y divide-stone-50 max-h-64 overflow-y-auto">
                {notifications.map((n) => (
                  <div key={n.id} className="p-3 hover:bg-stone-50 cursor-pointer text-xs flex justify-between">
                    <div>
                      <p className={`text-stone-800 ${n.unread ? 'font-semibold' : ''}`}>{n.title}</p>
                      <p className="text-[10px] text-stone-400 mt-0.5">{n.time}</p>
                    </div>
                    {n.unread && <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5"></span>}
                  </div>
                ))}
              </div>
              <div className="px-4 py-2 border-t border-stone-100 text-center">
                <Link to="/admin/orders" onClick={() => setShowNotifications(false)} className="text-[11px] text-amber-700 font-semibold hover:underline">
                  View all system logs
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setShowProfileMenu(!showProfileMenu);
              setShowQuickAdd(false);
              setShowNotifications(false);
            }}
            className="flex items-center space-x-2 p-1.5 rounded-lg hover:bg-stone-100 transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-stone-900 text-amber-300 font-bold text-xs flex items-center justify-center border border-amber-400/40">
              OP
            </div>
            <div className="hidden md:block text-left text-xs leading-tight">
              <span className="block font-semibold text-stone-800">Admin Ops</span>
              <span className="block text-[10px] text-stone-400">Super Admin</span>
            </div>
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-stone-200 rounded-xl shadow-xl py-1.5 z-50 text-xs">
              <div className="px-4 py-2 border-b border-stone-100">
                <p className="font-semibold text-stone-900">Operations Desk</p>
                <p className="text-[10px] text-stone-400">admin@jewerkart.com</p>
              </div>
              <Link
                to="/admin/settings/general"
                onClick={() => setShowProfileMenu(false)}
                className="flex items-center space-x-2 px-4 py-2 hover:bg-stone-50 text-stone-700"
              >
                <Shield className="w-3.5 h-3.5 text-stone-400" />
                <span>Security & Roles</span>
              </Link>
              <Link
                to="/admin/faqs"
                onClick={() => setShowProfileMenu(false)}
                className="flex items-center space-x-2 px-4 py-2 hover:bg-stone-50 text-stone-700"
              >
                <HelpCircle className="w-3.5 h-3.5 text-stone-400" />
                <span>ERP Docs</span>
              </Link>
              <div className="border-t border-stone-100 mt-1"></div>
              <button
                onClick={() => {
                  setShowProfileMenu(false);
                  navigate('/admin/login');
                }}
                className="w-full flex items-center space-x-2 px-4 py-2 text-rose-600 hover:bg-rose-50 text-left font-medium"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
