import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Save, Sparkles, UploadCloud } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const CollectionCreate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    theme: '',
    description: '',
    status: 'Active'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'name' ? { slug: value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') } : {})
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/admin/collections');
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Create Curated Collection"
        subtitle="Bundle jewellery products into seasonal themes and luxury showcases"
        breadcrumbs={[
          { label: 'Collections', to: '/admin/collections' },
          { label: 'New Collection' }
        ]}
        actions={
          <>
            <Link
              to="/admin/collections"
              className="flex items-center space-x-1.5 px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-medium transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Cancel</span>
            </Link>
            <button
              onClick={handleSubmit}
              className="flex items-center space-x-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-lg text-xs transition-colors shadow-xs"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Publish Collection</span>
            </button>
          </>
        }
      />

      <form onSubmit={handleSubmit} className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs max-w-2xl space-y-4 text-xs">
        <div>
          <label className="block text-stone-700 font-semibold mb-1">Collection Title *</label>
          <input
            type="text"
            name="name"
            required
            placeholder="e.g. Royal Nizam Heritage"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-500"
          />
        </div>

        <div>
          <label className="block text-stone-700 font-semibold mb-1">Slug</label>
          <div className="flex items-center">
            <span className="px-3 py-2 bg-stone-100 border border-r-0 border-stone-300 rounded-l-lg text-stone-500 font-mono">
              /collection/
            </span>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-stone-300 rounded-r-lg font-mono focus:outline-hidden"
            />
          </div>
        </div>

        <div>
          <label className="block text-stone-700 font-semibold mb-1">Theme Tagline</label>
          <input
            type="text"
            name="theme"
            placeholder="e.g. Rare handcrafted uncut diamonds inspired by royal eras"
            value={formData.theme}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden"
          />
        </div>

        <div>
          <label className="block text-stone-700 font-semibold mb-1">Editorial Description</label>
          <textarea
            name="description"
            rows={3}
            value={formData.description}
            onChange={handleChange}
            placeholder="Curator note for the storefront..."
            className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden"
          />
        </div>

        <div>
          <label className="block text-stone-700 font-semibold mb-1">Collection Banner Imagery</label>
          <div className="border-2 border-dashed border-stone-300 rounded-xl p-6 text-center bg-stone-50">
            <UploadCloud className="w-6 h-6 text-stone-400 mx-auto mb-1" />
            <span className="font-semibold text-stone-700 block">Upload Collection Cover</span>
            <span className="text-[10px] text-stone-400">1920x800 recommended for high-res hero</span>
          </div>
        </div>

        <div>
          <label className="block text-stone-700 font-semibold mb-1">Campaign Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden"
          >
            <option value="Active">Active & Live</option>
            <option value="Draft">Draft</option>
            <option value="Scheduled">Scheduled Campaign</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default CollectionCreate;
