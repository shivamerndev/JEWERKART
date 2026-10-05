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
    status,
    category,
    sortBy = "newest",
    page = 1,
    limit = 20,
  } = query;

  const filter = {};

  if (category && category !== "All") {
    const catLower = category.toLowerCase().trim();
    filter.$or = [
      { productType: catLower },
      { categoryName: new RegExp(`^${category.trim()}$`, "i") },
    ];
  } else if (productType) {
    const types = Array.isArray(productType) ? productType : productType.split(",");
    filter.productType = { $in: types.map((t) => t.trim().toLowerCase()) };
  }

  if (status && status !== "All") {
    filter.status = status;
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
    const searchConditions = [
      { name: searchRegex },
      { sku: searchRegex },
      { description: searchRegex },
      { categoryName: searchRegex },
      { collectionName: searchRegex },
    ];
    if (filter.$or) {
      filter.$and = [{ $or: filter.$or }, { $or: searchConditions }];
      delete filter.$or;
    } else {
      filter.$or = searchConditions;
    }
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
    throw new Error("Product identifier is required");
  }

  const product = await productRepo.findProductByIdOrSlug(slug);
  if (!product) {
    const error = new Error("Product not found");
    error.statusCode = 404;
    throw error;
  }

  return product;
};

export const handleGetProductById = async (id) => {
  if (!id) {
    throw new Error("Product ID is required");
  }

  const product = await productRepo.findProductByIdOrSlug(id);
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
      : ["necklace", "rings", "earrings", "bracelets", "silver"],
    shopFor: dynamicValues.shopFor.length
      ? dynamicValues.shopFor
      : ["men", "women", "kids", "couples"],
    colors: dynamicValues.colors.length
      ? dynamicValues.colors
      : ["gold", "oxidised silver", "silver", "rose gold", "white gold"],
    metals: dynamicValues.metals.length
      ? dynamicValues.metals
      : ["750", "800", "925", "916", "999"],
    stones: dynamicValues.stones.length
      ? dynamicValues.stones
      : ["colored stone", "colored zircon", "zircon", "pearl", "diamond"],
    styles: dynamicValues.styles.length
      ? dynamicValues.styles
      : ["everyday", "office", "party", "traditional", "wedding", "festive"],
    priceRange: {
      min: 999,
      max: 300000,
    },
  };
};

export const handleCreateProduct = async (productData) => {
  const payload = { ...productData };

  // Map admin form fields to schema if needed
  if (!payload.name && payload.title) {
    payload.name = payload.title.trim();
  }

  if (payload.sellingPrice !== undefined && payload.price === undefined) {
    payload.price = Number(payload.sellingPrice);
  }

  if (payload.stockQuantity !== undefined && payload.stock === undefined) {
    payload.stock = Number(payload.stockQuantity);
  }

  if (!payload.tagline && payload.shortDescription) {
    payload.tagline = payload.shortDescription.trim();
  }

  if (!payload.categoryName && payload.category) {
    payload.categoryName = payload.category.trim();
  }

  // Infer productType if missing
  if (!payload.productType) {
    const cat = (payload.category || "").toLowerCase();
    if (cat.includes("ring")) payload.productType = "rings";
    else if (cat.includes("necklace") || cat.includes("choker")) payload.productType = "necklace";
    else if (cat.includes("bangle") || cat.includes("bracelet")) payload.productType = "bangles";
    else if (cat.includes("earring") || cat.includes("jhumka")) payload.productType = "earrings";
    else if (cat.includes("pendant")) payload.productType = "pendants";
    else if (cat.includes("silver")) payload.productType = "silver";
    else payload.productType = "rings";
  }

  if (!payload.collectionName && payload.collection) {
    payload.collectionName = payload.collection.trim();
  }

  if (!payload.collectionSlug && payload.collectionName) {
    payload.collectionSlug = payload.collectionName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  if (!payload.slug && payload.name) {
    const baseSlug = payload.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    payload.slug = `${baseSlug}-${Date.now().toString().slice(-4)}`;
  }

  if (!payload.sku) {
    const typePrefix = (payload.productType || "PRD").slice(0, 3).toUpperCase();
    payload.sku = `JW-${typePrefix}-${Math.floor(1000 + Math.random() * 9000)}`;
  }

  if (!payload.description) {
    payload.description =
      payload.shortDescription ||
      `${payload.name} - Handcrafted artisanal fine jewellery by master karigars with certified purity guarantee.`;
  }

  if (!payload.image) {
    payload.image =
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop";
  }

  if (!payload.purity && payload.metalType) {
    payload.purity = payload.metalType;
  }

  if (!payload.netWeight && payload.netGoldWeight) {
    payload.netWeight = `${payload.netGoldWeight}g`;
  }

  if (!payload.diamondWeight && payload.diamondCarat) {
    payload.diamondWeight = payload.diamondCarat;
  }

  return productRepo.createProduct(payload);
};

export const handleUpdateProduct = async (id, updateData) => {
  const existingProduct = await productRepo.findProductByIdOrSlug(id);
  if (!existingProduct) {
    const error = new Error("Product not found to update");
    error.statusCode = 404;
    throw error;
  }

  const payload = { ...updateData };

  if (payload.title && !payload.name) {
    payload.name = payload.title.trim();
  }

  if (payload.sellingPrice !== undefined) {
    payload.price = Number(payload.sellingPrice);
  }

  if (payload.stockQuantity !== undefined) {
    payload.stock = Number(payload.stockQuantity);
  }

  if (payload.netGoldWeight !== undefined && !payload.netWeight) {
    payload.netWeight = `${payload.netGoldWeight}g`;
  }

  if (payload.diamondCarat !== undefined && !payload.diamondWeight) {
    payload.diamondWeight = payload.diamondCarat;
  }

  if (payload.metalType && !payload.purity) {
    payload.purity = payload.metalType;
  }

  const updated = await productRepo.updateProductById(existingProduct._id, payload);
  return updated;
};

export const handleDeleteProduct = async (id) => {
  const existingProduct = await productRepo.findProductByIdOrSlug(id);
  if (!existingProduct) {
    const error = new Error("Product not found to delete");
    error.statusCode = 404;
    throw error;
  }

  await productRepo.deleteProductById(existingProduct._id);
  return {
    success: true,
    message: "Product deleted successfully from catalog",
    id: existingProduct._id,
  };
};

export default {
  handleGetProducts,
  handleGetProductBySlug,
  handleGetProductById,
  handleGetFilterOptions,
  handleCreateProduct,
  handleUpdateProduct,
  handleDeleteProduct,
};
