import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Plus,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  Package,
} from 'lucide-react';
import AdminPageHeader from '../../components/AdminPageHeader';
import { useProduct } from '../../../hooks/useProduct';

const ProductList = () => {
  const {
    products,
    loading,
    handleFetchProducts,
    handleDeleteProduct,
  } = useProduct();

  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [deletingId, setDeletingId] = useState(null);
  const [notification, setNotification] = useState(null);

  // Load products on initial render
  useEffect(() => {
    handleFetchProducts();
  }, [handleFetchProducts]);

  // Client-side filtering over fetched products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const name = (p.name || p.title || '').toLowerCase();
      const sku = (p.sku || '').toLowerCase();
      const q = search.toLowerCase().trim();
      const matchesSearch = !q || name.includes(q) || sku.includes(q);

      const cat = (p.categoryName || p.category || p.productType || '').toLowerCase();
      const matchesCategory =
        categoryFilter === 'All' ||
        cat.includes(categoryFilter.toLowerCase()) ||
        (categoryFilter === 'Bangles' && (cat.includes('bangle') || cat.includes('bracelet'))) ||
        (categoryFilter === 'Silver' && cat.includes('silver'));

      const stockNum = Number(p.stock !== undefined ? p.stock : p.stockQuantity || 0);
      let calculatedStatus = p.status || 'Active';
      if (stockNum === 0) calculatedStatus = 'Out of Stock';
      else if (stockNum <= 3) calculatedStatus = 'Low Stock';

      const matchesStatus =
        statusFilter === 'All' ||
        calculatedStatus.toLowerCase() === statusFilter.toLowerCase();

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [products, search, categoryFilter, statusFilter]);

  const onDeleteConfirm = async (prod) => {
    const id = prod._id || prod.id;
    if (!window.confirm(`Are you sure you want to remove "${prod.name || prod.title}" from catalog?`)) {
      return;
    }

    try {
      setDeletingId(id);
      await handleDeleteProduct(id);
      setNotification({
        type: 'success',
        message: `Product SKU "${prod.sku || prod.name}" deleted successfully.`,
      });
      setTimeout(() => setNotification(null), 4000);
    } catch (err) {
      setNotification({
        type: 'error',
        message: err.message || 'Failed to delete product',
      });
      setTimeout(() => setNotification(null), 4000);
    } finally {
      setDeletingId(null);
    }
  };

  const handleExportCSV = () => {
    if (!filteredProducts.length) return;
    const headers = ['SKU', 'Title', 'Category', 'Purity', 'Gross Weight', 'Price (INR)', 'Stock', 'Status'];
    const rows = filteredProducts.map((p) => [
      `"${p.sku || ''}"`,
      `"${(p.name || p.title || '').replace(/"/g, '""')}"`,
      `"${p.categoryName || p.category || p.productType || ''}"`,
      `"${p.purity || p.metalType || ''}"`,
      `"${p.grossWeight || ''}"`,
      p.price || p.sellingPrice || 0,
      p.stock !== undefined ? p.stock : p.stockQuantity || 0,
      `"${p.status || 'Active'}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `jewerkart_catalog_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Jewelry Catalog & Products"
        subtitle="Manage ERP jewelry inventory, precious metal specifications & SKU pricing"
        breadcrumbs={[{ label: 'Products' }]}
        actions={
          <>
            <button
              onClick={() => handleFetchProducts()}
              disabled={loading}
              className="flex items-center space-x-1.5 px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-medium transition-colors"
              title="Refresh Catalog Data"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
            <button
              onClick={handleExportCSV}
              className="flex items-center space-x-1.5 px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-medium transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
            <Link
              to="/admin/products/new"
              className="flex items-center space-x-1.5 px-3.5 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-semibold rounded-lg text-xs transition-colors shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add New Product</span>
            </Link>
          </>
        }
      />

      {/* Notification Toast */}
      {notification && (
        <div
          className={`p-3 rounded-xl flex items-center justify-between text-xs transition-all ${
            notification.type === 'success'
              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
              : 'bg-rose-50 text-rose-800 border border-rose-200'
          }`}
        >
          <div className="flex items-center space-x-2">
            {notification.type === 'success' ? (
              <CheckCircle className="w-4 h-4 text-emerald-600" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-600" />
            )}
            <span className="font-medium">{notification.message}</span>
          </div>
          <button
            onClick={() => setNotification(null)}
            className="text-stone-400 hover:text-stone-700 text-xs px-2"
          >
            ✕
          </button>
        </div>
      )}

      {/* Filter Ribbon */}
      <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-xs flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Search SKU or product title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:border-amber-500 focus:bg-white"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
          <div className="flex items-center text-xs text-stone-500 font-medium space-x-1">
            <Filter className="w-3.5 h-3.5 text-stone-400" />
            <span>Filters:</span>
          </div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="text-xs bg-stone-50 border border-stone-200 rounded-lg px-2.5 py-1.5 focus:outline-hidden focus:border-amber-500 text-stone-700"
          >
            <option value="All">All Categories</option>
            <option value="Rings">Rings</option>
            <option value="Necklaces">Necklaces</option>
            <option value="Bangles">Bangles & Bracelets</option>
            <option value="Earrings">Earrings</option>
            <option value="Pendants">Pendants</option>
            <option value="Silver">Silver Collection</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="text-xs bg-stone-50 border border-stone-200 rounded-lg px-2.5 py-1.5 focus:outline-hidden focus:border-amber-500 text-stone-700"
          >
            <option value="All">All Stock Statuses</option>
            <option value="Active">In Stock</option>
            <option value="Low Stock">Low Stock Alert</option>
            <option value="Out of Stock">Out of Stock</option>
            <option value="Draft">Draft</option>
          </select>

          <span className="text-[11px] font-mono text-stone-500 pl-1">
            Total: <b>{filteredProducts.length}</b>
          </span>
        </div>
      </div>

      {/* Catalog Table */}
      <div className="bg-white border border-stone-200 rounded-xl shadow-xs overflow-hidden">
        {loading && products.length === 0 ? (
          <div className="p-12 text-center text-stone-400 flex flex-col items-center justify-center space-y-3">
            <RefreshCw className="w-6 h-6 animate-spin text-amber-500" />
            <span className="text-xs font-medium text-stone-600">Loading catalog items...</span>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="p-12 text-center text-stone-400 flex flex-col items-center justify-center space-y-2">
            <Package className="w-8 h-8 text-stone-300" />
            <p className="text-xs font-semibold text-stone-700">No products matching current criteria</p>
            <p className="text-[11px] text-stone-400">Try adjusting your search terms or filter selection.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-50 text-stone-500 font-semibold border-b border-stone-200">
                  <th className="p-3 pl-5">SKU & Item Details</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Metal / Purity</th>
                  <th className="p-3">Gross Wt.</th>
                  <th className="p-3">MRP (INR)</th>
                  <th className="p-3">Vault Stock</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 pr-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {filteredProducts.map((prod) => {
                  const id = prod._id || prod.id;
                  const price = prod.price || prod.sellingPrice || 0;
                  const stock = prod.stock !== undefined ? prod.stock : prod.stockQuantity || 0;
                  let displayStatus = prod.status || 'Active';
                  if (stock === 0) displayStatus = 'Out of Stock';
                  else if (stock <= (prod.lowStockThreshold || 3)) displayStatus = 'Low Stock';

                  return (
                    <tr key={id} className="hover:bg-amber-50/20 transition-colors">
                      <td className="p-3 pl-5">
                        <div className="flex items-center space-x-3">
                          {prod.image ? (
                            <img
                              src={prod.image}
                              alt={prod.name || prod.title}
                              className="w-10 h-10 rounded-lg object-cover border border-stone-200 shrink-0"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center font-serif font-bold text-amber-800 shrink-0">
                              ✨
                            </div>
                          )}
                          <div>
                            <Link
                              to={`/admin/products/${id}`}
                              className="font-semibold text-stone-900 hover:text-amber-700 transition-colors line-clamp-1"
                            >
                              {prod.name || prod.title}
                            </Link>
                            <span className="font-mono text-[10px] text-stone-400 block">
                              {prod.sku || 'SKU-PENDING'}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="p-3 font-medium text-stone-700">
                        {prod.categoryName || prod.category || prod.productType || 'Fine Jewelry'}
                      </td>
                      <td className="p-3">
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-stone-100 text-stone-800">
                          {prod.purity || prod.metalType || (prod.metal ? `${prod.metal} Fine` : '18K Gold')}
                        </span>
                      </td>
                      <td className="p-3 font-mono text-stone-600">
                        {prod.grossWeight || '—'}
                      </td>
                      <td className="p-3 font-mono font-bold text-stone-900">
                        ₹{Number(price).toLocaleString('en-IN')}
                      </td>
                      <td className="p-3 font-semibold">
                        <span className={stock <= 2 ? 'text-rose-600 font-bold' : 'text-stone-800'}>
                          {stock} units
                        </span>
                      </td>
                      <td className="p-3">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            displayStatus === 'Active'
                              ? 'bg-emerald-100 text-emerald-800'
                              : displayStatus === 'Low Stock'
                              ? 'bg-amber-100 text-amber-800'
                              : displayStatus === 'Draft'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-rose-100 text-rose-800'
                          }`}
                        >
                          {displayStatus}
                        </span>
                      </td>
                      <td className="p-3 pr-5 text-right">
                        <div className="flex items-center justify-end space-x-1.5">
                          <Link
                            to={`/admin/products/${id}`}
                            className="p-1.5 text-stone-400 hover:text-stone-900 rounded-md hover:bg-stone-100 transition-colors"
                            title="View Details"
                          >
                            <Eye className="w-4 h-4" />
                          </Link>
                          <Link
                            to={`/admin/products/${id}/edit`}
                            className="p-1.5 text-stone-400 hover:text-amber-700 rounded-md hover:bg-amber-50 transition-colors"
                            title="Edit Product"
                          >
                            <Edit className="w-4 h-4" />
                          </Link>
                          <button
                            onClick={() => onDeleteConfirm(prod)}
                            disabled={deletingId === id}
                            className="p-1.5 text-stone-400 hover:text-rose-600 rounded-md hover:bg-rose-50 transition-colors disabled:opacity-50"
                            title="Delete SKU"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
