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

export const getProductByIdApi = async (id) => {
  const response = await api.get(`/products/id/${id}`);
  return response.data;
};

export const getProductFiltersApi = async () => {
  const response = await api.get("/products/filters");
  return response.data;
};

export const createProductApi = async (productData) => {
  const response = await api.post("/products", productData);
  return response.data;
};

export const updateProductApi = async (id, productData) => {
  const response = await api.put(`/products/${id}`, productData);
  return response.data;
};

export const deleteProductApi = async (id) => {
  const response = await api.delete(`/products/${id}`);
  return response.data;
};

export default {
  getProductsApi,
  getProductBySlugApi,
  getProductByIdApi,
  getProductFiltersApi,
  createProductApi,
  updateProductApi,
  deleteProductApi,
};
