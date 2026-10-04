import { api } from "../utils/axios";

/**
 * Product API
 * Mandatory Rule: ONLY handles HTTP requests to the backend.
 * Never touches Redux or UI.
 */

export const getProductsApi = async (params = {}) => {
  const response = await api.get("/products", { params });
  return response.data;
};

export const getProductBySlugApi = async (slug) => {
  const response = await api.get(`/products/${slug}`);
  return response.data;
};

export const getProductFiltersApi = async () => {
  const response = await api.get("/products/filters");
  return response.data;
};

export default {
  getProductsApi,
  getProductBySlugApi,
  getProductFiltersApi,
};
