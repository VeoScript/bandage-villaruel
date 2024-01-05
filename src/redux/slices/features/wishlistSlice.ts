"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WishlistState {
  wishlist_count: number;
  wishlists: any[];
}

const persistWishlists: any[] =
  localStorage.getItem("wishlists") !== null
    ? JSON.parse(localStorage.getItem("wishlists") as string)
    : [];

const initialState: WishlistState = {
  wishlist_count: 0,
  wishlists: persistWishlists,
};

export const wishlistSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setWishlistCount: (state, action: PayloadAction<number>) => {
      state.wishlist_count = action.payload;
    },
    setWishlists: (state, action: PayloadAction<any[]>) => {
      action.payload.forEach((newWishlist) => {
        const existingProductIndex = state.wishlists.findIndex(
          (wishlistProduct) => wishlistProduct.id === newWishlist.id,
        );

        if (existingProductIndex !== -1) {
          state.wishlists[existingProductIndex];
        } else {
          state.wishlists = [...state.wishlists, newWishlist];
        }
      });

      localStorage.setItem("wishlists", JSON.stringify(state.wishlists));
    },
    removeWishlist: (state, action: PayloadAction<number>) => {
      state.wishlists = state.wishlists.filter((wishlist) => wishlist.id !== action.payload);

      localStorage.setItem("wishlists", JSON.stringify(state.wishlists));
    },
    clearWishlists: (state) => {
      state.wishlists = [];
      state.wishlist_count = 0;

      localStorage.setItem("wishlists", JSON.stringify([]));
    },
  },
});

export const { setWishlistCount, setWishlists, removeWishlist, clearWishlists } = wishlistSlice.actions;

export default wishlistSlice.reducer;
