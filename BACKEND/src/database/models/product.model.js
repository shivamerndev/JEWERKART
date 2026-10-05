import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, "Product slug is required"],
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    tagline: {
      type: String,
      default: "Exclusive Artisanal Fine Jewellery",
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: 0,
      index: true,
    },
    originalPrice: {
      type: Number,
      min: 0,
    },
    image: {
      type: String,
      default: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop",
    },
    images: {
      type: [String],
      default: [],
    },
    sku: {
      type: String,
      trim: true,
      index: true,
    },
    productType: {
      type: String,
      required: true,
      enum: ["necklace", "rings", "earrings", "bracelets", "bangles", "pendants", "other", "silver"],
      lowercase: true,
      index: true,
      default: "rings",
    },
    shopFor: {
      type: String,
      required: true,
      enum: ["men", "women", "kids", "couples", "unisex"],
      lowercase: true,
      index: true,
      default: "women",
    },
    color: {
      type: String,
      required: true,
      enum: ["gold", "oxidised silver", "silver", "rose gold", "white gold"],
      lowercase: true,
      index: true,
      default: "gold",
    },
    metal: {
      type: String,
      required: true,
      enum: ["750", "800", "925", "916", "999", "585"],
      index: true,
      default: "750",
    },
    stone: {
      type: String,
      required: true,
      enum: ["colored stone", "colored zircon", "zircon", "pearl", "none", "diamond"],
      lowercase: true,
      index: true,
      default: "none",
    },
    style: {
      type: String,
      required: true,
      enum: ["everyday", "office", "party", "traditional", "wedding", "festive"],
      lowercase: true,
      index: true,
      default: "everyday",
    },
    collectionSlug: {
      type: String,
      lowercase: true,
      trim: true,
      index: true,
    },
    collectionName: {
      type: String,
      trim: true,
    },
    categoryName: {
      type: String,
      trim: true,
    },
    rating: {
      type: Number,
      default: 4.8,
      min: 0,
      max: 5,
    },
    reviewsCount: {
      type: Number,
      default: 0,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    stock: {
      type: Number,
      default: 10,
    },
    badge: {
      type: String,
      default: "BIS 925 HALLMARK",
    },
    purity: {
      type: String,
      trim: true,
      default: "18K Gold (750)",
    },
    grossWeight: {
      type: String,
      trim: true,
      default: "4.5g",
    },
    netWeight: {
      type: String,
      trim: true,
      default: "4.2g",
    },
    diamondWeight: {
      type: String,
      trim: true,
    },
    diamondClarity: {
      type: String,
      trim: true,
      default: "VVS1 / Colour E",
    },
    gemstones: {
      type: String,
      trim: true,
      default: "Natural Certified Gemstones",
    },
    hallmarkCertified: {
      type: Boolean,
      default: true,
    },
    hallmarkNo: {
      type: String,
      trim: true,
      default: "BIS-916-MUM-84920",
    },
    hsnCode: {
      type: String,
      trim: true,
      default: "71131910",
    },
    baseGoldRatePerGram: {
      type: Number,
      default: 7420,
    },
    makingChargesType: {
      type: String,
      default: "percentage",
    },
    makingChargesValue: {
      type: Number,
      default: 12,
    },
    wastagePercent: {
      type: Number,
      default: 2,
    },
    warehouse: {
      type: String,
      default: "Mumbai Vault B-12",
    },
    status: {
      type: String,
      enum: ["Active", "Low Stock", "Out of Stock", "Draft", "Archived"],
      default: "Active",
    },
    lowStockThreshold: {
      type: Number,
      default: 3,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
