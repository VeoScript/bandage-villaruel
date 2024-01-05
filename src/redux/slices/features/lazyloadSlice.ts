"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LazyLoadState {
  isLazyLoad: boolean;
}

const initialState: LazyLoadState = {
  isLazyLoad: false,
};

export const lazyLoadSlice = createSlice({
  name: "lazyload",
  initialState,
  reducers: {
    setIsLazyLoad: (state, action: PayloadAction<boolean>) => {
      state.isLazyLoad = action.payload;
    },
  },
});

export const { setIsLazyLoad } = lazyLoadSlice.actions;

export default lazyLoadSlice.reducer;
