import { createSlice } from "@reduxjs/toolkit";

const initialFilterState = {
  productTypes: [],
  shopFor: [],
  colors: [],
  metals: [],
  stones: [],
  styles: [],
  minPrice: 0,
  maxPrice: 150000,
  sortBy: "newest",
  search: "",
  page: 1,
};

const initialState = {
  products: [],
  totalCount: 0,
  totalPages: 1,
  selectedProduct: null,
  filters: initialFilterState,
  availableFilters: {
    productTypes: ["necklace", "rings", "earrings", "bracelets"],
    shopFor: ["men", "women", "kids", "couples"],
    colors: ["gold", "oxidised silver"],
    metals: ["750", "800", "925"],
    stones: ["colored stone", "colored zircon", "zircon", "pearl"],
    styles: ["everyday", "office", "party", "traditional", "wedding"],
    priceRange: { min: 0, max: 150000 },
  },
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products || [];
      state.totalCount = action.payload.totalCount || action.payload.products?.length || 0;
      state.totalPages = action.payload.totalPages || 1;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setAvailableFilters: (state, action) => {
      state.availableFilters = {
        ...state.availableFilters,
        ...action.payload,
      };
    },
    setFilterValue: (state, action) => {
      const { key, value } = action.payload;
      if (Array.isArray(state.filters[key])) {
        // Toggle item in array
        const exists = state.filters[key].includes(value);
        if (exists) {
          state.filters[key] = state.filters[key].filter((item) => item !== value);
        } else {
          state.filters[key].push(value);
        }
      } else {
        state.filters[key] = value;
      }
      state.filters.page = 1; // reset page on filter change
    },
    setPriceRange: (state, action) => {
      const { min, max } = action.payload;
      if (min !== undefined) state.filters.minPrice = min;
      if (max !== undefined) state.filters.maxPrice = max;
      state.filters.page = 1;
    },
    setSortBy: (state, action) => {
      state.filters.sortBy = action.payload;
      state.filters.page = 1;
    },
    resetFilters: (state) => {
      state.filters = { ...initialFilterState };
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setProducts,
  setSelectedProduct,
  setAvailableFilters,
  setFilterValue,
  setPriceRange,
  setSortBy,
  resetFilters,
  setLoading,
  setError,
} = productSlice.actions;

export const productReducer = productSlice.reducer;
export default productReducer;
