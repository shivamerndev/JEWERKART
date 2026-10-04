import * as authService from "./auth.service.js";

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

/**
 * Auth Controller
 * Rules:
 * 1. Thin HTTP layer.
 * 2. Reads data from req.
 * 3. Calls service functions only.
 * 4. Returns JSON HTTP responses.
 */

export const register = async (req, res) => {
  try {
    const data = await authService.handleRegister(req.body);
    res.cookie("refreshToken", data.refreshToken, COOKIE_OPTIONS);
    return res.status(201).json({
      success: true,
      message: "Registration successful. Welcome to Jewerkart.",
      data: {
        user: data.user,
        accessToken: data.accessToken,
      },
    });
  } catch (error) {
    const statusCode = error.statusCode || 400;
    return res.status(statusCode).json({
      success: false,
      message: error.message || "Registration failed",
    });
  }
};

export const login = async (req, res) => {
  try {
    const data = await authService.handleLogin(req.body);
    res.cookie("refreshToken", data.refreshToken, COOKIE_OPTIONS);
    return res.status(200).json({
      success: true,
      message: "Logged in successfully",
      data: {
        user: data.user,
        accessToken: data.accessToken,
      },
    });
  } catch (error) {
    const statusCode = error.statusCode || 401;
    return res.status(statusCode).json({
      success: false,
      message: error.message || "Login failed",
    });
  }
};

export const refreshToken = async (req, res) => {
  try {
    const token = req.cookies?.refreshToken || req.body?.refreshToken;
    const data = await authService.handleRefreshToken(token);
    res.cookie("refreshToken", data.refreshToken, COOKIE_OPTIONS);
    return res.status(200).json({
      success: true,
      message: "Token refreshed successfully",
      data: {
        user: data.user,
        accessToken: data.accessToken,
      },
    });
  } catch (error) {
    res.clearCookie("refreshToken", COOKIE_OPTIONS);
    const statusCode = error.statusCode || 401;
    return res.status(statusCode).json({
      success: false,
      message: error.message || "Failed to refresh token",
    });
  }
};

export const logout = async (req, res) => {
  try {
    const token = req.cookies?.refreshToken;
    const userId = req.user?.id;
    await authService.handleLogout(userId, token);
    res.clearCookie("refreshToken", COOKIE_OPTIONS);
    return res.status(200).json({
      success: true,
      message: "Successfully logged out",
    });
  } catch (error) {
    res.clearCookie("refreshToken", COOKIE_OPTIONS);
    return res.status(200).json({
      success: true,
      message: "Logged out locally",
    });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await authService.handleGetMe(req.user.id);
    return res.status(200).json({
      success: true,
      message: "Profile retrieved successfully",
      data: {
        user,
      },
    });
  } catch (error) {
    const statusCode = error.statusCode || 500;
    return res.status(statusCode).json({
      success: false,
      message: error.message || "Failed to fetch user profile",
    });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const data = await authService.handleForgotPassword(req.body.email);
    return res.status(200).json({
      success: true,
      message: data.message,
      data,
    });
  } catch (error) {
    const statusCode = error.statusCode || 400;
    return res.status(statusCode).json({
      success: false,
      message: error.message || "Failed to process forgot password request",
    });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const token = req.params?.token || req.body?.token;
    const { password } = req.body;
    const data = await authService.handleResetPassword(token, password);
    return res.status(200).json({
      success: true,
      message: data.message,
    });
  } catch (error) {
    const statusCode = error.statusCode || 400;
    return res.status(statusCode).json({
      success: false,
      message: error.message || "Failed to reset password",
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const user = await authService.handleUpdateProfile(req.user.id, req.body);
    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: {
        user,
      },
    });
  } catch (error) {
    const statusCode = error.statusCode || 400;
    return res.status(statusCode).json({
      success: false,
      message: error.message || "Failed to update profile",
    });
  }
};

export const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const data = await authService.handleChangePassword(req.user.id, currentPassword, newPassword);
    return res.status(200).json({
      success: true,
      message: data.message,
    });
  } catch (error) {
    const statusCode = error.statusCode || 400;
    return res.status(statusCode).json({
      success: false,
      message: error.message || "Failed to change password",
    });
  }
};

export default {
  register,
  login,
  refreshToken,
  logout,
  getMe,
  forgotPassword,
  resetPassword,
  updateProfile,
  changePassword,
};
