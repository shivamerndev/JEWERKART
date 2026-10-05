/**
 * Product Validator
 * Rules:
 * 1. Validates incoming request params, query, or body.
 * 2. Does NOT query database or contain business logic.
 * 3. Thin Express middleware.
 */

export const validateGetProducts = (req, res, next) => {
  const { minPrice, maxPrice, page, limit } = req.query;

  if (minPrice !== undefined && isNaN(Number(minPrice))) {
    return res.status(400).json({
      success: false,
      message: "minPrice must be a valid number",
    });
  }

  if (maxPrice !== undefined && isNaN(Number(maxPrice))) {
    return res.status(400).json({
      success: false,
      message: "maxPrice must be a valid number",
    });
  }

  if (minPrice !== undefined && maxPrice !== undefined && Number(minPrice) > Number(maxPrice)) {
    return res.status(400).json({
      success: false,
      message: "minPrice cannot be greater than maxPrice",
    });
  }

  if (page !== undefined && (isNaN(Number(page)) || Number(page) < 1)) {
    return res.status(400).json({
      success: false,
      message: "page must be a positive integer",
    });
  }

  if (limit !== undefined && (isNaN(Number(limit)) || Number(limit) < 1)) {
    return res.status(400).json({
      success: false,
      message: "limit must be a positive integer",
    });
  }

  next();
};

export const validateGetProductBySlug = (req, res, next) => {
  const { slug } = req.params;
  if (!slug || typeof slug !== "string" || !slug.trim()) {
    return res.status(400).json({
      success: false,
      message: "A valid product slug is required",
    });
  }
  next();
};

export const validateProductId = (req, res, next) => {
  const { id } = req.params;
  if (!id || typeof id !== "string" || !id.trim()) {
    return res.status(400).json({
      success: false,
      message: "A valid product ID or slug is required",
    });
  }
  next();
};

export const validateCreateProduct = (req, res, next) => {
  const { name, title, price, sellingPrice } = req.body;

  const resolvedName = name || title;
  const resolvedPrice = price !== undefined ? price : sellingPrice;

  if (!resolvedName || typeof resolvedName !== "string" || !resolvedName.trim()) {
    return res.status(400).json({ success: false, message: "Product name or title is required" });
  }

  if (resolvedPrice === undefined || isNaN(Number(resolvedPrice)) || Number(resolvedPrice) < 0) {
    return res.status(400).json({ success: false, message: "Valid positive product price is required" });
  }

  next();
};

export const validateUpdateProduct = (req, res, next) => {
  const { id } = req.params;
  if (!id || typeof id !== "string" || !id.trim()) {
    return res.status(400).json({
      success: false,
      message: "A valid product ID is required",
    });
  }

  const { price, sellingPrice } = req.body;
  const resolvedPrice = price !== undefined ? price : sellingPrice;
  if (resolvedPrice !== undefined && (isNaN(Number(resolvedPrice)) || Number(resolvedPrice) < 0)) {
    return res.status(400).json({
      success: false,
      message: "If provided, price must be a valid positive number",
    });
  }

  next();
};

export default {
  validateGetProducts,
  validateGetProductBySlug,
  validateProductId,
  validateCreateProduct,
  validateUpdateProduct,
};
