import { useSelector } from "react-redux";

const useGlobal = () => {
    const { categories, banners, loading } = useSelector((state) => state.global);

    return {
        categories,
        banners,
        loading,
    };
};

export default useGlobal;