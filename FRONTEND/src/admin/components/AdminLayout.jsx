import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminNavbar from './AdminNavbar';

const AdminLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 flex flex-col">
      {/* Sidebar Navigation */}
      <AdminSidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* Main Content Wrapper */}
      <div className="lg:pl-64 flex flex-col min-h-screen">
        <AdminNavbar setMobileOpen={setMobileOpen} />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>

        <footer className="py-4 px-6 border-t border-stone-200 text-stone-400 text-xs flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Jewerkart Enterprise ERP &copy; {new Date().getFullYear()}</span>
          <div className="flex items-center space-x-4">
            <span>Server: prod-asia-south1</span>
            <span>Latency: 24ms</span>
            <span className="inline-flex items-center text-emerald-600 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
              All Systems Operational
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
