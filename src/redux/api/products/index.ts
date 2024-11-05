import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    postCreate: build.mutation<
      POSTALL.PostCreateResponse,
      POSTALL.PostCreateRequest
    >({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["post-my"],
    }),
    getProduct: build.query<
      POSTALL.GetProductResponse,
      POSTALL.GetProductRequest
    >({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["post-my"],
    }),
  }),
});

export const { usePostCreateMutation, useGetProductQuery } = api;
