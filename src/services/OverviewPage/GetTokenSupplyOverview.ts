import {
  ZoneOverviewParametersDocument,
  ZoneOverviewParametersQueryResult,
  ZoneOverviewParametersQueryVariables,
} from 'graphql/v2/ZonesPage/ZonePage/__generated__/ZoneOverviewParameters.query.generated';
import { graphqlApi } from 'services/baseGraphqlApi';
import { ZoneAnalysisBlockchainParametersData } from 'types/models/Analysis/ZoneAnalysisBlockchainParametersData';
import { nullsToUndefined } from 'utils/nullsToUndefinedConverter';
import { resolveStackingApr } from 'utils/resolveStackingApr';

export interface ZoneComparisonBlockchainParametersData
  extends ZoneAnalysisBlockchainParametersData {
  zone: string;
}

const overviewApi = graphqlApi.injectEndpoints({
  endpoints: (builder) => ({
    getTokenSupplyOverview: builder.query<
      ZoneAnalysisBlockchainParametersData,
      ZoneOverviewParametersQueryVariables
    >({
      query: (variables: ZoneOverviewParametersQueryVariables) => ({
        document: ZoneOverviewParametersDocument,
        variables,
        skip: !variables.zone,
      }),
      transformResponse: (data: ZoneOverviewParametersQueryResult | undefined, _, { zone }) => {
        const parameters = data?.blockchain[0];

        return nullsToUndefined({
          inflation: parameters?.inflation,
          stackingApr: resolveStackingApr(zone, parameters?.stackingApr),
          unbondingPeriod: parameters?.unbondingPeriod,
          bondedTokens: parameters?.bondedTokens,
          bondedTokensPercent: parameters?.bondedTokensPercent,
          validatorsCnt: parameters?.validatorsCnt,
          nodesCnt: parameters?.nodesCnt,
          onChainSupply: parameters?.token?.onChainSupply,
        });
      },
    }),
  }),
});

export const { useGetTokenSupplyOverviewQuery } = overviewApi;
