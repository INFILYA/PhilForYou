import { createSlice } from "@reduxjs/toolkit";

export const cartProductsPrice = createSlice({
  name: "cartProductsPrice",
  initialState: { cartProductsPrice: 0 },
  reducers: {
    setAddProductsPrice: (state, action) => {
      state.cartProductsPrice = state.cartProductsPrice + action.payload;
      localStorage.setItem("cartProductsPrice", JSON.stringify(state.cartProductsPrice));
    },
    setReduceProductsPrice: (state, action) => {
      state.cartProductsPrice = state.cartProductsPrice - action.payload;
      localStorage.setItem("cartProductsPrice", JSON.stringify(state.cartProductsPrice));
    },
    setCartProductsPrice: (state, action) => {
      state.cartProductsPrice = action.payload;
    },
  },
});
export const { setAddProductsPrice, setReduceProductsPrice, setCartProductsPrice } =
  cartProductsPrice.actions;
export default cartProductsPrice.reducer;
