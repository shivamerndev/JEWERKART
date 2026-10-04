import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../configs/env.config.js";

const SECRET = JWT_SECRET || "fallback_jewerkart_secret_key_2026";

/**
 * Auth Middleware
 * Verifies JWT Access Token and protects endpoints.
 */
export const verifyAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Authentication required. Missing or malformed token.",
      });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, SECRET);

    req.user = decoded;
    next();
  } catch (error) {
    const message =
      error.name === "TokenExpiredError"
        ? "Access token expired"
        : "Invalid access token";
    return res.status(401).json({
      success: false,
      message,
    });
  }
};

/**
 * Role-Based Access Control Middleware
 */
export const requireRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "Forbidden: You do not have permission to access this resource",
      });
    }
    next();
  };
};

export const requireAdmin = requireRoles("admin");

export default {
  verifyAuth,
  requireRoles,
  requireAdmin,
};
