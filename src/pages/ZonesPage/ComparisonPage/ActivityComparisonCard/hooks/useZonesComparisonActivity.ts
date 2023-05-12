import { useQuery } from '@apollo/client';

import { PERIODS_IN_HOURS_BY_KEY } from 'components';
import { PeriodKeys } from 'components/PeriodSelector/Types';
import { ZoneCompareActivityDocument } from 'graphql/v2/ZonesPage/ComparisonPage/__generated__/ZoneCompareActivity.query.generated';

import { ZoneDetails } from '../../types/ZoneDetails';
import { sortDetailsByZoneKeys } from '../../utils/sortDetailsByZoneKeys';

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

interface ZoneComparisonActivityResult extends ZoneDetails, VolumeData, TransfersData, DauData {}

export function useZonesComprisonActivity(
  period: PeriodKeys,
  zones: string[]
): {
  data: ZoneComparisonActivityResult[];
  loading: boolean;
} {
  const options = {
    variables: { zones: [...zones], period: PERIODS_IN_HOURS_BY_KEY[period], isMainnet: true },
    skip: !zones,
  };

  const { data, loading } = useQuery(ZoneCompareActivityDocument, options);

  const mappedData: ZoneComparisonActivityResult[] = (data?.data ?? []).map((item) => ({
    zone: item.zone,
    name: item.name,
    ibcVolume: item?.switchedStats[0]?.ibcVolume,
    ibcVolumeIn: item?.switchedStats[0]?.ibcVolumeIn,
    ibcVolumeOut: item?.switchedStats[0]?.ibcVolumeOut,
    ibcTransfers: item?.switchedStats[0]?.ibcTransfers,
    totalTxs: item.stats[0]?.totalTxs,
    dau: item.stats[0]?.dau ?? undefined,
    ibcDau: item.stats[0]?.ibcDau ?? undefined,
  }));

  const sortedZones = sortDetailsByZoneKeys(zones, mappedData);

  return {
    data: sortedZones,
    loading,
  };
}
