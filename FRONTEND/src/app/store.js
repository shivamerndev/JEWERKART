import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/auth.slice";
import { globalReducer } from "../features/global.slice";


const store = configureStore({
    reducer: {
        auth: authReducer,
        global: globalReducer,
    }
})

export { store };
export default store;