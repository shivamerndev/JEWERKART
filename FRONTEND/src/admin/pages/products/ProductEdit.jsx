import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Save, RefreshCw, AlertCircle } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';
import { useProduct } from '../../../hooks/useProduct';

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    handleGetProductById,
    handleUpdateProduct,
    loading,
  } = useProduct();

  const [isSaving, setIsSaving] = useState(false);
  const [notification, setNotification] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    sku: '',
    category: 'Rings',
    purity: '18K White Gold (750)',
    grossWeight: '4.82g',
    netWeight: '4.50g',
    diamondWeight: '1.25 ct',
    sellingPrice: '',
    stockQuantity: '8',
    lowStockThreshold: '3',
    status: 'Active',
    image: '',
    description: '',
  });

  useEffect(() => {
    if (id) {
      handleGetProductById(id).then((prod) => {
        if (prod) {
          setFormData({
            title: prod.name || prod.title || '',
            sku: prod.sku || '',
            category: prod.categoryName || prod.category || prod.productType || 'Rings',
            purity: prod.purity || prod.metalType || (prod.metal ? `${prod.metal} Gold` : '18K Gold'),
            grossWeight: prod.grossWeight || '4.8g',
            netWeight: prod.netWeight || prod.netGoldWeight || '4.5g',
            diamondWeight: prod.diamondWeight || prod.diamondCarat || '',
            sellingPrice: String(prod.price || prod.sellingPrice || ''),
            stockQuantity: String(prod.stock !== undefined ? prod.stock : prod.stockQuantity || 10),
            lowStockThreshold: String(prod.lowStockThreshold || 3),
            status: prod.status || 'Active',
            image: prod.image || '',
            description: prod.description || '',
          });
        }
      });
    }
  }, [id, handleGetProductById]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
    if (e) e.preventDefault();
    setNotification(null);

    if (!formData.title || !formData.title.trim()) {
      setNotification({ type: 'error', message: 'Product title is required.' });
      return;
    }

    if (!formData.sellingPrice || Number(formData.sellingPrice) <= 0) {
      setNotification({ type: 'error', message: 'Valid positive price is required.' });
      return;
    }

    try {
      setIsSaving(true);
      await handleUpdateProduct(id, {
        ...formData,
        price: Number(formData.sellingPrice),
        stock: Number(formData.stockQuantity),
        lowStockThreshold: Number(formData.lowStockThreshold),
      });
      navigate(`/admin/products/${id}`);
    } catch (err) {
      setNotification({
        type: 'error',
        message: err.message || 'Failed to update product',
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title={`Edit SKU: ${formData.sku || id}`}
        subtitle="Update inventory, metal specifications and pricing"
        breadcrumbs={[
          { label: 'Products', to: '/admin/products' },
          { label: formData.sku || 'Product', to: `/admin/products/${id}` },
          { label: 'Edit' }
        ]}
        actions={
          <>
            <Link
              to={`/admin/products/${id}`}
              className="flex items-center space-x-1.5 px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-medium transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Cancel</span>
            </Link>
            <button
              onClick={handleSave}
              disabled={isSaving || loading}
              className="flex items-center space-x-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-lg text-xs transition-colors shadow-xs disabled:opacity-50"
            >
              {isSaving ? (
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Save className="w-3.5 h-3.5" />
              )}
              <span>{isSaving ? 'Saving...' : 'Save Changes'}</span>
            </button>
          </>
        }
      />

      {notification && (
        <div
          className={`p-3.5 rounded-xl flex items-center space-x-2 text-xs ${
            notification.type === 'error'
              ? 'bg-rose-50 text-rose-800 border border-rose-200'
              : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
          }`}
        >
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
          <span>{notification.message}</span>
        </div>
      )}

      <form onSubmit={handleSave} className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs space-y-4 max-w-2xl text-xs">
        <div>
          <label className="block text-stone-700 font-semibold mb-1">Product Title *</label>
          <input
            type="text"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-stone-700 font-semibold mb-1">SKU Code</label>
            <input
              type="text"
              name="sku"
              value={formData.sku}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden font-mono bg-stone-50"
            />
          </div>
          <div>
            <label className="block text-stone-700 font-semibold mb-1">Category</label>
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-stone-700 font-semibold mb-1">Net Metal Weight (g)</label>
            <input
              type="text"
              name="netWeight"
              value={formData.netWeight}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden"
            />
          </div>
          <div>
            <label className="block text-stone-700 font-semibold mb-1">Diamond Total Carat</label>
            <input
              type="text"
              name="diamondWeight"
              value={formData.diamondWeight}
              onChange={handleChange}
              placeholder="e.g. 1.25 ct (Solitaire)"
              className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-stone-700 font-semibold mb-1">Retail MRP (₹) *</label>
            <input
              type="number"
              name="sellingPrice"
              required
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
          <label className="block text-stone-700 font-semibold mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden"
          />
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
            <option value="Low Stock">Low Stock</option>
            <option value="Out of Stock">Out of Stock</option>
            <option value="Draft">Draft</option>
            <option value="Archived">Archived</option>
          </select>
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
      </form>
    </div>
  );
};

export default ProductEdit;
