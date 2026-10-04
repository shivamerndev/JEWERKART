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

export const validateCreateProduct = (req, res, next) => {
  const { name, price, description, productType, shopFor, color, metal, stone, style } = req.body;

  if (!name || typeof name !== "string") {
    return res.status(400).json({ success: false, message: "Product name is required" });
  }

  if (price === undefined || isNaN(Number(price)) || Number(price) < 0) {
    return res.status(400).json({ success: false, message: "Valid product price is required" });
  }

  if (!description) {
    return res.status(400).json({ success: false, message: "Product description is required" });
  }

  if (!productType || !shopFor || !color || !metal || !stone || !style) {
    return res.status(400).json({
      success: false,
      message: "Required filter attributes (productType, shopFor, color, metal, stone, style) must be provided",
    });
  }

  next();
};

export default {
  validateGetProducts,
  validateGetProductBySlug,
  validateCreateProduct,
};
