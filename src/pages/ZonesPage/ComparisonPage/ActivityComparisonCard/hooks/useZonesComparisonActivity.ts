import { useQuery } from '@apollo/client';

import { PERIODS_IN_HOURS_BY_KEY } from 'components';
import { PeriodKeys } from 'components/PeriodSelector/Types';
import { ZoneCompareActivityDocument } from 'graphql/v2/ZonesPage/ComparisonPage/__generated__/ZoneCompareActivity.query.generated';

export interface DauData {
  dau?: number;
  ibcDau?: number;
}
export interface TransfersData {
  ibcTransfers?: number;
  totalTxs?: number;
}
export interface VolumeData {
  ibcVolume?: number;
  ibcVolumeIn?: number;
  ibcVolumeOut?: number;
}

export function useZonesComprisonActivity(
  period: PeriodKeys,
  zones: string[]
): {
  zones: { zone: string; zoneName: string }[];
  volumeData: VolumeData[];
  transfersData: TransfersData[];
  dauData: DauData[];
  loading: boolean;
} {
  const options = {
    variables: { zones: [...zones], period: PERIODS_IN_HOURS_BY_KEY[period], isMainnet: true },
    skip: !zones,
  };

  const { data, loading } = useQuery(ZoneCompareActivityDocument, options);

  return {
    zones: data?.data?.map((item) => ({ zone: item.zone, zoneName: item.name })) ?? [],
    volumeData:
      data?.data?.map((item) => ({
        ibcVolume: item?.switchedStats[0]?.ibcVolume,
        ibcVolumeIn: item?.switchedStats[0]?.ibcVolumeIn,
        ibcVolumeOut: item?.switchedStats[0]?.ibcVolumeOut,
      })) ?? [],
    transfersData:
      data?.data?.map((item) => ({
        ibcTransfers: item?.switchedStats[0]?.ibcTransfers,
        totalTxs: item.stats[0]?.totalTxs,
      })) ?? [],
    dauData:
      data?.data?.map((item) => ({
        dau: item.stats[0]?.dau ?? undefined,
        ibcDau: item.stats[0]?.ibcDau ?? undefined,
      })) ?? [],
    loading,
  };
}
