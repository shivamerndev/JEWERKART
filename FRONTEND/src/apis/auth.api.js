import { api } from "../utils/axios";

/**
 * Auth API Layer
 * Rules:
 * 1. Communicates only with the backend.
 * 2. Never dispatches Redux actions or accesses Redux state.
 * 3. Never contains UI logic.
 */

export const loginApi = async (payload) => {
    const response = await api.post("/auth/login", payload);
    return response.data;
};

export const registerApi = async (payload) => {
    const response = await api.post("/auth/register", payload);
    return response.data;
};

export const logoutApi = async () => {
    const response = await api.post("/auth/logout");
    return response.data;
};

export const refreshTokenApi = async () => {
    const response = await api.post("/auth/refresh-token");
    return response.data;
};

export const getMeApi = async () => {
    const response = await api.get("/auth/me");
    return response.data;
};

export const forgotPasswordApi = async (payload) => {
    const response = await api.post("/auth/forgot-password", payload);
    return response.data;
};

export const resetPasswordApi = async (payload) => {
    const response = await api.post("/auth/reset-password", payload);
    return response.data;
};

export const updateProfileApi = async (payload) => {
    const response = await api.put("/auth/profile", payload);
    return response.data;
};

export const changePasswordApi = async (payload) => {
    const response = await api.put("/auth/change-password", payload);
    return response.data;
};

export default {
    loginApi,
    registerApi,
    logoutApi,
    refreshTokenApi,
    getMeApi,
    forgotPasswordApi,
    resetPasswordApi,
    updateProfileApi,
    changePasswordApi,
};
