import { apiSlice } from './apiSlice';

export const postsApi = apiSlice.injectEndpoints?.({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts'
    })
  })
});

export const { useGetPostsQuery } = postsApi;
