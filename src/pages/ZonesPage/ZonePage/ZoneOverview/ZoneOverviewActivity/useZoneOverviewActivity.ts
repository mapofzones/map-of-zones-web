import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { PERIODS_IN_HOURS_BY_KEY } from 'components';
import { PeriodKeys } from 'components/PeriodSelector/Types';
import { ZoneOverviewActivityDocument } from 'graphql/v2/ZonesPage/ZonePage/__generated__/ZoneOverviewActivity.query.generated';

export type ZoneOverviewActivityQueryResult = {
  ibcVolume?: any;
  ibcVolumeIn?: any;
  ibcVolumeOut?: any;
  ibcVolumeInPercent?: any;
  ibcVolumeOutPercent?: any;
  ibcTransfers?: number;
  dau?: number | null;
  ibcDau?: number | null;
  totalTxs?: number;
};

export function useZoneOverviewActivity(period: PeriodKeys): {
  data: ZoneOverviewActivityQueryResult | undefined;
  loading: boolean;
} {
  const { zone = '' } = useParams();

  const options = {
    variables: { zone, period: PERIODS_IN_HOURS_BY_KEY[period], isMainnet: true },
    skip: !zone,
  };

  const { data, loading } = useQuery(ZoneOverviewActivityDocument, options);

  return {
    data: data && {
      ibcVolume: data?.switchedStats?.ibcVolume,
      ibcVolumeIn: data?.switchedStats?.ibcVolumeIn,
      ibcVolumeOut: data?.switchedStats?.ibcVolumeOut,
      ibcVolumeInPercent: data?.switchedStats?.ibcVolumeInPercent,
      ibcVolumeOutPercent: data?.switchedStats?.ibcVolumeOutPercent,
      ibcTransfers: data?.switchedStats?.ibcTransfers,
      totalTxs: data.stats[0]?.totalTxs,
      dau: data.stats[0]?.dau,
      ibcDau: data.stats[0]?.ibcDau,
    },
    loading,
  };
}
