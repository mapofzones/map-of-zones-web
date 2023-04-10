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

  const parameters = data?.blockchain[0];
  return {
    data: {
      inflation: parameters?.inflation,
      stackingApr: zone === OSMOSIS_KEY ? OSMOSIS_APR : parameters?.stackingApr,
      unbondingPeriod: parameters?.unbondingPeriod,
      bondedTokens: parameters?.bondedTokens,
      bondedTokensPercent: parameters?.bondedTokensPercent,
      validatorsCnt: parameters?.validatorsCnt,
      nodesCnt: parameters?.nodesCnt,
      onChainSupply: parameters?.token?.onChainSupply,
    },
    loading,
  };
}
