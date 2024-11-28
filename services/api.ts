import { BASE_URL } from "@/constants/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "store";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;
      if (token) headers.set("authorization", token);
      return headers;
    },
    credentials: "include",
    mode: "cors",
  }),
  tagTypes: ["Config", "User"],
  endpoints: (_) => ({}),
});

export default api;
