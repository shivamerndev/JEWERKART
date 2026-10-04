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
      required: [true, "Primary product image is required"],
    },
    images: {
      type: [String],
      default: [],
    },
    productType: {
      type: String,
      required: true,
      enum: ["necklace", "rings", "earrings", "bracelets", "bangles", "pendants", "other"],
      lowercase: true,
      index: true,
    },
    shopFor: {
      type: String,
      required: true,
      enum: ["men", "women", "kids", "couples", "unisex"],
      lowercase: true,
      index: true,
    },
    color: {
      type: String,
      required: true,
      enum: ["gold", "oxidised silver", "silver", "rose gold"],
      lowercase: true,
      index: true,
    },
    metal: {
      type: String,
      required: true,
      enum: ["750", "800", "925"],
      index: true,
    },
    stone: {
      type: String,
      required: true,
      enum: ["colored stone", "colored zircon", "zircon", "pearl", "none", "diamond"],
      lowercase: true,
      index: true,
    },
    style: {
      type: String,
      required: true,
      enum: ["everyday", "office", "party", "traditional", "wedding"],
      lowercase: true,
      index: true,
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
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
