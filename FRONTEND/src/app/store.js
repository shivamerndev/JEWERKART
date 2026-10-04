import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/auth.slice";
import { globalReducer } from "../features/global.slice";
import { productReducer } from "../features/product.slice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        global: globalReducer,
        product: productReducer,
    }
});

export { store };
export default store;