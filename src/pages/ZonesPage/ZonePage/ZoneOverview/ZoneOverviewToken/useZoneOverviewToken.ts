import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { ZoneOverviewTokenDocument } from 'graphql/v2/ZonesPage/ZonePage/__generated__/ZoneOverviewToken.query.generated';
import { nullsToUndefined } from 'utils/nullsToUndefinedConverter';

export interface ZoneOverviewTokenData {
  symbol?: string | null;
  price?: number | null;
  logoUrl?: string | null;
  priceDayDiffPercent?: number | null;
  priceWeekDiffPercent?: number | null;
  priceMonthDiffPercent?: number | null;
  marketCap?: number | null;
  tradingVolumeDay?: number | null;
}

export function useZoneOverviewToken(): {
  data: ZoneOverviewTokenData | undefined;
  loading: boolean;
} {
  const { zone = '' } = useParams();

  const options = {
    variables: { zone },
    skip: !zone,
  };

  const { data, loading } = useQuery(ZoneOverviewTokenDocument, options);

  return {
    data: nullsToUndefined(data?.overviewBlockchain[0]?.token),
    loading,
  };
}
