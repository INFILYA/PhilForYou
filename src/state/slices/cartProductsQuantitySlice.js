import { createSlice } from "@reduxjs/toolkit";

export const cartProductsQuantity = createSlice({
  name: "cartProductsQuantity",
  initialState: { cartProductsQuantity: 0 },
  reducers: {
    setAddProductsQuantity: (state, action) => {
      state.cartProductsQuantity = state.cartProductsQuantity + action.payload;
    },
    setMinusOneProductsQuantity: (state) => {
      state.cartProductsQuantity = state.cartProductsQuantity - 1;
    },
    setPlusOneProductsQuantity: (state) => {
      state.cartProductsQuantity = state.cartProductsQuantity + 1;
    },
  },
});
export const { setAddProductsQuantity, setMinusOneProductsQuantity, setPlusOneProductsQuantity } =
  cartProductsQuantity.actions;
export default cartProductsQuantity.reducer;
