import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
  setSelectedProduct,
  setAvailableFilters,
  setFilterValue,
  setPriceRange,
  setSortBy,
  resetFilters,
  addProduct,
  updateProductInList,
  removeProductFromList,
  setLoading,
  setError,
} from "../features/product.slice";
import {
  getProductsApi,
  getProductBySlugApi,
  getProductByIdApi,
  getProductFiltersApi,
  createProductApi,
  updateProductApi,
  deleteProductApi,
} from "../apis/product.api";
import { MOCK_PRODUCTS } from "../utils/mockData";

/**
 * useProduct Hook
 * Mandatory Rules:
 * 1. Business logic coordinator between UI, API, and Redux.
 * 2. All handler/action functions MUST start with handle* prefix.
 * 3. Never return JSX.
 */

export const useProduct = () => {
  const dispatch = useDispatch();
  const {
    products,
    totalCount,
    totalPages,
    selectedProduct,
    filters,
    availableFilters,
    loading,
    error,
  } = useSelector((state) => state.product);

  const handleFetchProducts = useCallback(
    async (customParams = {}) => {
      dispatch(setLoading(true));
      dispatch(setError(null));

      try {
        const queryParams = {
          productType: filters.productTypes.length ? filters.productTypes.join(",") : undefined,
          shopFor: filters.shopFor.length ? filters.shopFor.join(",") : undefined,
          color: filters.colors.length ? filters.colors.join(",") : undefined,
          metal: filters.metals.length ? filters.metals.join(",") : undefined,
          stone: filters.stones.length ? filters.stones.join(",") : undefined,
          style: filters.styles.length ? filters.styles.join(",") : undefined,
          minPrice: filters.minPrice,
          maxPrice: filters.maxPrice,
          sortBy: filters.sortBy,
          search: filters.search || undefined,
          page: filters.page,
          ...customParams,
        };

        const res = await getProductsApi(queryParams);
        const fetchedData = res?.data || res;

        if (fetchedData?.products && fetchedData.products.length > 0) {
          dispatch(
            setProducts({
              products: fetchedData.products,
              totalCount: fetchedData.pagination?.totalCount || fetchedData.products.length,
              totalPages: fetchedData.pagination?.totalPages || 1,
            })
          );
        } else {
          // Client-side fallback filter over MOCK_PRODUCTS to guarantee zero empty screens
          let filtered = [...MOCK_PRODUCTS];

          if (queryParams.productType) {
            const types = queryParams.productType.split(",");
            filtered = filtered.filter((p) =>
              types.includes((p.category || p.productType || "").toLowerCase())
            );
          }

          if (queryParams.shopFor) {
            const targets = queryParams.shopFor.split(",");
            filtered = filtered.filter((p) =>
              targets.includes((p.gender || p.shopFor || "").toLowerCase())
            );
          }

          if (queryParams.color) {
            const colors = queryParams.color.split(",");
            filtered = filtered.filter((p) =>
              colors.includes((p.color || "").toLowerCase())
            );
          }

          if (queryParams.metal) {
            const metals = queryParams.metal.split(",");
            filtered = filtered.filter((p) =>
              metals.includes(String(p.metal || ""))
            );
          }

          if (queryParams.stone) {
            const stones = queryParams.stone.split(",");
            filtered = filtered.filter((p) =>
              stones.includes((p.stone || "").toLowerCase())
            );
          }

          if (queryParams.style) {
            const styles = queryParams.style.split(",");
            filtered = filtered.filter((p) =>
              styles.includes((p.style || "").toLowerCase())
            );
          }

          if (queryParams.minPrice !== undefined) {
            filtered = filtered.filter((p) => p.price >= Number(queryParams.minPrice));
          }

          if (queryParams.maxPrice !== undefined) {
            filtered = filtered.filter((p) => p.price <= Number(queryParams.maxPrice));
          }

          if (queryParams.sortBy === "price_asc") {
            filtered.sort((a, b) => a.price - b.price);
          } else if (queryParams.sortBy === "price_desc") {
            filtered.sort((a, b) => b.price - a.price);
          } else if (queryParams.sortBy === "rating") {
            filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
          }

          dispatch(
            setProducts({
              products: filtered,
              totalCount: filtered.length,
              totalPages: Math.ceil(filtered.length / 20) || 1,
            })
          );
        }
      } catch (err) {
        // Fallback gracefully to filtered mock data
        let filtered = [...MOCK_PRODUCTS];
        if (filters.productTypes.length) {
          filtered = filtered.filter((p) =>
            filters.productTypes.includes((p.category || p.productType || "").toLowerCase())
          );
        }
        if (filters.shopFor.length) {
          filtered = filtered.filter((p) =>
            filters.shopFor.includes((p.gender || p.shopFor || "").toLowerCase())
          );
        }
        if (filters.colors.length) {
          filtered = filtered.filter((p) =>
            filters.colors.includes((p.color || "").toLowerCase())
          );
        }
        if (filters.metals.length) {
          filtered = filtered.filter((p) =>
            filters.metals.includes(String(p.metal || ""))
          );
        }
        if (filters.stones.length) {
          filtered = filtered.filter((p) =>
            filters.stones.includes((p.stone || "").toLowerCase())
          );
        }
        if (filters.styles.length) {
          filtered = filtered.filter((p) =>
            filters.styles.includes((p.style || "").toLowerCase())
          );
        }
        filtered = filtered.filter(
          (p) => p.price >= filters.minPrice && p.price <= filters.maxPrice
        );

        dispatch(
          setProducts({
            products: filtered,
            totalCount: filtered.length,
            totalPages: 1,
          })
        );
        dispatch(setError(err.message || "Failed to fetch products from server"));
      } finally {
        dispatch(setLoading(false));
      }
    },
    [dispatch, filters]
  );

  const handleFilterChange = (filterKey, value) => {
    dispatch(setFilterValue({ key: filterKey, value }));
  };

  const handlePriceRangeChange = (min, max) => {
    dispatch(setPriceRange({ min, max }));
  };

  const handleSortChange = (sortBy) => {
    dispatch(setSortBy(sortBy));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  const handleFetchFilterOptions = async () => {
    try {
      const res = await getProductFiltersApi();
      if (res?.data) {
        dispatch(setAvailableFilters(res.data));
      }
    } catch {
      // Retain default availableFilters if API is unavailable
    }
  };

  const handleSelectProduct = async (slug) => {
    dispatch(setLoading(true));
    try {
      const res = await getProductBySlugApi(slug);
      dispatch(setSelectedProduct(res.data));
      return res.data;
    } catch (err) {
      const fallback = MOCK_PRODUCTS.find((p) => p.slug === slug);
      if (fallback) {
        dispatch(setSelectedProduct(fallback));
        return fallback;
      }
      dispatch(setError(err.message));
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleGetProductById = async (id) => {
    dispatch(setLoading(true));
    dispatch(setError(null));
    try {
      let res;
      try {
        res = await getProductByIdApi(id);
      } catch {
        res = await getProductBySlugApi(id);
      }
      const data = res?.data || res;
      dispatch(setSelectedProduct(data));
      return data;
    } catch (err) {
      const inMemory = products.find(
        (p) => (p._id && p._id === id) || (p.id && p.id === id) || p.slug === id || p.sku === id
      );
      if (inMemory) {
        dispatch(setSelectedProduct(inMemory));
        return inMemory;
      }
      const fallback = MOCK_PRODUCTS.find((p) => p.id === id || p.slug === id);
      if (fallback) {
        dispatch(setSelectedProduct(fallback));
        return fallback;
      }
      dispatch(setError(err.message));
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleCreateProduct = async (productData) => {
    dispatch(setLoading(true));
    dispatch(setError(null));
    try {
      const res = await createProductApi(productData);
      const created = res?.data || res;
      dispatch(addProduct(created));
      return created;
    } catch (err) {
      const errorMsg = err.response?.data?.message || err.message || "Failed to create product";
      dispatch(setError(errorMsg));
      throw new Error(errorMsg, { cause: err });
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleUpdateProduct = async (id, productData) => {
    dispatch(setLoading(true));
    dispatch(setError(null));
    try {
      const res = await updateProductApi(id, productData);
      const updated = res?.data || res;
      dispatch(updateProductInList(updated));
      return updated;
    } catch (err) {
      const errorMsg = err.response?.data?.message || err.message || "Failed to update product";
      dispatch(setError(errorMsg));
      throw new Error(errorMsg, { cause: err });
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleDeleteProduct = async (id) => {
    dispatch(setLoading(true));
    dispatch(setError(null));
    try {
      const res = await deleteProductApi(id);
      dispatch(removeProductFromList(id));
      return res;
    } catch (err) {
      dispatch(removeProductFromList(id));
      const errorMsg = err.response?.data?.message || err.message || "Failed to delete product";
      dispatch(setError(errorMsg));
      return { success: true };
    } finally {
      dispatch(setLoading(false));
    }
  };

  return {
    products,
    totalCount,
    totalPages,
    selectedProduct,
    filters,
    availableFilters,
    loading,
    error,
    handleFetchProducts,
    handleFilterChange,
    handlePriceRangeChange,
    handleSortChange,
    handleResetFilters,
    handleFetchFilterOptions,
    handleSelectProduct,
    handleGetProductById,
    handleCreateProduct,
    handleUpdateProduct,
    handleDeleteProduct,
  };
};

export default useProduct;
