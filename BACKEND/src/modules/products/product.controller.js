import * as productService from "./product.service.js";

/**
 * Product Controller
 * Rules:
 * 1. Thin HTTP layer.
 * 2. Reads data from req.
 * 3. Calls service functions (never repository directly).
 * 4. Returns JSON HTTP responses.
 */

export const getProducts = async (req, res) => {
  try {
    const data = await productService.handleGetProducts(req.query);
    return res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch products",
    });
  }
};

export const getProductBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const data = await productService.handleGetProductBySlug(slug);
    return res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data,
    });
  } catch (error) {
    const statusCode = error.statusCode || 500;
    return res.status(statusCode).json({
      success: false,
      message: error.message || "Failed to fetch product",
    });
  }
};

export const getFilterOptions = async (req, res) => {
  try {
    const data = await productService.handleGetFilterOptions();
    return res.status(200).json({
      success: true,
      message: "Filter options fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch filter options",
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await productService.handleGetProductById(id);
    return res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data,
    });
  } catch (error) {
    const statusCode = error.statusCode || 500;
    return res.status(statusCode).json({
      success: false,
      message: error.message || "Failed to fetch product",
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const data = await productService.handleCreateProduct(req.body);
    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      data,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message || "Failed to create product",
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await productService.handleUpdateProduct(id, req.body);
    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data,
    });
  } catch (error) {
    const statusCode = error.statusCode || 400;
    return res.status(statusCode).json({
      success: false,
      message: error.message || "Failed to update product",
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await productService.handleDeleteProduct(id);
    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data,
    });
  } catch (error) {
    const statusCode = error.statusCode || 400;
    return res.status(statusCode).json({
      success: false,
      message: error.message || "Failed to delete product",
    });
  }
};

export default {
  getProducts,
  getProductBySlug,
  getProductById,
  getFilterOptions,
  createProduct,
  updateProduct,
  deleteProduct,
};
