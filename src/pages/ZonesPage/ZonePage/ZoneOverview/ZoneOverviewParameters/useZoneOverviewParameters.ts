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

const OSMOSIS_KEY = 'osmosis-1';
const OSMOSIS_APR = 22.08;
const OSMOSIS_INFLATION = 36.5;

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
      inflation: zone === OSMOSIS_KEY ? OSMOSIS_INFLATION : data?.blockchain[0].inflation,
      stackingApr: zone === OSMOSIS_KEY ? OSMOSIS_APR : data?.blockchain[0].stackingApr,
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
