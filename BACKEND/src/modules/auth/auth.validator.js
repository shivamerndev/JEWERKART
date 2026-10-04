/**
 * Auth Validator
 * Rules:
 * 1. Validates incoming request params, query, or body.
 * 2. Does NOT query database or contain business logic.
 * 3. Thin Express middleware.
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateRegister = (req, res, next) => {
  const { name, email, password } = req.body || {};

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return res.status(400).json({
      success: false,
      message: "Full name is required and must be at least 2 characters",
    });
  }

  if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
    return res.status(400).json({
      success: false,
      message: "A valid email address is required",
    });
  }

  if (!password || typeof password !== "string" || password.length < 6) {
    return res.status(400).json({
      success: false,
      message: "Password is required and must be at least 6 characters",
    });
  }

  next();
};

export const validateLogin = (req, res, next) => {
  const { email, password } = req.body || {};

  if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
    return res.status(400).json({
      success: false,
      message: "A valid email address is required",
    });
  }

  if (!password || typeof password !== "string" || !password.trim()) {
    return res.status(400).json({
      success: false,
      message: "Password is required",
    });
  }

  next();
};

export const validateForgotPassword = (req, res, next) => {
  const { email } = req.body || {};

  if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
    return res.status(400).json({
      success: false,
      message: "A valid registered email address is required",
    });
  }

  next();
};

export const validateResetPassword = (req, res, next) => {
  const token = req.params?.token || req.body?.token;
  const { password } = req.body || {};

  if (!token || typeof token !== "string" || !token.trim()) {
    return res.status(400).json({
      success: false,
      message: "Reset token is required",
    });
  }

  if (!password || typeof password !== "string" || password.length < 6) {
    return res.status(400).json({
      success: false,
      message: "New password is required and must be at least 6 characters",
    });
  }

  next();
};

export const validateUpdateProfile = (req, res, next) => {
  const { name, phone } = req.body || {};

  if (name !== undefined && (typeof name !== "string" || name.trim().length < 2)) {
    return res.status(400).json({
      success: false,
      message: "Name must be at least 2 characters",
    });
  }

  if (phone !== undefined && typeof phone !== "string") {
    return res.status(400).json({
      success: false,
      message: "Phone must be a valid string",
    });
  }

  next();
};

export const validateChangePassword = (req, res, next) => {
  const { currentPassword, newPassword } = req.body || {};

  if (!currentPassword || typeof currentPassword !== "string") {
    return res.status(400).json({
      success: false,
      message: "Current password is required",
    });
  }

  if (!newPassword || typeof newPassword !== "string" || newPassword.length < 6) {
    return res.status(400).json({
      success: false,
      message: "New password must be at least 6 characters",
    });
  }

  next();
};

export default {
  validateRegister,
  validateLogin,
  validateForgotPassword,
  validateResetPassword,
  validateUpdateProfile,
  validateChangePassword,
};
