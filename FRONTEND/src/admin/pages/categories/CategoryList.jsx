import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Edit, Trash2, Layers, ArrowRight } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const initialCategories = [
  { id: 'cat-1', name: 'Rings & Solitaires', slug: 'rings', count: 142, status: 'Active', sortOrder: 1, image: '💍' },
  { id: 'cat-2', name: 'Necklaces & Chokers', slug: 'necklaces', count: 98, status: 'Active', sortOrder: 2, image: '📿' },
  { id: 'cat-3', name: 'Bangles & Bracelets', slug: 'bangles', count: 85, status: 'Active', sortOrder: 3, image: '✨' },
  { id: 'cat-4', name: 'Earrings & Jhumkas', slug: 'earrings', count: 210, status: 'Active', sortOrder: 4, image: '💎' },
  { id: 'cat-5', name: 'Pendants & Chains', slug: 'pendants', count: 64, status: 'Active', sortOrder: 5, image: '🪙' },
  { id: 'cat-6', name: '925 Silver Vault', slug: 'silver', count: 180, status: 'Active', sortOrder: 6, image: '🥈' }
];

const CategoryList = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [search, setSearch] = useState('');

  const filtered = categories.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Category Hierarchy & Taxonomies"
        subtitle="Organize product collections, navigation menus and category landing pages"
        breadcrumbs={[{ label: 'Categories' }]}
        actions={
          <Link
            to="/admin/categories/new"
            className="flex items-center space-x-1.5 px-3.5 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-semibold rounded-lg text-xs transition-colors shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New Category</span>
          </Link>
        }
      />

      {/* Filter and Search */}
      <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-xs flex items-center justify-between">
        <div className="relative w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Search category name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:border-amber-500"
          />
        </div>
      </div>

      {/* Categories Table */}
      <div className="bg-white border border-stone-200 rounded-xl shadow-xs overflow-hidden">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-stone-50 text-stone-500 font-semibold border-b border-stone-200">
              <th className="p-3 pl-5">Category Name</th>
              <th className="p-3">Slug</th>
              <th className="p-3">SKU Count</th>
              <th className="p-3">Sort Order</th>
              <th className="p-3">Status</th>
              <th className="p-3 pr-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {filtered.map((cat) => (
              <tr key={cat.id} className="hover:bg-amber-50/20">
                <td className="p-3 pl-5 font-semibold text-stone-900 flex items-center space-x-2">
                  <span className="text-base">{cat.image}</span>
                  <span>{cat.name}</span>
                </td>
                <td className="p-3 font-mono text-stone-500">/{cat.slug}</td>
                <td className="p-3 font-mono font-medium text-stone-700">{cat.count} items</td>
                <td className="p-3 font-mono text-stone-500">#{cat.sortOrder}</td>
                <td className="p-3">
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full font-bold text-[10px]">
                    {cat.status}
                  </span>
                </td>
                <td className="p-3 pr-5 text-right">
                  <Link
                    to={`/admin/categories/${cat.id}/edit`}
                    className="p-1 text-stone-400 hover:text-amber-700 inline-block"
                  >
                    <Edit className="w-4 h-4" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryList;
