import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Edit, Sparkles, CheckCircle2, ShieldCheck, Box, Tag, ArrowUpRight } from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';

const ProductDetail = () => {
  const { id } = useParams();

  // Mock product details
  const product = {
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
    totalSold: 34,
    totalRevenue: '₹48,20,000',
    hsn: '71131910',
    gstRate: '3%'
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title={product.title}
        subtitle={`SKU: ${product.sku} • Certified Precious Jewelry Item`}
        breadcrumbs={[
          { label: 'Products', to: '/admin/products' },
          { label: product.sku }
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
            <Link
              to={`/admin/products/${product.id}/edit`}
              className="flex items-center space-x-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-lg text-xs transition-colors shadow-xs"
            >
              <Edit className="w-3.5 h-3.5" />
              <span>Edit Product</span>
            </Link>
          </>
        }
      />

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
                <span className="font-semibold text-stone-800 text-xs">{product.metalPurity}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[11px]">Gross Weight</span>
                <span className="font-semibold text-stone-800 text-xs font-mono">{product.grossWeight}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[11px]">Net Metal Wt.</span>
                <span className="font-semibold text-stone-800 text-xs font-mono">{product.netWeight}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[11px]">Diamond Carat</span>
                <span className="font-semibold text-stone-800 text-xs">{product.diamondWeight}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[11px]">Clarity & Cut</span>
                <span className="font-semibold text-stone-800 text-xs">{product.diamondClarity}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[11px]">Hallmark Certificate</span>
                <span className="font-mono text-stone-800 text-xs">{product.hallmarkNo}</span>
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
                <span className="text-base font-bold text-stone-900 font-mono">₹{product.price.toLocaleString('en-IN')}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[11px]">HSN Code</span>
                <span className="font-mono text-stone-800 text-xs font-semibold">{product.hsn}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[11px]">Precious Metal GST</span>
                <span className="font-semibold text-stone-800 text-xs">{product.gstRate}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[11px]">Lifetime Sales</span>
                <span className="font-mono font-bold text-emerald-700 text-xs">{product.totalRevenue}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-2">
              Vault & Inventory
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between py-1 border-b border-stone-50">
                <span className="text-stone-500">Stock on Hand</span>
                <span className="font-bold text-stone-900 font-mono">{product.stock} units</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-50">
                <span className="text-stone-500">Vault Location</span>
                <span className="font-semibold text-stone-800">{product.warehouse}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-50">
                <span className="text-stone-500">Status</span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full font-bold text-[10px]">
                  {product.status}
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
