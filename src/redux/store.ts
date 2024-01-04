"use client";

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import testingReducer from "./slices/testing/testingSlice";
import cartReducer from "./slices/cart/cartSlice";
import productsReducer from "./slices/products";

export const store = configureStore({
  reducer: {
    testing: testingReducer,
    cart: cartReducer,
    [productsReducer.reducerPath]: productsReducer.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsReducer.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
