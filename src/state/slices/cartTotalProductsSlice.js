import { createSlice } from "@reduxjs/toolkit";

export const cartTotalProducts = createSlice({
  name: "cartTotalProducts",
  initialState: { cartTotalProducts: [] },
  reducers: {
    setProduct: (state, action) => {
      if (
        state.cartTotalProducts.some(
          (item) => item.name === action.payload.name && item.size === action.payload.size
        )
      ) {
        for (let i = 0; i < state.cartTotalProducts.length; i++) {
          const item = state.cartTotalProducts[i];
          if (item.name === action.payload.name && item.size === action.payload.size) {
            item.price += action.payload.price;
            item.quantity += action.payload.quantity;
          }
        }
      } else {
        state.cartTotalProducts = [...state.cartTotalProducts, action.payload];
      }
    },
  },
});
export const { setProduct } = cartTotalProducts.actions;
export default cartTotalProducts.reducer;
