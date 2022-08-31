import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { ZoneOverviewTokenDocument } from 'graphql/v2/ZonesPage/ZonePage/__generated__/ZoneOverviewToken.query.generated';
import { ChartItemByString } from 'utils/helper';

export interface ZoneOverviewTokenData {
  symbol?: string | null;
  price?: number | null;
  logoUrl?: string | null;
  priceDayDiffPercent?: number | null;
  priceWeekDiffPercent?: number | null;
  marketCap?: number | null;
  tradingVolumeDay?: number | null;
  priceChart: ChartItemByString[];
  volumeChart: ChartItemByString[];
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
    data: data?.overviewToken[0],
    loading,
  };
}
