import { useQuery } from '@apollo/client';

import { PERIODS_IN_HOURS_BY_KEY } from 'components';
import { PeriodKeys } from 'components/PeriodSelector/Types';
import { ZoneCompareActivityDocument } from 'graphql/v2/ZonesPage/ComparisonPage/__generated__/ZoneCompareActivity.query.generated';

export type ZonesComparisonActivityQueryResult = {
  key: string;
  zoneName: string;
  ibcVolume?: any;
  ibcVolumeIn?: any;
  ibcVolumeOut?: any;
  ibcVolumeInPercent?: any;
  ibcVolumeOutPercent?: any;
  ibcTransfers?: number;
  dau?: number | null;
  ibcDau?: number | null;
  totalTxs?: number;
}[];

export function useZonesComprisonActivity(
  period: PeriodKeys,
  zones: string[]
): {
  data: ZonesComparisonActivityQueryResult | undefined;
  loading: boolean;
} {
  const options = {
    variables: { zones, period: PERIODS_IN_HOURS_BY_KEY[period], isMainnet: true },
    skip: !zones,
  };

  const { data, loading } = useQuery(ZoneCompareActivityDocument, options);

  return {
    data:
      data &&
      data?.data?.map((item) => ({
        key: item.zone,
        zoneName: item.name,
        ibcVolume: item?.switchedStats[0]?.ibcVolume,
        ibcVolumeIn: item?.switchedStats[0]?.ibcVolumeIn,
        ibcVolumeOut: item?.switchedStats[0]?.ibcVolumeOut,
        ibcVolumeInPercent: item?.switchedStats[0]?.ibcVolumeInPercent,
        ibcVolumeOutPercent: item?.switchedStats[0]?.ibcVolumeOutPercent,
        ibcTransfers: item?.switchedStats[0]?.ibcTransfers,
        totalTxs: item.stats[0]?.totalTxs,
        dau: item.stats[0]?.dau,
        ibcDau: item.stats[0]?.ibcDau,
      })),
    loading,
  };
}
