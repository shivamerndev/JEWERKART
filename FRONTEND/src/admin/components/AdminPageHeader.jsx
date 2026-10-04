import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminPageHeader = ({
  title,
  subtitle,
  breadcrumbs = [],
  actions = null,
}) => {
  return (
    <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-stone-200 pb-5">
      <div>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center space-x-1.5 text-xs text-stone-500 mb-2">
            <Link to="/admin/dashboard" className="flex items-center hover:text-stone-900 transition-colors">
              <Home className="w-3.5 h-3.5 mr-1" />
              <span>Admin</span>
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3 h-3 text-stone-400" />
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-stone-900 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-stone-800 font-medium">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}
        <h1 className="text-2xl font-bold tracking-tight text-stone-900 font-serif">{title}</h1>
        {subtitle && <p className="text-xs text-stone-500 mt-1">{subtitle}</p>}
      </div>

      {actions && (
        <div className="flex flex-wrap items-center gap-2.5">
          {actions}
        </div>
      )}
    </div>
  );
};

export default AdminPageHeader;
