import {
  ZoneCompareBlockchainParametersDocument,
  ZoneCompareBlockchainParametersQueryResult,
  ZoneCompareBlockchainParametersQueryVariables,
} from 'graphql/v2/ZonesPage/ComparisonPage/__generated__/ZoneCompareBlockchainParameters.query.generated';
import { ZoneAnalysisBlockchainParametersData } from 'types/models/Analysis/ZoneAnalysisBlockchainParametersData';
import { nullsToUndefined } from 'utils/nullsToUndefinedConverter';
import { resolveStackingApr } from 'utils/resolveStackingApr';
import { sortDetailsByZoneKeys } from 'utils/sortDetailsByZoneKeys';

import { api } from './baseApi';
export interface ZoneComparisonBlockchainParametersData
  extends ZoneAnalysisBlockchainParametersData {
  zone: string;
}

export const comparisonApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTokenSupply: builder.query<
      ZoneComparisonBlockchainParametersData[],
      ZoneCompareBlockchainParametersQueryVariables
    >({
      query: (variables: ZoneCompareBlockchainParametersQueryVariables) => ({
        document: ZoneCompareBlockchainParametersDocument,
        variables,
        skip: !variables.zones?.length,
      }),
      transformResponse: (
        data: ZoneCompareBlockchainParametersQueryResult | undefined,
        _,
        { zones }
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

        const sorted =
          Array.isArray(zones) && zones.length > 1
            ? sortDetailsByZoneKeys(zones, mappedData)
            : mappedData;
        return nullsToUndefined(sorted);
      },
    }),
  }),
});

export const { useGetTokenSupplyQuery } = comparisonApi;
