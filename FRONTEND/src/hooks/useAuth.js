import { useDispatch, useSelector } from "react-redux";
import { setUser, setAccessToken, logout as logoutAction, setLoading } from "../features/auth.slice";
import { loginApi, registerApi, logoutApi } from "../apis/auth.api";

const useAuth = () => {
    const dispatch = useDispatch();
    const { user, accessToken, isAuthenticated, loading } = useSelector((state) => state.auth);

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
        try {
            await logoutApi();
        } catch (error) {
            // Logout locally even if API call fails
        } finally {
            dispatch(logoutAction());
        }
    };

    return {
        user,
        accessToken,
        isAuthenticated,
        loading,
        handleLogin,
        handleRegister,
        handleLogout,
    };
};

export default useAuth;