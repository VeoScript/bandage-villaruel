"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsSlice = createApi({
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<undefined, void>({
      query: () => `products`,
    }),
  }),
});

export const { useGetProductsQuery } = productsSlice;

export default productsSlice;
