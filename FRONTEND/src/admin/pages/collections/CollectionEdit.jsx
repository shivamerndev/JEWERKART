import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const CollectionEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: 'Bridal Opulence 2026',
    slug: 'bridal-opulence',
    theme: 'Royal Wedding Heirloom',
    description: 'Bespoke bridal sets, polki necklaces, and diamond tiaras crafted for brides.',
    status: 'Active'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/admin/collections');
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title={`Edit Collection: ${formData.name}`}
        subtitle="Manage campaign themes, curated jewelry products, and publishing status"
        breadcrumbs={[
          { label: 'Collections', to: '/admin/collections' },
          { label: 'Edit Collection' }
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
              <span>Update Collection</span>
            </button>
          </>
        }
      />

      <form onSubmit={handleSubmit} className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs max-w-2xl space-y-4 text-xs">
        <div>
          <label className="block text-stone-700 font-semibold mb-1">Collection Title</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-500"
          />
        </div>

        <div>
          <label className="block text-stone-700 font-semibold mb-1">Slug</label>
          <input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-stone-300 rounded-lg font-mono focus:outline-hidden"
          />
        </div>

        <div>
          <label className="block text-stone-700 font-semibold mb-1">Theme Tagline</label>
          <input
            type="text"
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden"
          />
        </div>

        <div>
          <label className="block text-stone-700 font-semibold mb-1">Description</label>
          <textarea
            name="description"
            rows={3}
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden"
          />
        </div>

        <div>
          <label className="block text-stone-700 font-semibold mb-1">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden"
          >
            <option value="Active">Active & Live</option>
            <option value="Draft">Draft</option>
            <option value="Archived">Archived</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default CollectionEdit;
