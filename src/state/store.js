import { configureStore } from "@reduxjs/toolkit";
import cartProductsQuantityReducer from "./slices/cartProductsQuantitySlice";
import cartProductsPriceReducer from "./slices/cartProductsPriceSlice";
import cartTotalProductsReducer from "./slices/cartTotalProductsSlice";

export const store = configureStore({
  reducer: {
    cartProductsQuantity: cartProductsQuantityReducer,
    cartProductsPrice: cartProductsPriceReducer,
    cartTotalProducts: cartTotalProductsReducer,
  },
});
