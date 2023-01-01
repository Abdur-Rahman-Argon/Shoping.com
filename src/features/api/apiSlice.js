import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["Products", "Carts", "Orders", "Reviews"],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => ({ url: "/products" }),
    }),

    getProductDetails: builder.mutation({
      query: (id) => ({
        url: `/product-details/${id}`,
        method: "GET",
      }),
    }),

    getOrder: builder.mutation({
      query: (email) => ({
        url: `/my-orders/${email}`,
        method: "GET",
      }),
    }),

    getCartProduct: builder.mutation({
      query: (email) => ({
        url: `/cart/${email}`,
        method: "GET",
      }),
      providesTags: ["Carts"],
    }),

    addToCart: builder.mutation({
      query: (Product) => ({
        url: `/add-to-cart`,
        method: "POST",
        body: Product,
      }),
    }),

    deleteCartProduct: builder.mutation({
      query: (id) => ({
        url: `/delete-cart-product/${id}`,
        method: "delete",
      }),
      invalidatesTags: ["Carts"],
    }),

    //
  }),
});

export const {
  useGetProductQuery,
  useGetCartProductMutation,
  useGetOrderMutation,
  useAddToCartMutation,
  useGetProductDetailsMutation,
  useDeleteCartProductMutation,
} = productApi;
