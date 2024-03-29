"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsSlice = createApi({
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<any, { pageNumber: number; limit: number }>({
      query: ({ pageNumber, limit }) => `products?limit=${limit}&skip=${pageNumber * 10}`,
      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Update cache with new data or replace the cache if it's the first page
      merge: (currentCache, newItems, { arg }) => {
        if (arg.pageNumber === 1) {
          return newItems;
        }
        currentCache.products.push(...newItems.products);
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.pageNumber !== previousArg?.pageNumber;
      },
    }),
    getProductById: builder.query<any, number>({
      query: (id) => `products/${id}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsSlice;

export default productsSlice;
