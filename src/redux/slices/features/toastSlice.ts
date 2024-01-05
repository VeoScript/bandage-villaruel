"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ToastState {
  isShowToast: boolean;
  message: string;
}

const initialState: ToastState = {
  isShowToast: false,
  message: "",
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    toast: (state, action: PayloadAction<{ isShow: boolean; message: string }>) => {
      state.message = action.payload.message;
      state.isShowToast = action.payload.isShow;
    },
  },
});

export const { toast } = toastSlice.actions;

export default toastSlice.reducer;
