import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Save, Sparkles, UploadCloud, Info, Plus, Trash2 } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const ProductCreate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    sku: 'JW-' + Math.floor(1000 + Math.random() * 9000),
    category: 'Rings',
    collection: 'Bridal Opulence',
    metalType: '18K Yellow Gold',
    grossWeight: '',
    netGoldWeight: '',
    diamondCarat: '',
    gemstones: 'Natural Diamonds',
    hallmarkCertified: true,
    hsnCode: '71131910',
    baseGoldRatePerGram: '7420',
    makingChargesType: 'percentage', // percentage or fixed
    makingChargesValue: '12',
    wastagePercent: '2',
    sellingPrice: '',
    stockQuantity: '10',
    lowStockThreshold: '3',
    shortDescription: '',
    description: '',
    metaTitle: '',
    metaDescription: '',
    status: 'Active'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate save and redirect
    navigate('/admin/products');
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Add New Jewelry Item"
        subtitle="Configure ERP gold bullion weight, diamond specs, making charges and vault stock"
        breadcrumbs={[
          { label: 'Products', to: '/admin/products' },
          { label: 'New Product' }
        ]}
        actions={
          <>
            <Link
              to="/admin/products"
              className="flex items-center space-x-1.5 px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-medium transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Catalog</span>
            </Link>
            <button
              onClick={handleSubmit}
              className="flex items-center space-x-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-lg text-xs transition-colors shadow-xs"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Publish Product SKU</span>
            </button>
          </>
        }
      />

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-xs">
        {/* Left 2 Cols: Product Details, ERP Metal Specs, Pricing */}
        <div className="lg:col-span-2 space-y-6">
          {/* General Information */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-2">
              General Identity & Classification
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-stone-700 font-semibold mb-1">
                  Jewelry Piece Title *
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  placeholder="e.g. Royal Solitaire 1.5ct Diamond Ring"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-semibold mb-1">SKU Code (Auto)</label>
                <input
                  type="text"
                  name="sku"
                  value={formData.sku}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-stone-50 font-mono border border-stone-300 rounded-lg focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-semibold mb-1">HSN Code (GST)</label>
                <input
                  type="text"
                  name="hsnCode"
                  value={formData.hsnCode}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-semibold mb-1">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden"
                >
                  <option value="Rings">Rings</option>
                  <option value="Necklaces">Necklaces</option>
                  <option value="Bangles & Bracelets">Bangles & Bracelets</option>
                  <option value="Earrings">Earrings</option>
                  <option value="Pendants">Pendants</option>
                  <option value="Silver Collection">Silver Collection</option>
                </select>
              </div>

              <div>
                <label className="block text-stone-700 font-semibold mb-1">Collection</label>
                <select
                  name="collection"
                  value={formData.collection}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden"
                >
                  <option value="Bridal Opulence">Bridal Opulence</option>
                  <option value="Everyday Elegance">Everyday Elegance</option>
                  <option value="Solitaire Dreams">Solitaire Dreams</option>
                  <option value="Festive Heritage">Festive Heritage</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-stone-700 font-semibold mb-1">Short Narrative</label>
                <textarea
                  name="shortDescription"
                  rows={2}
                  value={formData.shortDescription}
                  onChange={handleChange}
                  placeholder="Exquisite craftsmanship handcrafted by master karigars..."
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden"
                />
              </div>
            </div>
          </div>

          {/* Metal Specs & Gemstones */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-2">
              <h3 className="text-sm font-bold text-stone-900">Precious Metal & Gemstone Specifications</h3>
              <span className="text-[11px] text-amber-700 font-semibold flex items-center">
                <Sparkles className="w-3.5 h-3.5 mr-1" /> BIS Hallmarked
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-stone-700 font-semibold mb-1">Metal Purity *</label>
                <select
                  name="metalType"
                  value={formData.metalType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden"
                >
                  <option value="24K Yellow Gold (999)">24K Yellow Gold (999)</option>
                  <option value="22K Yellow Gold (916)">22K Yellow Gold (916)</option>
                  <option value="18K Yellow Gold (750)">18K Yellow Gold (750)</option>
                  <option value="18K White Gold">18K White Gold</option>
                  <option value="18K Rose Gold">18K Rose Gold</option>
                  <option value="14K Yellow Gold (585)">14K Yellow Gold (585)</option>
                  <option value="925 Sterling Silver">925 Sterling Silver</option>
                </select>
              </div>

              <div>
                <label className="block text-stone-700 font-semibold mb-1">Gross Weight (Grams) *</label>
                <input
                  type="number"
                  step="0.001"
                  name="grossWeight"
                  placeholder="e.g. 5.420"
                  value={formData.grossWeight}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-semibold mb-1">Net Metal Weight (Grams)</label>
                <input
                  type="number"
                  step="0.001"
                  name="netGoldWeight"
                  placeholder="e.g. 5.100"
                  value={formData.netGoldWeight}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-semibold mb-1">Diamond Total Carat (ct)</label>
                <input
                  type="text"
                  name="diamondCarat"
                  placeholder="e.g. 1.25 ct (VVS-EF)"
                  value={formData.diamondCarat}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-semibold mb-1">Gemstone Inlay</label>
                <input
                  type="text"
                  name="gemstones"
                  value={formData.gemstones}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden"
                />
              </div>

              <div className="flex items-center pt-5">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="hallmarkCertified"
                    checked={formData.hallmarkCertified}
                    onChange={handleChange}
                    className="rounded border-stone-300 text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-stone-700 font-semibold">BIS 916 / IGI Certified</span>
                </label>
              </div>
            </div>
          </div>

          {/* ERP Dynamic Price Calculation */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-2">
              ERP Commercials & Making Charges
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-stone-700 font-semibold mb-1">Base Metal Rate (₹/g)</label>
                <input
                  type="number"
                  name="baseGoldRatePerGram"
                  value={formData.baseGoldRatePerGram}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden font-mono"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-semibold mb-1">Making Charges (%)</label>
                <input
                  type="number"
                  name="makingChargesValue"
                  value={formData.makingChargesValue}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden font-mono"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-semibold mb-1">Final Retail MRP (₹) *</label>
                <input
                  type="number"
                  name="sellingPrice"
                  required
                  placeholder="e.g. 145000"
                  value={formData.sellingPrice}
                  onChange={handleChange}
                  className="w-full px-3 py-2 font-bold font-mono text-stone-900 border border-amber-300 rounded-lg focus:outline-hidden bg-amber-50/20"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right 1 Col: Media Upload, Inventory Vault, Status */}
        <div className="space-y-6">
          {/* Publishing Status */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs space-y-3">
            <h3 className="text-sm font-bold text-stone-900">Publishing State</h3>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden font-semibold"
            >
              <option value="Active">Active & Live on Storefront</option>
              <option value="Draft">Draft (Internal Review)</option>
              <option value="Archived">Archived / Discontinued</option>
            </select>
          </div>

          {/* Media Assets */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs space-y-3">
            <h3 className="text-sm font-bold text-stone-900">Product Visuals & 360°</h3>
            <div className="border-2 border-dashed border-stone-300 hover:border-amber-500 rounded-xl p-6 text-center transition-colors cursor-pointer bg-stone-50">
              <UploadCloud className="w-8 h-8 text-stone-400 mx-auto mb-2" />
              <p className="font-semibold text-stone-700">Drop high-res imagery</p>
              <p className="text-[10px] text-stone-400 mt-1">PNG, JPG, WEBP up to 10MB</p>
            </div>
          </div>

          {/* Vault Inventory Allocation */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-stone-900">Vault Inventory Allocation</h3>
            <div>
              <label className="block text-stone-700 font-semibold mb-1">Available Stock Count</label>
              <input
                type="number"
                name="stockQuantity"
                value={formData.stockQuantity}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden font-mono"
              />
            </div>
            <div>
              <label className="block text-stone-700 font-semibold mb-1">Low Stock Alert Trigger</label>
              <input
                type="number"
                name="lowStockThreshold"
                value={formData.lowStockThreshold}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden font-mono"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductCreate;
