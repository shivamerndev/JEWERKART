import { Router } from "express";
import * as productController from "./product.controller.js";
import * as productValidator from "./product.validator.js";

const router = Router();

/**
 * Product Routes
 * Declarative endpoints: Validator -> Controller
 */

// GET /filters - Get available filter facets (metals, stones, styles, etc.)
router.get("/filters", productController.getFilterOptions);

// GET / - List and filter products
router.get("/", productValidator.validateGetProducts, productController.getProducts);

// GET /:slug - Fetch single product by slug
router.get("/:slug", productValidator.validateGetProductBySlug, productController.getProductBySlug);

// POST / - Create a new product
router.post("/", productValidator.validateCreateProduct, productController.createProduct);

export default router;
