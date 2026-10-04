import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Save, UploadCloud } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const CategoryCreate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    parentCategory: '',
    description: '',
    sortOrder: '1',
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
    navigate('/admin/categories');
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Create New Category"
        subtitle="Define new jewelry department, slug, and hierarchy"
        breadcrumbs={[
          { label: 'Categories', to: '/admin/categories' },
          { label: 'New Category' }
        ]}
        actions={
          <>
            <Link
              to="/admin/categories"
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
              <span>Save Category</span>
            </button>
          </>
        }
      />

      <form onSubmit={handleSubmit} className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs max-w-2xl space-y-4 text-xs">
        <div>
          <label className="block text-stone-700 font-semibold mb-1">Category Title *</label>
          <input
            type="text"
            name="name"
            required
            placeholder="e.g. Mangalsutras & Tanmaniya"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-500"
          />
        </div>

        <div>
          <label className="block text-stone-700 font-semibold mb-1">URL Slug</label>
          <div className="flex items-center">
            <span className="px-3 py-2 bg-stone-100 border border-r-0 border-stone-300 rounded-l-lg text-stone-500 font-mono">
              /category/
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
          <label className="block text-stone-700 font-semibold mb-1">Description</label>
          <textarea
            name="description"
            rows={3}
            value={formData.description}
            onChange={handleChange}
            placeholder="Description for SEO and category banner..."
            className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-stone-700 font-semibold mb-1">Sort Order Index</label>
            <input
              type="number"
              name="sortOrder"
              value={formData.sortOrder}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden font-mono"
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
              <option value="Active">Active</option>
              <option value="Disabled">Disabled</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CategoryCreate;
