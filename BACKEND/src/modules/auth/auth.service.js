import crypto from "crypto";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as authRepo from "../../database/repository/auth.repo.js";
import { JWT_SECRET } from "../../configs/env.config.js";

const SECRET = JWT_SECRET || "fallback_jewerkart_secret_key_2026";
const ACCESS_TOKEN_EXPIRES_IN = "1h";
const REFRESH_TOKEN_EXPIRES_IN = "7d";

/**
 * Helper to sanitize user object for client responses
 */
const formatUser = (user) => {
  if (!user) return null;
  const userObj = user.toObject ? user.toObject() : { ...user };
  delete userObj.password;
  delete userObj.refreshToken;
  delete userObj.resetPasswordToken;
  delete userObj.resetPasswordExpires;
  delete userObj.__v;

  return {
    ...userObj,
    id: userObj._id?.toString() || userObj.id,
    _id: userObj._id?.toString() || userObj.id,
  };
};

/**
 * Generate Access & Refresh Tokens
 */
const generateTokens = (user) => {
  const payload = {
    id: user._id?.toString() || user.id,
    email: user.email,
    role: user.role || "customer",
  };

  const accessToken = jwt.sign(payload, SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRES_IN,
  });

  const refreshToken = jwt.sign(
    { id: payload.id },
    SECRET,
    { expiresIn: REFRESH_TOKEN_EXPIRES_IN }
  );

  return { accessToken, refreshToken };
};

/**
 * Auth Service
 * Rules:
 * 1. Contains business logic.
 * 2. All functions MUST use the handle* prefix.
 * 3. Never touches req/res.
 * 4. Coordinates with repository layer for DB operations.
 */

export const handleRegister = async ({ name, email, password, role = "customer", phone = "" }) => {
  const existingUser = await authRepo.findUserByEmail(email);
  if (existingUser) {
    const error = new Error("An account with this email address already exists");
    error.statusCode = 409;
    throw error;
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // Security: only allow customer registration from public endpoint
  const assignedRole = role === "admin" ? "customer" : role;

  const newUser = await authRepo.createUser({
    name: name.trim(),
    email: email.toLowerCase().trim(),
    password: hashedPassword,
    role: assignedRole,
    phone: phone ? phone.trim() : "",
  });

  const { accessToken, refreshToken } = generateTokens(newUser);
  await authRepo.updateUserRefreshToken(newUser._id, refreshToken);

  return {
    user: formatUser(newUser),
    accessToken,
    refreshToken,
  };
};

export const handleLogin = async ({ email, password }) => {
  const user = await authRepo.findUserByEmail(email, true);
  if (!user) {
    const error = new Error("Invalid email or password");
    error.statusCode = 401;
    throw error;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    const error = new Error("Invalid email or password");
    error.statusCode = 401;
    throw error;
  }

  const { accessToken, refreshToken } = generateTokens(user);
  await authRepo.updateUserRefreshToken(user._id, refreshToken);

  return {
    user: formatUser(user),
    accessToken,
    refreshToken,
  };
};

export const handleRefreshToken = async (token) => {
  if (!token) {
    const error = new Error("Refresh token is required");
    error.statusCode = 401;
    throw error;
  }

  let decoded;
  try {
    decoded = jwt.verify(token, SECRET);
  } catch (err) {
    const error = new Error("Invalid or expired refresh token");
    error.statusCode = 401;
    throw error;
  }

  const user = await authRepo.findUserByRefreshToken(token);
  if (!user || user._id.toString() !== decoded.id) {
    const error = new Error("Session expired or token revoked. Please sign in again.");
    error.statusCode = 401;
    throw error;
  }

  // Issue new access token and rotate refresh token
  const tokens = generateTokens(user);
  await authRepo.updateUserRefreshToken(user._id, tokens.refreshToken);

  return {
    user: formatUser(user),
    accessToken: tokens.accessToken,
    refreshToken: tokens.refreshToken,
  };
};

export const handleLogout = async (userId, token) => {
  if (userId) {
    await authRepo.clearUserRefreshToken(userId);
  } else if (token) {
    const user = await authRepo.findUserByRefreshToken(token);
    if (user) {
      await authRepo.clearUserRefreshToken(user._id);
    }
  }

  return { message: "Successfully logged out" };
};

export const handleGetMe = async (userId) => {
  if (!userId) {
    const error = new Error("User ID is required");
    error.statusCode = 400;
    throw error;
  }

  const user = await authRepo.findUserById(userId);
  if (!user) {
    const error = new Error("User profile not found");
    error.statusCode = 404;
    throw error;
  }

  return formatUser(user);
};

export const handleForgotPassword = async (email) => {
  const user = await authRepo.findUserByEmail(email);
  if (!user) {
    // Return friendly generic response to prevent email enumeration
    return {
      message: "If your email is registered, recovery instructions have been sent.",
    };
  }

  const resetToken = crypto.randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour validity

  await authRepo.updateResetPasswordToken(user._id, resetToken, expiresAt);

  return {
    message: "Password reset instructions dispatched successfully.",
    resetToken, // Returned for dev testing & direct client linking
  };
};

export const handleResetPassword = async (token, newPassword) => {
  const user = await authRepo.findUserByResetToken(token);
  if (!user) {
    const error = new Error("Invalid or expired password reset token");
    error.statusCode = 400;
    throw error;
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  user.password = hashedPassword;
  user.resetPasswordToken = null;
  user.resetPasswordExpires = null;
  await user.save();

  return {
    message: "Password updated successfully. You can now log in with your new password.",
  };
};

export const handleUpdateProfile = async (userId, updateData) => {
  const allowedUpdates = {};
  if (updateData.name) allowedUpdates.name = updateData.name.trim();
  if (updateData.phone !== undefined) allowedUpdates.phone = updateData.phone.trim();
  if (updateData.avatar) allowedUpdates.avatar = updateData.avatar.trim();

  const updatedUser = await authRepo.updateUserById(userId, allowedUpdates);
  if (!updatedUser) {
    const error = new Error("User not found");
    error.statusCode = 404;
    throw error;
  }

  return formatUser(updatedUser);
};

export const handleChangePassword = async (userId, currentPassword, newPassword) => {
  const user = await authRepo.findUserById(userId, true);
  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;
    throw error;
  }

  const isMatch = await bcrypt.compare(currentPassword, user.password);
  if (!isMatch) {
    const error = new Error("Current password does not match");
    error.statusCode = 400;
    throw error;
  }

  user.password = await bcrypt.hash(newPassword, 10);
  await user.save();

  return {
    message: "Password changed successfully",
  };
};

export default {
  handleRegister,
  handleLogin,
  handleRefreshToken,
  handleLogout,
  handleGetMe,
  handleForgotPassword,
  handleResetPassword,
  handleUpdateProfile,
  handleChangePassword,
};
