import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { PERIODS_IN_HOURS_BY_KEY } from 'components';
import { SidebarZoneOverviewDocument } from 'graphql/v2/HomePage/Sidebar/ZoneDetails/__generated__/ZoneOverview.query.generated';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

export interface ZoneOverviewData {
  ibcTransfers: number;
  peersCount: number;
  channelsCount: number;
  totalTxs: number;
  ibcDau?: number | null;
  dau?: number | null;
  ibcDauPercent: number;
  tokenSymbol?: string | null;
  price: number;
  marketCap: number;
}

export function useZoneOverview(): {
  data: ZoneOverviewData | undefined;
  loading: boolean;
} {
  const { zone = '' } = useParams();
  const [period] = useSelectedPeriod();

  const options = {
    variables: { zone, period: PERIODS_IN_HOURS_BY_KEY[period], isMainnet: true },
    skip: !zone,
  };
  const { data, loading } = useQuery(SidebarZoneOverviewDocument, options);

  return {
    data: data && {
      ibcTransfers: data.switchedStats[0]?.ibcTransfers,
      peersCount: data.switchedStats[0]?.peersCount,
      channelsCount: data.switchedStats[0]?.channelsCount,
      totalTxs: data.stats[0]?.totalTxs,
      ibcDau: data.stats[0]?.ibcDau,
      dau: data.stats[0]?.dau,
      ibcDauPercent: data.stats[0]?.ibcDauPercent,
      tokenSymbol: data.blockchain[0]?.token?.symbol,
      price: data.blockchain[0]?.token?.price,
      marketCap: data.blockchain[0]?.token?.marketCap,
    },
    loading,
  };
}
