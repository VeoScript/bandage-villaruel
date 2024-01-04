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
      action.payload.forEach((newProduct) => {
        const existingProductIndex = state.carts.findIndex(
          (cartProduct) => cartProduct.id === newProduct.id,
        );

        if (existingProductIndex !== -1) {
          state.carts[existingProductIndex].quantity += newProduct.quantity;
        } else {
          state.carts = [...state.carts, newProduct];
        }
      });
    },
    changeQuantity: (state, action: PayloadAction<{ id: number; updatedQuantity: number }>) => {
      state.carts = state.carts.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: action.payload.updatedQuantity ?? 1,
          };
        }
        return product;
      });
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      state.carts = state.carts.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      state.carts = state.carts.map((product) => {
        if (product.id === action.payload && product.quantity > 1) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.carts = state.carts.filter((product) => product.id !== action.payload);
    },
  },
});

export const {
  setCartCount,
  setCarts,
  changeQuantity,
  incrementQuantity,
  decrementQuantity,
  removeProduct,
} = cartSlice.actions;

export default cartSlice.reducer;
