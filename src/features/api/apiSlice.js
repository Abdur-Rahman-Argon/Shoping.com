import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => ({ url: "/products" }),
    }),

    getCartProduct: builder.mutation({
      query: (email) => ({
        url: `cart/${email}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductQuery, useGetCartProductMutation } = productApi;
