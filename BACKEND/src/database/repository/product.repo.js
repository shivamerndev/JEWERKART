import Product from "../models/product.model.js";

/**
 * Product Repository
 * Mandatory Architectural Rule: All database operations for Products MUST be executed here.
 */

export const findProducts = async (filter = {}, options = {}) => {
  const { sort = { createdAt: -1 }, skip = 0, limit = 50 } = options;
  return Product.find(filter)
    .sort(sort)
    .skip(skip)
    .limit(limit)
    .lean();
};

export const countProducts = async (filter = {}) => {
  return Product.countDocuments(filter);
};

export const findProductBySlug = async (slug) => {
  return Product.findOne({ slug: slug.toLowerCase() }).lean();
};

export const findProductById = async (id) => {
  return Product.findById(id).lean();
};

export const createProduct = async (data) => {
  return Product.create(data);
};

export const updateProductById = async (id, data) => {
  return Product.findByIdAndUpdate(id, data, { new: true, runValidators: true }).lean();
};

export const deleteProductById = async (id) => {
  return Product.findByIdAndDelete(id).lean();
};

export const getDistinctFilterValues = async () => {
  const [productTypes, shopFor, colors, metals, stones, styles] = await Promise.all([
    Product.distinct("productType"),
    Product.distinct("shopFor"),
    Product.distinct("color"),
    Product.distinct("metal"),
    Product.distinct("stone"),
    Product.distinct("style"),
  ]);

  return {
    productTypes,
    shopFor,
    colors,
    metals,
    stones,
    styles,
  };
};

export default {
  findProducts,
  countProducts,
  findProductBySlug,
  findProductById,
  createProduct,
  updateProductById,
  deleteProductById,
  getDistinctFilterValues,
};
