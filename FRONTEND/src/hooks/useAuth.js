import { useDispatch, useSelector } from "react-redux";
import {
    setUser,
    setAccessToken,
    logout as logoutAction,
    setLoading,
    setAuthChecked,
} from "../features/auth.slice";
import {
    loginApi,
    registerApi,
    logoutApi,
    refreshTokenApi,
    getMeApi,
    forgotPasswordApi,
    resetPasswordApi,
    updateProfileApi,
    changePasswordApi,
} from "../apis/auth.api";

/**
 * useAuth Hook
 * Rules:
 * 1. Business logic coordinator between UI, APIs, and Redux.
 * 2. All action handler functions MUST use the handle* prefix.
 * 3. Never contains JSX.
 */

const useAuth = () => {
    const dispatch = useDispatch();
    const { user, accessToken, isAuthenticated, loading, authChecked } = useSelector(
        (state) => state.auth
    );

    const handleLogin = async (credentials) => {
        dispatch(setLoading(true));
        try {
            const data = await loginApi(credentials);
            dispatch(setUser(data.data.user));
            dispatch(setAccessToken(data.data.accessToken));
            return data;
        } catch (error) {
            throw error;
        } finally {
            dispatch(setLoading(false));
        }
    };

    const handleRegister = async (payload) => {
        dispatch(setLoading(true));
        try {
            const data = await registerApi(payload);
            dispatch(setUser(data.data.user));
            dispatch(setAccessToken(data.data.accessToken));
            return data;
        } catch (error) {
            throw error;
        } finally {
            dispatch(setLoading(false));
        }
    };

    const handleLogout = async () => {
        dispatch(setLoading(true));
        try {
            await logoutApi();
        } catch (error) {
            // Logout locally even if API call fails
        } finally {
            dispatch(logoutAction());
            dispatch(setLoading(false));
        }
    };

    const handleCheckAuth = async () => {
        try {
            const data = await refreshTokenApi();
            if (data?.data?.accessToken) {
                dispatch(setAccessToken(data.data.accessToken));
            }
            if (data?.data?.user) {
                dispatch(setUser(data.data.user));
            }
            return data;
        } catch (error) {
            dispatch(setAuthChecked(true));
            return null;
        }
    };

    const handleGetMe = async () => {
        try {
            const data = await getMeApi();
            if (data?.data?.user) {
                dispatch(setUser(data.data.user));
            }
            return data.data.user;
        } catch (error) {
            throw error;
        }
    };

    const handleForgotPassword = async (email) => {
        dispatch(setLoading(true));
        try {
            const data = await forgotPasswordApi({ email });
            return data;
        } catch (error) {
            throw error;
        } finally {
            dispatch(setLoading(false));
        }
    };

    const handleResetPassword = async (token, password) => {
        dispatch(setLoading(true));
        try {
            const data = await resetPasswordApi({ token, password });
            return data;
        } catch (error) {
            throw error;
        } finally {
            dispatch(setLoading(false));
        }
    };

    const handleUpdateProfile = async (profileData) => {
        dispatch(setLoading(true));
        try {
            const data = await updateProfileApi(profileData);
            if (data?.data?.user) {
                dispatch(setUser(data.data.user));
            }
            return data;
        } catch (error) {
            throw error;
        } finally {
            dispatch(setLoading(false));
        }
    };

    const handleChangePassword = async (passwordData) => {
        dispatch(setLoading(true));
        try {
            const data = await changePasswordApi(passwordData);
            return data;
        } catch (error) {
            throw error;
        } finally {
            dispatch(setLoading(false));
        }
    };

    return {
        user,
        accessToken,
        isAuthenticated,
        loading,
        authChecked,
        handleLogin,
        handleRegister,
        handleLogout,
        handleCheckAuth,
        handleGetMe,
        handleForgotPassword,
        handleResetPassword,
        handleUpdateProfile,
        handleChangePassword,
    };
};

export default useAuth;