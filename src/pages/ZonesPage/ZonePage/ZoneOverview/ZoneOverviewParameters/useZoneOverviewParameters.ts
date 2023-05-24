import { useMemo } from 'react';

import { useQuery } from '@apollo/client';

import { ZoneOverviewParametersDocument } from 'graphql/v2/ZonesPage/ZonePage/__generated__/ZoneOverviewParameters.query.generated';
import { DataResultWithLoading } from 'types/DataResultWithLoading';
import { ZoneAnalysisBlockchainParametersData } from 'types/models/Analysis/ZoneAnalysisBlockchainParametersData';
import { nullsToUndefined } from 'utils/nullsToUndefinedConverter';
import { resolveStackingApr } from 'utils/resolveStackingApr';

interface ZonesOverviewBlockchainParametersResult
  extends DataResultWithLoading<ZoneAnalysisBlockchainParametersData> {}

export function useZoneOverviewParameters(zone: string): ZonesOverviewBlockchainParametersResult {
  const options = {
    variables: { zone },
    skip: !zone,
  };

  const { data, loading } = useQuery(ZoneOverviewParametersDocument, options);

  return useMemo(() => {
    const parameters = data?.blockchain[0];
    return {
      data: nullsToUndefined({
        inflation: parameters?.inflation,
        stackingApr: resolveStackingApr(zone, parameters?.stackingApr),
        unbondingPeriod: parameters?.unbondingPeriod,
        bondedTokens: parameters?.bondedTokens,
        bondedTokensPercent: parameters?.bondedTokensPercent,
        validatorsCnt: parameters?.validatorsCnt,
        nodesCnt: parameters?.nodesCnt,
        onChainSupply: parameters?.token?.onChainSupply,
      }),
      loading,
    };
  }, [data?.blockchain, loading, zone]);
}
