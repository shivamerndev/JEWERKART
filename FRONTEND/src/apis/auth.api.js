import { api } from "../utils/axios";

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
