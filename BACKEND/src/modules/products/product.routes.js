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

// GET /id/:id - Fetch single product by MongoDB ID or SKU
router.get("/id/:id", productValidator.validateProductId, productController.getProductById);

// GET /:slug - Fetch single product by slug or ID
router.get("/:slug", productValidator.validateGetProductBySlug, productController.getProductBySlug);

// POST / - Create a new product
router.post("/", productValidator.validateCreateProduct, productController.createProduct);

// PUT /:id - Update an existing product
router.put("/:id", productValidator.validateUpdateProduct, productController.updateProduct);

// DELETE /:id - Delete a product
router.delete("/:id", productValidator.validateProductId, productController.deleteProduct);

export default router;
