import { createSlice } from "@reduxjs/toolkit";

/**
 * Auth Slice
 * Rules:
 * 1. Defines Redux state and state mutations only.
 * 2. Never calls APIs directly or accesses backend.
 * 3. Never contains UI logic.
 */

const initialState = {
    user: null,
    accessToken: null,
    isAuthenticated: false,
    loading: false,
    authChecked: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = !!action.payload;
            state.authChecked = true;
        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.accessToken = null;
            state.isAuthenticated = false;
            state.authChecked = true;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setAuthChecked: (state, action) => {
            state.authChecked = action.payload;
        },
    },
});

export const { setUser, setAccessToken, logout, setLoading, setAuthChecked } = authSlice.actions;
export const authReducer = authSlice.reducer;
export default authReducer;
