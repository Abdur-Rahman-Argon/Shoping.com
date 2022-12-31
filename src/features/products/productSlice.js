import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

// export const {}= productSlice.action;

export default productSlice.reducer;
