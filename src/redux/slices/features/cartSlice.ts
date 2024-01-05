"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  totalAmount: number;
  cart_count: number;
  carts: any[];
}

let persistCarts = [];

let totalAmount = 0;

if (typeof window !== "undefined") {
  persistCarts =
    localStorage.getItem("carts") !== null
      ? JSON.parse(localStorage.getItem("carts") as string)
      : [];
  totalAmount =
    localStorage.getItem("totalAmount") !== null
      ? JSON.parse(localStorage.getItem("totalAmount") as string)
      : 0;
}

const initialState: CartState = {
  totalAmount: totalAmount,
  cart_count: 0,
  carts: persistCarts,
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
          const existingProduct = state.carts[existingProductIndex];
          const updatedQuantity = existingProduct.quantity + newProduct.quantity;

          existingProduct.quantity = updatedQuantity;
          existingProduct.price = existingProduct.price + newProduct.price * newProduct.quantity;
        } else {
          const totalPriceForNewProduct = newProduct.price * newProduct.quantity;

          state.carts = [
            ...state.carts,
            {
              ...newProduct,
              price: totalPriceForNewProduct,
            },
          ];
        }
      });

      const subTotal = state.carts.reduce((total, product) => {
        return total + product.price;
      }, 0);

      state.totalAmount = subTotal;

      localStorage.setItem("carts", JSON.stringify(state.carts));
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
    },
    changeQuantity: (state, action: PayloadAction<{ id: number; updatedQuantity: number }>) => {
      state.carts = state.carts.map((product) => {
        if (product.id === action.payload.id) {
          const updatedQuantity = action.payload.updatedQuantity ?? 1;

          if (updatedQuantity < 1) {
            return product;
          }

          const pricePerUnit = product.price / product.quantity;
          const updatedPrice = pricePerUnit * updatedQuantity;
          return {
            ...product,
            quantity: updatedQuantity,
            price: updatedPrice,
          };
        }
        return product;
      });

      const subTotal = state.carts.reduce((total, product) => {
        return total + product.price;
      }, 0);

      state.totalAmount = subTotal;

      localStorage.setItem("carts", JSON.stringify(state.carts));
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      state.carts = state.carts.map((product) => {
        if (product.id === action.payload) {
          const updatedQuantity = product.quantity + 1;
          const pricePerItem = product.price / product.quantity;
          const updatedPrice = pricePerItem * updatedQuantity;
          return {
            ...product,
            quantity: updatedQuantity,
            price: updatedPrice,
          };
        }
        return product;
      });

      const subTotal = state.carts.reduce((total, product) => {
        return total + product.price;
      }, 0);

      state.totalAmount = subTotal;

      localStorage.setItem("carts", JSON.stringify(state.carts));
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      state.carts = state.carts.map((product) => {
        if (product.id === action.payload && product.quantity > 1) {
          const updatedQuantity = product.quantity - 1;
          const pricePerItem = product.price / product.quantity;
          const updatedPrice = pricePerItem * updatedQuantity;
          return {
            ...product,
            quantity: updatedQuantity,
            price: updatedPrice,
          };
        }
        return product;
      });

      const subTotal = state.carts.reduce((total, product) => {
        return total + product.price;
      }, 0);

      state.totalAmount = subTotal;

      localStorage.setItem("carts", JSON.stringify(state.carts));
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.carts = state.carts.filter((product) => product.id !== action.payload);

      const subTotal = state.carts.reduce((total, product) => {
        return total + product.price;
      }, 0);

      state.totalAmount = subTotal;

      localStorage.setItem("carts", JSON.stringify(state.carts));
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
    },
    clearCart: (state) => {
      state.carts = [];
      state.cart_count = 0;
      state.totalAmount = 0;

      localStorage.setItem("carts", JSON.stringify([]));
      localStorage.setItem("totalAmount", JSON.stringify(0));
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
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
