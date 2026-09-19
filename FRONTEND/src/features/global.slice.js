import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    banners: [],
    loading: false,
};

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setBanners: (state, action) => {
            state.banners = action.payload;
        },
        setGlobalLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const { setCategories, setBanners, setGlobalLoading } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
