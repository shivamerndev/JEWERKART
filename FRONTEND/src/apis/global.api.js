import { api } from "../utils/axios";

export const getCategoriesApi = async () => {
    const response = await api.get("/categories");
    return response.data;
};

export const getBannersApi = async () => {
    const response = await api.get("/banners");
    return response.data;
};
