import { Router } from "express";
import * as authController from "./auth.controller.js";
import * as authValidator from "./auth.validator.js";
import { verifyAuth } from "./auth.middleware.js";

const router = Router();

/**
 * Auth Routes
 * Declarative endpoints: Validator -> Controller
 */

// POST /register - Register a new user
router.post("/register", authValidator.validateRegister, authController.register);

// POST /login - Authenticate existing user
router.post("/login", authValidator.validateLogin, authController.login);

// POST /refresh-token - Refresh expired access token using HTTP-only cookie
router.post("/refresh-token", authController.refreshToken);

// POST /logout - Clear session and revoke refresh token
router.post("/logout", authController.logout);

// GET /me - Get authenticated user profile
router.get("/me", verifyAuth, authController.getMe);

// POST /forgot-password - Send password reset token / instructions
router.post("/forgot-password", authValidator.validateForgotPassword, authController.forgotPassword);

// POST /reset-password/:token - Reset password using verified token
router.post("/reset-password/:token", authValidator.validateResetPassword, authController.resetPassword);

// POST /reset-password - Alternative endpoint with token in body
router.post("/reset-password", authValidator.validateResetPassword, authController.resetPassword);

// PUT /profile - Update profile details
router.put("/profile", verifyAuth, authValidator.validateUpdateProfile, authController.updateProfile);

// PUT /change-password - Change current password
router.put("/change-password", verifyAuth, authValidator.validateChangePassword, authController.changePassword);

export default router;
