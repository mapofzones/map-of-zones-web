import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { ZoneOverviewParametersDocument } from 'graphql/v2/ZonesPage/ZonePage/__generated__/ZoneOverviewParameters.query.generated';

export interface ZoneOverviewParametersData {
  inflation?: number | null;
  stackingApr?: number | null;
  unbondingPeriod?: number | null;
  bondedTokens?: number | null;
  bondedTokensPercent?: number | null;
  validatorsCnt?: number | null;
  nodesCnt?: number | null;
  onChainSupply?: number | null;
}

export function useZoneOverviewParameters(): {
  data: ZoneOverviewParametersData;
  loading: boolean;
} {
  const { zone = '' } = useParams();

  const options = {
    variables: { zone },
    skip: !zone,
  };

  const { data, loading } = useQuery(ZoneOverviewParametersDocument, options);

  return {
    data: {
      inflation: data?.blockchain[0].inflation,
      stackingApr: data?.blockchain[0].stackingApr,
      unbondingPeriod: data?.blockchain[0].unbondingPeriod,
      bondedTokens: data?.blockchain[0].bondedTokens,
      bondedTokensPercent: data?.blockchain[0].bondedTokensPercent,
      validatorsCnt: data?.blockchain[0].validatorsCnt,
      nodesCnt: data?.blockchain[0].nodesCnt,
      onChainSupply: data?.blockchain[0].token?.onChainSupply,
    },
    loading,
  };
}
