import User from "../models/user.model.js";

/**
 * Auth Repository
 * Mandatory Architectural Rule: All database operations for User/Auth MUST be executed here.
 * No business logic, no HTTP req/res handling.
 */

export const createUser = async (userData) => {
  return User.create(userData);
};

export const findUserByEmail = async (email, includePassword = false) => {
  const query = User.findOne({ email: email.toLowerCase().trim() });
  if (includePassword) {
    query.select("+password");
  }
  return query.exec();
};

export const findUserById = async (id, includeSecrets = false) => {
  const query = User.findById(id);
  if (includeSecrets) {
    query.select("+refreshToken +resetPasswordToken +resetPasswordExpires");
  }
  return query.exec();
};

export const findUserByRefreshToken = async (refreshToken) => {
  return User.findOne({ refreshToken }).select("+refreshToken").exec();
};

export const findUserByResetToken = async (resetPasswordToken) => {
  return User.findOne({
    resetPasswordToken,
    resetPasswordExpires: { $gt: new Date() },
  })
    .select("+resetPasswordToken +resetPasswordExpires")
    .exec();
};

export const updateUserById = async (id, updateData) => {
  return User.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  }).exec();
};

export const updateUserRefreshToken = async (id, refreshToken) => {
  return User.findByIdAndUpdate(
    id,
    { refreshToken },
    { new: true }
  ).exec();
};

export const clearUserRefreshToken = async (id) => {
  return User.findByIdAndUpdate(
    id,
    { refreshToken: null },
    { new: true }
  ).exec();
};

export const updateResetPasswordToken = async (id, resetPasswordToken, resetPasswordExpires) => {
  return User.findByIdAndUpdate(
    id,
    { resetPasswordToken, resetPasswordExpires },
    { new: true }
  ).exec();
};

export const countUsers = async (filter = {}) => {
  return User.countDocuments(filter);
};

export default {
  createUser,
  findUserByEmail,
  findUserById,
  findUserByRefreshToken,
  findUserByResetToken,
  updateUserById,
  updateUserRefreshToken,
  clearUserRefreshToken,
  updateResetPasswordToken,
  countUsers,
};
