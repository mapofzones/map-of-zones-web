import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { PERIODS_IN_HOURS_BY_KEY } from 'components';
import { SidebarZoneOverviewDocument } from 'graphql/v2/HomePage/Sidebar/ZoneDetails/__generated__/ZoneOverview.query.generated';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { ChartItemByString } from 'utils/helper';

export interface ZoneOverviewData {
  ibcTransfers: number;
  peersCount: number;
  channelsCount: number;
  ibcVolume: number;
  ibcVolumeIn: number;
  ibcVolumeOut: number;
  ibcVolumeInPercent: number;
  ibcVolumeOutPercent: number;
  ibcVolumeInPending: number;
  ibcVolumeOutPending: number;
  ibcVolumeChart: ChartItemByString[];
  totalTxs: number;
  ibcDau: number;
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
      ...data.zoneOverview[0],
      ...data.stats[0],
    },
    loading,
  };
}
