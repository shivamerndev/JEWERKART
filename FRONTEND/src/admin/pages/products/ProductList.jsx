import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Plus,
  Search,
  Filter,
  Download,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Sparkles,
  ArrowUpDown,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const initialProducts = [
  {
    id: 'prod-001',
    sku: 'JW-RNG-041',
    name: 'Royal Solitaire 1.5ct Diamond Ring',
    category: 'Rings',
    purity: '18K White Gold',
    grossWeight: '4.8g',
    price: 145000,
    stock: 8,
    status: 'Active',
    featured: true
  },
  {
    id: 'prod-002',
    sku: 'JW-NCK-112',
    name: 'Traditional Temple Lakshmi Choker',
    category: 'Necklaces',
    purity: '22K Yellow Gold',
    grossWeight: '38.2g',
    price: 285000,
    stock: 4,
    status: 'Active',
    featured: true
  },
  {
    id: 'prod-003',
    sku: 'JW-BNG-089',
    name: 'Floral Rose Gold Diamond Bangle',
    category: 'Bangles & Bracelets',
    purity: '18K Rose Gold',
    grossWeight: '14.5g',
    price: 84000,
    stock: 12,
    status: 'Active',
    featured: false
  },
  {
    id: 'prod-004',
    sku: 'JW-ANK-003',
    name: 'Celestial 925 Sterling Silver Anklet',
    category: 'Silver Collection',
    purity: '925 Silver',
    grossWeight: '12.0g',
    price: 6500,
    stock: 45,
    status: 'Active',
    featured: false
  },
  {
    id: 'prod-005',
    sku: 'JW-DIA-RNG-009',
    name: 'Princess Cut Solitaire Engagement Ring',
    category: 'Rings',
    purity: '18K Yellow Gold',
    grossWeight: '3.9g',
    price: 112000,
    stock: 2,
    status: 'Low Stock',
    featured: true
  },
  {
    id: 'prod-006',
    sku: 'JW-EAR-077',
    name: 'Kundan Polki Jhumkas with Pearls',
    category: 'Earrings',
    purity: '22K Gold Foil',
    grossWeight: '26.4g',
    price: 48000,
    stock: 0,
    status: 'Out of Stock',
    featured: false
  }
];

const ProductList = () => {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const filtered = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.sku.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || p.category === categoryFilter;
    const matchesStatus = statusFilter === 'All' || p.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Jewelry Catalog & Products"
        subtitle="Manage ERP jewelry inventory, precious metal specifications & SKU pricing"
        breadcrumbs={[{ label: 'Products' }]}
        actions={
          <>
            <button className="flex items-center space-x-1.5 px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-medium transition-colors">
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
            <Link
              to="/admin/products/new"
              className="flex items-center space-x-1.5 px-3.5 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-semibold rounded-lg text-xs transition-colors shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add New Product</span>
            </Link>
          </>
        }
      />

      {/* Filter Ribbon */}
      <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-xs flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Search SKU or product title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:border-amber-500 focus:bg-white"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="text-xs bg-stone-50 border border-stone-200 rounded-lg px-2.5 py-1.5 focus:outline-hidden focus:border-amber-500 text-stone-700"
          >
            <option value="All">All Categories</option>
            <option value="Rings">Rings</option>
            <option value="Necklaces">Necklaces</option>
            <option value="Bangles & Bracelets">Bangles</option>
            <option value="Earrings">Earrings</option>
            <option value="Silver Collection">Silver</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="text-xs bg-stone-50 border border-stone-200 rounded-lg px-2.5 py-1.5 focus:outline-hidden focus:border-amber-500 text-stone-700"
          >
            <option value="All">All Stock Statuses</option>
            <option value="Active">In Stock</option>
            <option value="Low Stock">Low Stock Alert</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>
      </div>

      {/* Catalog Table */}
      <div className="bg-white border border-stone-200 rounded-xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-stone-50 text-stone-500 font-semibold border-b border-stone-200">
                <th className="p-3 pl-5">SKU & Item Details</th>
                <th className="p-3">Category</th>
                <th className="p-3">Metal / Purity</th>
                <th className="p-3">Gross Wt.</th>
                <th className="p-3">MRP (INR)</th>
                <th className="p-3">Vault Stock</th>
                <th className="p-3">Status</th>
                <th className="p-3 pr-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filtered.map((prod) => (
                <tr key={prod.id} className="hover:bg-amber-50/20 transition-colors">
                  <td className="p-3 pl-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center font-serif font-bold text-amber-800 shrink-0">
                        ✨
                      </div>
                      <div>
                        <Link
                          to={`/admin/products/${prod.id}`}
                          className="font-semibold text-stone-900 hover:text-amber-700 transition-colors line-clamp-1"
                        >
                          {prod.name}
                        </Link>
                        <span className="font-mono text-[10px] text-stone-400 block">{prod.sku}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 font-medium text-stone-700">{prod.category}</td>
                  <td className="p-3">
                    <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-stone-100 text-stone-800">
                      {prod.purity}
                    </span>
                  </td>
                  <td className="p-3 font-mono text-stone-600">{prod.grossWeight}</td>
                  <td className="p-3 font-mono font-bold text-stone-900">
                    ₹{prod.price.toLocaleString('en-IN')}
                  </td>
                  <td className="p-3 font-semibold">
                    <span className={prod.stock <= 2 ? 'text-rose-600 font-bold' : 'text-stone-800'}>
                      {prod.stock} units
                    </span>
                  </td>
                  <td className="p-3">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        prod.status === 'Active'
                          ? 'bg-emerald-100 text-emerald-800'
                          : prod.status === 'Low Stock'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {prod.status}
                    </span>
                  </td>
                  <td className="p-3 pr-5 text-right">
                    <div className="flex items-center justify-end space-x-1.5">
                      <Link
                        to={`/admin/products/${prod.id}`}
                        className="p-1 text-stone-400 hover:text-stone-900 rounded"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                      <Link
                        to={`/admin/products/${prod.id}/edit`}
                        className="p-1 text-stone-400 hover:text-amber-700 rounded"
                        title="Edit Product"
                      >
                        <Edit className="w-4 h-4" />
                      </Link>
                    </div>
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

export default ProductList;
