import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';

export const baseGraphqlQuery = graphqlRequestBaseQuery({
  url: process.env.REACT_APP_GRAPHQL_HTTP_URI || '',
  customErrors: ({ name, stack, response }) => {
    const {
      message = '',
      statusCode = 500,
      error = '',
    } = response?.errors?.length ? response?.errors[0]?.extensions.response : {};

    return {
      name,
      message,
      statusCode,
      error,
      stack,
    };
  },
});

// eslint-disable-next-line sort-exports/sort-exports
export const graphqlApi = createApi({
  reducerPath: 'graphqlApi',
  baseQuery: baseGraphqlQuery,
  endpoints: () => ({}),
});
