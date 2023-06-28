import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseRestQuery = fetchBaseQuery({
  baseUrl: 'https://calc-api-n9ypi.ondigitalocean.app/api/beta/',
});

export const restApi = createApi({
  reducerPath: 'restApi',
  baseQuery: baseRestQuery,
  endpoints: () => ({}),
});
