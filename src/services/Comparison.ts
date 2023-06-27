import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';

import {
  ZoneCompareBlockchainParametersDocument,
  ZoneCompareBlockchainParametersQueryResult,
} from 'graphql/v2/ZonesPage/ComparisonPage/__generated__/ZoneCompareBlockchainParameters.query.generated';
import { nullsToUndefined } from 'utils/nullsToUndefinedConverter';
import { resolveStackingApr } from 'utils/resolveStackingApr';

const baseQuery = graphqlRequestBaseQuery({
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

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: (builder) => ({
    getTokenSupply: builder.query({
      query: (zones: string[]) => ({
        document: ZoneCompareBlockchainParametersDocument,
        variables: {
          zones: [...zones],
        },
        skip: !zones,
      }),
      transformResponse: (
        data: ZoneCompareBlockchainParametersQueryResult | undefined,
        _,
        zones
      ) => {
        const mappedData =
          data?.blockchains?.map((parameters) => ({
            zone: parameters.zone,
            inflation: parameters?.inflation,
            stackingApr: resolveStackingApr(parameters.zone, parameters?.stackingApr),
            unbondingPeriod: parameters?.unbondingPeriod,
            bondedTokens: parameters?.bondedTokens,
            bondedTokensPercent: parameters?.bondedTokensPercent,
            validatorsCount: parameters?.validatorsCnt,
            nodesCount: parameters?.nodesCnt,
            onChainSupply: parameters?.token?.onChainSupply,
          })) ?? [];

        const sorted = sortDetailsByZoneKeys(zones, mappedData);
        return nullsToUndefined(sorted);
      },
    }),
  }),
});

export const { useGetTokenSupplyQuery } = apiSlice;

export function sortDetailsByZoneKeys<T extends { zone: string }>(
  zones: string[],
  mappedData: T[]
): T[] {
  return zones
    .map((zone) => mappedData.find((zoneDetails) => zoneDetails.zone === zone))
    .filter((zone): zone is T => zone !== undefined);
}
