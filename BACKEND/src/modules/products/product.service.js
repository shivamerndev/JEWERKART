import * as productRepo from "../../database/repository/product.repo.js";

/**
 * Product Service
 * Rules:
 * 1. Contains business logic.
 * 2. All functions MUST use the handle* prefix.
 * 3. Never touches req/res.
 * 4. Coordinates with repository layer for DB operations.
 */

export const handleGetProducts = async (query = {}) => {
  const {
    productType,
    shopFor,
    color,
    metal,
    stone,
    style,
    minPrice,
    maxPrice,
    collectionSlug,
    search,
    sortBy = "newest",
    page = 1,
    limit = 20,
  } = query;

  const filter = {};

  if (productType) {
    const types = Array.isArray(productType) ? productType : productType.split(",");
    filter.productType = { $in: types.map((t) => t.trim().toLowerCase()) };
  }

  if (shopFor) {
    const targets = Array.isArray(shopFor) ? shopFor : shopFor.split(",");
    filter.shopFor = { $in: targets.map((t) => t.trim().toLowerCase()) };
  }

  if (color) {
    const colors = Array.isArray(color) ? color : color.split(",");
    filter.color = { $in: colors.map((c) => c.trim().toLowerCase()) };
  }

  if (metal) {
    const metals = Array.isArray(metal) ? metal : metal.split(",");
    filter.metal = { $in: metals.map((m) => m.trim()) };
  }

  if (stone) {
    const stones = Array.isArray(stone) ? stone : stone.split(",");
    filter.stone = { $in: stones.map((s) => s.trim().toLowerCase()) };
  }

  if (style) {
    const styles = Array.isArray(style) ? style : style.split(",");
    filter.style = { $in: styles.map((s) => s.trim().toLowerCase()) };
  }

  if (collectionSlug) {
    filter.collectionSlug = collectionSlug.trim().toLowerCase();
  }

  if (minPrice !== undefined || maxPrice !== undefined) {
    filter.price = {};
    if (minPrice !== undefined && !isNaN(Number(minPrice))) {
      filter.price.$gte = Number(minPrice);
    }
    if (maxPrice !== undefined && !isNaN(Number(maxPrice))) {
      filter.price.$lte = Number(maxPrice);
    }
  }

  if (search) {
    const searchRegex = new RegExp(search.trim(), "i");
    filter.$or = [
      { name: searchRegex },
      { description: searchRegex },
      { categoryName: searchRegex },
      { collectionName: searchRegex },
    ];
  }

  let sort = { createdAt: -1 };
  if (sortBy === "price_asc") sort = { price: 1 };
  else if (sortBy === "price_desc") sort = { price: -1 };
  else if (sortBy === "rating") sort = { rating: -1 };
  else if (sortBy === "popular") sort = { reviewsCount: -1 };

  const parsedPage = Math.max(1, Number(page) || 1);
  const parsedLimit = Math.min(100, Math.max(1, Number(limit) || 20));
  const skip = (parsedPage - 1) * parsedLimit;

  const [products, totalCount] = await Promise.all([
    productRepo.findProducts(filter, { sort, skip, limit: parsedLimit }),
    productRepo.countProducts(filter),
  ]);

  return {
    products,
    pagination: {
      page: parsedPage,
      limit: parsedLimit,
      totalCount,
      totalPages: Math.ceil(totalCount / parsedLimit) || 1,
    },
  };
};

export const handleGetProductBySlug = async (slug) => {
  if (!slug) {
    throw new Error("Product slug is required");
  }

  const product = await productRepo.findProductBySlug(slug);
  if (!product) {
    const error = new Error("Product not found");
    error.statusCode = 404;
    throw error;
  }

  return product;
};

export const handleGetFilterOptions = async () => {
  const dynamicValues = await productRepo.getDistinctFilterValues();

  // Baseline options matching todo.md
  return {
    productTypes: dynamicValues.productTypes.length
      ? dynamicValues.productTypes
      : ["necklace", "rings", "earrings", "bracelets"],
    shopFor: dynamicValues.shopFor.length
      ? dynamicValues.shopFor
      : ["men", "women", "kids", "couples"],
    colors: dynamicValues.colors.length
      ? dynamicValues.colors
      : ["gold", "oxidised silver", "silver", "rose gold"],
    metals: dynamicValues.metals.length
      ? dynamicValues.metals
      : ["750", "800", "925"],
    stones: dynamicValues.stones.length
      ? dynamicValues.stones
      : ["colored stone", "colored zircon", "zircon", "pearl"],
    styles: dynamicValues.styles.length
      ? dynamicValues.styles
      : ["everyday", "office", "party", "traditional", "wedding"],
    priceRange: {
      min: 999,
      max: 150000,
    },
  };
};

export const handleCreateProduct = async (productData) => {
  if (!productData.slug && productData.name) {
    productData.slug = productData.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  return productRepo.createProduct(productData);
};

export default {
  handleGetProducts,
  handleGetProductBySlug,
  handleGetFilterOptions,
  handleCreateProduct,
};
