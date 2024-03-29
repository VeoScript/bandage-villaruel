"use client";

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import cartReducer from "./slices/features/cartSlice";
import wishlistReducer from "./slices/features/wishlistSlice";
import productsReducer from "./slices/services/productsApi";
import toastReducer from "./slices/features/toastSlice";
import lazyloadReducer from "./slices/features/lazyloadSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    toast: toastReducer,
    lazyloadSlice: lazyloadReducer,
    [productsReducer.reducerPath]: productsReducer.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsReducer.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
