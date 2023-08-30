import { createSlice } from "@reduxjs/toolkit";

export const cartProductsPrice = createSlice({
  name: "cartProductsPrice",
  initialState: { cartProductsPrice: 0 },
  reducers: {
    setAddProductsPrice: (state, action) => {
      state.cartProductsPrice = state.cartProductsPrice + action.payload;
    },
    setReduceProductsPrice: (state, action) => {
      state.cartProductsPrice = state.cartProductsPrice - action.payload;
    },
  },
});
export const { setAddProductsPrice, setReduceProductsPrice } = cartProductsPrice.actions;
export default cartProductsPrice.reducer;