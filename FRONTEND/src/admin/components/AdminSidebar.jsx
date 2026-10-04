import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  Layers,
  FolderKanban,
  ShoppingBag,
  Users,
  Star,
  TicketPercent,
  BadgePercent,
  Warehouse,
  AlertTriangle,
  CreditCard,
  RotateCcw,
  Truck,
  Send,
  Image,
  Sparkles,
  FileText,
  HelpCircle,
  Settings,
  BarChart3,
  ChevronDown,
  ExternalLink,
  ShieldCheck,
  X
} from 'lucide-react';

const navSections = [
  {
    title: 'CORE',
    items: [
      { label: 'Dashboard', to: '/admin/dashboard', icon: LayoutDashboard }
    ]
  },
  {
    title: 'CATALOG & MERCHANDISING',
    items: [
      { label: 'Products', to: '/admin/products', icon: Package },
      { label: 'Categories', to: '/admin/categories', icon: Layers },
      { label: 'Collections', to: '/admin/collections', icon: FolderKanban }
    ]
  },
  {
    title: 'SALES & FULFILLMENT',
    items: [
      { label: 'Orders', to: '/admin/orders', icon: ShoppingBag, badge: '12' },
      { label: 'Customers', to: '/admin/customers', icon: Users },
      { label: 'Reviews', to: '/admin/reviews', icon: Star }
    ]
  },
  {
    title: 'PROMOTIONS & MARKETING',
    items: [
      { label: 'Coupons', to: '/admin/coupons', icon: TicketPercent },
      { label: 'Discounts', to: '/admin/discounts', icon: BadgePercent }
    ]
  },
  {
    title: 'INVENTORY & SUPPLY',
    items: [
      { label: 'Inventory', to: '/admin/inventory', icon: Warehouse },
      { label: 'Low Stock Alert', to: '/admin/inventory/low-stock', icon: AlertTriangle, badge: '7', badgeColor: 'bg-rose-500' }
    ]
  },
  {
    title: 'FINANCIALS',
    items: [
      { label: 'Payments', to: '/admin/payments', icon: CreditCard },
      { label: 'Refunds', to: '/admin/refunds', icon: RotateCcw }
    ]
  },
  {
    title: 'LOGISTICS',
    items: [
      { label: 'Shipping', to: '/admin/shipping', icon: Truck },
      { label: 'Delivery Manifest', to: '/admin/delivery', icon: Send }
    ]
  },
  {
    title: 'STOREFRONT CMS',
    items: [
      { label: 'Banners', to: '/admin/banners', icon: Image },
      { label: 'Hero Sections', to: '/admin/hero-sections', icon: Sparkles },
      { label: 'Content & Stories', to: '/admin/content', icon: FileText },
      { label: 'FAQs Manager', to: '/admin/faqs', icon: HelpCircle }
    ]
  },
  {
    title: 'BUSINESS INTELLIGENCE',
    items: [
      { label: 'Reports Hub', to: '/admin/reports', icon: BarChart3 },
      { label: 'Sales Reports', to: '/admin/reports/sales', icon: BarChart3 },
      { label: 'Product Reports', to: '/admin/reports/products', icon: BarChart3 },
      { label: 'Customer Reports', to: '/admin/reports/customers', icon: BarChart3 }
    ]
  },
  {
    title: 'SYSTEM SETTINGS',
    items: [
      { label: 'Settings Hub', to: '/admin/settings', icon: Settings },
      { label: 'General', to: '/admin/settings/general', icon: Settings },
      { label: 'Payments Setup', to: '/admin/settings/payment', icon: CreditCard },
      { label: 'Shipping Setup', to: '/admin/settings/shipping', icon: Truck },
      { label: 'Notifications', to: '/admin/settings/notifications', icon: Send }
    ]
  }
];

const AdminSidebar = ({ mobileOpen, setMobileOpen }) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-stone-950/60 backdrop-blur-xs lg:hidden"
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-[#14120e] text-stone-200 border-r border-[#2a241b] flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-[#2a241b] bg-[#0e0c09]">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-linear-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-stone-950 font-serif font-black shadow-sm">
              J
            </div>
            <div>
              <span className="font-serif tracking-widest text-sm font-bold text-amber-100 uppercase">
                JEWERKART
              </span>
              <span className="block text-[10px] uppercase tracking-wider text-amber-500 font-semibold">
                ERP Back-Office
              </span>
            </div>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1 rounded-md text-stone-400 hover:text-stone-100 hover:bg-stone-800 lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6 scrollbar-thin scrollbar-thumb-stone-800">
          {navSections.map((section, idx) => (
            <div key={idx}>
              <div className="px-2 text-[10px] font-bold tracking-wider text-stone-300 uppercase mb-2">
                {section.title}
              </div>
              <ul className="space-y-0.5">
                {section.items.map((item, itemIdx) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.to || (item.to !== '/admin/dashboard' && item.to !== '/admin/settings' && item.to !== '/admin/reports' && location.pathname.startsWith(item.to + '/'));
                  
                  return (
                    <li key={itemIdx}>
                      <NavLink
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                          isActive
                            ? 'bg-amber-500/15 text-amber-400 font-semibold border-l-2 border-amber-500 pl-2.5'
                            : 'text-stone-300 hover:text-stone-100 hover:bg-[#1f1a14]'
                        }`}
                      >
                        <div className="flex items-center space-x-2.5 truncate">
                          <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-amber-400' : 'text-stone-400'}`} />
                          <span className="truncate">{item.label}</span>
                        </div>
                        {item.badge && (
                          <span
                            className={`px-1.5 py-0.5 text-[10px] font-bold rounded-full text-white ${
                              item.badgeColor || 'bg-amber-600'
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer info & Store link */}
        <div className="p-3 border-t border-[#2a241b] bg-[#0e0c09] text-xs">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between px-3 py-2 rounded-lg bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-stone-100 transition-colors border border-stone-800"
          >
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="font-medium text-[11px]">View Storefront</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
          </a>
          <div className="mt-2 text-[10px] text-stone-300 text-center">
            Jewerkart Enterprise ERP v2.4
          </div>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
