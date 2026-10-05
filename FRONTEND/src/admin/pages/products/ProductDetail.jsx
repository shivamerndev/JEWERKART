import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Edit,
  Trash2,
  ShieldCheck,
  RefreshCw,
  AlertCircle,
} from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';
import { useProduct } from '../../../hooks/useProduct';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    handleGetProductById,
    handleDeleteProduct,
    selectedProduct,
    loading,
  } = useProduct();

  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (id) {
      handleGetProductById(id);
    }
  }, [id, handleGetProductById]);

  const handleDelete = async () => {
    const prodId = selectedProduct?._id || selectedProduct?.id || id;
    if (!window.confirm(`Are you sure you want to delete SKU "${selectedProduct?.sku || selectedProduct?.name}"?`)) {
      return;
    }

    try {
      await handleDeleteProduct(prodId);
      navigate('/admin/products');
    } catch (err) {
      setNotification({
        type: 'error',
        message: err.message || 'Failed to delete product',
      });
    }
  };

  if (loading && !selectedProduct) {
    return (
      <div className="p-16 text-center text-stone-500 flex flex-col items-center justify-center space-y-3">
        <RefreshCw className="w-8 h-8 animate-spin text-amber-500" />
        <p className="text-sm font-medium">Fetching jewelry specifications...</p>
      </div>
    );
  }

  const product = selectedProduct || {
    id: id || 'prod-001',
    sku: 'JW-RNG-041',
    title: 'Royal Solitaire 1.5ct Diamond Ring',
    category: 'Rings',
    collection: 'Solitaire Dreams',
    price: 145000,
    metalPurity: '18K White Gold (750)',
    grossWeight: '4.820 g',
    netWeight: '4.520 g',
    diamondWeight: '1.50 ct (Solitaire)',
    diamondClarity: 'VVS1 / Colour E',
    hallmarkNo: 'BIS-916-MUM-84920',
    stock: 8,
    warehouse: 'Mumbai Vault B-12',
    status: 'Active',
    totalRevenue: '₹48,20,000',
    hsn: '71131910',
    gstRate: '3%'
  };

  const title = product.name || product.title || 'Fine Jewelry SKU';
  const sku = product.sku || 'SKU-PENDING';
  const price = product.price || product.sellingPrice || 0;
  const purity = product.purity || product.metalPurity || product.metalType || (product.metal ? `${product.metal} Gold` : '18K Gold');
  const grossWt = product.grossWeight || '4.520 g';
  const netWt = product.netWeight || product.netGoldWeight || '4.200 g';
  const diamondCarat = product.diamondWeight || product.diamondCarat || 'Natural Diamond Inlay';
  const diamondClarity = product.diamondClarity || 'VVS1 / EF';
  const hallmarkNo = product.hallmarkNo || 'BIS-916-MUM-84920';
  const stock = product.stock !== undefined ? product.stock : product.stockQuantity || 0;
  const warehouse = product.warehouse || 'Mumbai Vault B-12';
  const status = product.status || 'Active';
  const hsn = product.hsnCode || product.hsn || '71131910';
  const image = product.image || 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop';
  const currentId = product._id || product.id || id;

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title={title}
        subtitle={`SKU: ${sku} • Certified Precious Jewelry Item`}
        breadcrumbs={[
          { label: 'Products', to: '/admin/products' },
          { label: sku }
        ]}
        actions={
          <>
            <Link
              to="/admin/products"
              className="flex items-center space-x-1.5 px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-medium transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </Link>
            <button
              onClick={handleDelete}
              className="flex items-center space-x-1.5 px-3 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold rounded-lg text-xs transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Delete</span>
            </button>
            <Link
              to={`/admin/products/${currentId}/edit`}
              className="flex items-center space-x-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-lg text-xs transition-colors shadow-xs"
            >
              <Edit className="w-3.5 h-3.5" />
              <span>Edit Product</span>
            </Link>
          </>
        }
      />

      {notification && (
        <div className="p-3 bg-rose-50 text-rose-800 border border-rose-200 rounded-xl text-xs flex items-center space-x-2">
          <AlertCircle className="w-4 h-4 text-rose-600" />
          <span>{notification.message}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-xs">
        {/* Main Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Specs card */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs">
            <h3 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-3 flex items-center justify-between">
              <span>Bullion & Gemstone Specifications</span>
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-semibold text-[10px] flex items-center">
                <ShieldCheck className="w-3 h-3 mr-1" /> BIS Hallmarked
              </span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div>
                <span className="text-stone-400 block text-[11px]">Metal Purity</span>
                <span className="font-semibold text-stone-800 text-xs">{purity}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[11px]">Gross Weight</span>
                <span className="font-semibold text-stone-800 text-xs font-mono">{grossWt}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[11px]">Net Metal Wt.</span>
                <span className="font-semibold text-stone-800 text-xs font-mono">{netWt}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[11px]">Diamond Carat</span>
                <span className="font-semibold text-stone-800 text-xs">{diamondCarat}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[11px]">Clarity & Cut</span>
                <span className="font-semibold text-stone-800 text-xs">{diamondClarity}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[11px]">Hallmark Certificate</span>
                <span className="font-mono text-stone-800 text-xs">{hallmarkNo}</span>
              </div>
            </div>
          </div>

          {/* Pricing & Commercials */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs">
            <h3 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-3">
              Commercial Breakdown & Taxation
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div>
                <span className="text-stone-400 block text-[11px]">Current Retail MRP</span>
                <span className="text-base font-bold text-stone-900 font-mono">
                  ₹{Number(price).toLocaleString('en-IN')}
                </span>
              </div>
              <div>
                <span className="text-stone-400 block text-[11px]">HSN Code</span>
                <span className="font-mono text-stone-800 text-xs font-semibold">{hsn}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[11px]">Precious Metal GST</span>
                <span className="font-semibold text-stone-800 text-xs">3%</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[11px]">Estimated Value</span>
                <span className="font-mono font-bold text-emerald-700 text-xs">
                  ₹{(Number(price) * (stock || 1)).toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          </div>

          {/* Narrative / Description */}
          {product.description && (
            <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs space-y-2">
              <h3 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-2">
                Curator Description
              </h3>
              <p className="text-stone-600 leading-relaxed text-xs">
                {product.description}
              </p>
            </div>
          )}
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          {/* Visual Showcase */}
          <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-xs">
            <h3 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-2 mb-3">
              Jewellery Visual Asset
            </h3>
            <div className="rounded-lg overflow-hidden border border-stone-200 aspect-square bg-stone-100">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop';
                }}
              />
            </div>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-2">
              Vault & Inventory
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between py-1 border-b border-stone-50">
                <span className="text-stone-500">Stock on Hand</span>
                <span className="font-bold text-stone-900 font-mono">{stock} units</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-50">
                <span className="text-stone-500">Vault Location</span>
                <span className="font-semibold text-stone-800">{warehouse}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-50">
                <span className="text-stone-500">Status</span>
                <span
                  className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${
                    status === 'Active'
                      ? 'bg-emerald-100 text-emerald-800'
                      : status === 'Low Stock'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-rose-100 text-rose-800'
                  }`}
                >
                  {status}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
