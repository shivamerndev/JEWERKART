import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Save, Sparkles } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: 'Royal Solitaire 1.5ct Diamond Ring',
    sku: 'JW-RNG-041',
    category: 'Rings',
    purity: '18K White Gold (750)',
    grossWeight: '4.82',
    sellingPrice: '145000',
    stockQuantity: '8',
    status: 'Active'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    navigate(`/admin/products/${id || 'prod-001'}`);
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title={`Edit SKU: ${formData.sku}`}
        subtitle="Update inventory, metal specifications and pricing"
        breadcrumbs={[
          { label: 'Products', to: '/admin/products' },
          { label: formData.sku, to: `/admin/products/${id || 'prod-001'}` },
          { label: 'Edit' }
        ]}
        actions={
          <>
            <Link
              to={`/admin/products/${id || 'prod-001'}`}
              className="flex items-center space-x-1.5 px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-medium transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Cancel</span>
            </Link>
            <button
              onClick={handleSave}
              className="flex items-center space-x-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-lg text-xs transition-colors shadow-xs"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Changes</span>
            </button>
          </>
        }
      />

      <form onSubmit={handleSave} className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs space-y-4 max-w-2xl text-xs">
        <div>
          <label className="block text-stone-700 font-semibold mb-1">Product Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-stone-700 font-semibold mb-1">Metal Purity</label>
            <input
              type="text"
              name="purity"
              value={formData.purity}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden"
            />
          </div>
          <div>
            <label className="block text-stone-700 font-semibold mb-1">Gross Weight (g)</label>
            <input
              type="text"
              name="grossWeight"
              value={formData.grossWeight}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-stone-700 font-semibold mb-1">Retail MRP (₹)</label>
            <input
              type="number"
              name="sellingPrice"
              value={formData.sellingPrice}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden font-mono font-bold"
            />
          </div>
          <div>
            <label className="block text-stone-700 font-semibold mb-1">Vault Stock Count</label>
            <input
              type="number"
              name="stockQuantity"
              value={formData.stockQuantity}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden font-mono"
            />
          </div>
        </div>

        <div>
          <label className="block text-stone-700 font-semibold mb-1">Catalog Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden font-medium"
          >
            <option value="Active">Active</option>
            <option value="Draft">Draft</option>
            <option value="Archived">Archived</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default ProductEdit;
