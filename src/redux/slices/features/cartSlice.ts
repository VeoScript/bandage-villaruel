"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  cart_count: number;
  carts: any[];
}

const initialState: CartState = {
  cart_count: 0,
  carts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartCount: (state, action: PayloadAction<number>) => {
      state.cart_count = action.payload;
    },
    setCarts: (state, action: PayloadAction<any[]>) => {
      state.carts = action.payload;
    },
  },
});

export const { setCartCount, setCarts } = cartSlice.actions;

export default cartSlice.reducer;
