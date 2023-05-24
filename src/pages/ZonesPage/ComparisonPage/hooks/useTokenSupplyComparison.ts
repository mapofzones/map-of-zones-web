import { useMemo } from 'react';

import { useQuery } from '@apollo/client';

import { ZoneCompareBlockchainParametersDocument } from 'graphql/v2/ZonesPage/ComparisonPage/__generated__/ZoneCompareBlockchainParameters.query.generated';
import { DataResultWithLoading } from 'types/DataResultWithLoading';
import { ZoneAnalysisBlockchainParametersData } from 'types/models/Analysis/ZoneAnalysisBlockchainParametersData';
import { nullsToUndefined } from 'utils/nullsToUndefinedConverter';
import { resolveStackingApr } from 'utils/resolveStackingApr';

import { sortDetailsByZoneKeys } from '../utils/sortDetailsByZoneKeys';

export interface ZoneComparisonBlockchainParametersData
  extends ZoneAnalysisBlockchainParametersData {
  zone: string;
}

export interface ZonesComparisonInterchainResult
  extends DataResultWithLoading<ZoneComparisonBlockchainParametersData[]> {}

export function useTokenSupplyComparison(zones: string[]): ZonesComparisonInterchainResult {
  const options = {
    variables: {
      zones: [...zones],
      isMainnet: true,
    },
    skip: !zones,
  };

  const { data, loading } = useQuery(ZoneCompareBlockchainParametersDocument, options);

  return useMemo(() => {
    const mappedData =
      data?.blockchains?.map((parameters) => ({
        zone: parameters.zone,
        inflation: parameters?.inflation,
        stackingApr: resolveStackingApr(parameters.zone, parameters?.stackingApr),
        unbondingPeriod: parameters?.unbondingPeriod,
        bondedTokens: parameters?.bondedTokens,
        bondedTokensPercent: parameters?.bondedTokensPercent,
        validatorsCnt: parameters?.validatorsCnt,
        nodesCnt: parameters?.nodesCnt,
        onChainSupply: parameters?.token?.onChainSupply,
      })) ?? [];

    const sortedZones = sortDetailsByZoneKeys(zones, mappedData);
    return {
      data: nullsToUndefined(sortedZones),
      loading,
    };
  }, [data?.blockchains, loading, zones]);
}
