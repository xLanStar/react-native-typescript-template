import {
  AUTH_CONFIG_URL,
  AUTH_PROVIDER_TOKEN_URL,
  AUTH_SESSION_URL,
} from "@/constants/api";
import api from "./api";

export const authEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getConfig: builder.query({
      query: () => ({
        url: AUTH_CONFIG_URL,
        method: "GET",
      }),
      providesTags: ["Config"],
    }),
    getSession: builder.query({
      query: () => ({
        url: AUTH_SESSION_URL,
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    login: builder.mutation({
      query: (body) => ({
        url: AUTH_PROVIDER_TOKEN_URL,
        method: "POST",
        body,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: AUTH_SESSION_URL,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useLoginMutation,
  useGetConfigQuery,
  useGetSessionQuery,
  useLogoutMutation,
} = authEndpoints;
