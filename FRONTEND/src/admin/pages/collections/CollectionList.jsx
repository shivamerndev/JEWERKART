import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Edit, FolderKanban, Sparkles } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const initialCollections = [
  { id: 'col-1', name: 'Bridal Opulence 2026', slug: 'bridal-opulence', products: 42, theme: 'Royal Wedding Heirloom', status: 'Active' },
  { id: 'col-2', name: 'Solitaire Dreams', slug: 'solitaire-dreams', products: 28, theme: 'Fine Certified Diamonds', status: 'Active' },
  { id: 'col-3', name: 'Festive Polki & Heritage', slug: 'festive-polki', products: 35, theme: 'Traditional Kundan Gold', status: 'Active' },
  { id: 'col-4', name: 'Everyday Minimalist Silver', slug: 'everyday-silver', products: 64, theme: 'Modern 925 Workwear', status: 'Active' },
  { id: 'col-5', name: 'Celestial Rose Gold', slug: 'celestial-rose', products: 19, theme: 'Contemporary Romance', status: 'Draft' }
];

const CollectionList = () => {
  const [collections, setCollections] = useState(initialCollections);
  const [search, setSearch] = useState('');

  const filtered = collections.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Curated Collections & Campaigns"
        subtitle="Manage themed lookbooks, seasonal campaigns, and curated jewelry edits"
        breadcrumbs={[{ label: 'Collections' }]}
        actions={
          <Link
            to="/admin/collections/new"
            className="flex items-center space-x-1.5 px-3.5 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-semibold rounded-lg text-xs transition-colors shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Create Collection</span>
          </Link>
        }
      />

      <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-xs flex items-center justify-between">
        <div className="relative w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Search collections..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:border-amber-500"
          />
        </div>
      </div>

      <div className="bg-white border border-stone-200 rounded-xl shadow-xs overflow-hidden">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-stone-50 text-stone-500 font-semibold border-b border-stone-200">
              <th className="p-3 pl-5">Collection Name</th>
              <th className="p-3">Slug</th>
              <th className="p-3">Theme & Description</th>
              <th className="p-3">Assigned SKUs</th>
              <th className="p-3">Campaign Status</th>
              <th className="p-3 pr-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {filtered.map((col) => (
              <tr key={col.id} className="hover:bg-amber-50/20">
                <td className="p-3 pl-5 font-semibold text-stone-900 flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>{col.name}</span>
                </td>
                <td className="p-3 font-mono text-stone-500">/{col.slug}</td>
                <td className="p-3 text-stone-600">{col.theme}</td>
                <td className="p-3 font-mono font-medium text-stone-800">{col.products} SKUs</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      col.status === 'Active'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-stone-100 text-stone-700'
                    }`}
                  >
                    {col.status}
                  </span>
                </td>
                <td className="p-3 pr-5 text-right">
                  <Link
                    to={`/admin/collections/${col.id}/edit`}
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

export default CollectionList;
