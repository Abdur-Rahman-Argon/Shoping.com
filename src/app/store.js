import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/products/productSlice";
import { productApi } from "../features/api/apiSlice";

const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    product: productSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export default store;
