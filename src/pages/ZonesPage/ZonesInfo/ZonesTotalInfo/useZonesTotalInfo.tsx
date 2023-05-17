import { useQuery } from '@apollo/client';

import { PeriodKeys, PERIODS_IN_HOURS_BY_KEY } from 'components';
import { ZonesTotalInfoDocument } from 'graphql/v2/ZonesPage/ZonesInfo/__generated__/ZonesTotalInfo.query.generated';
import { handleChartByPeriod } from 'utils/ handleChartByPeriod';
import { ChartItemByString } from 'types/chart';

interface TopPairZone {
  name: string;
}
export interface TransfersTopPair {
  source: TopPairZone;
  target: TopPairZone;
  ibcTransfers: number;
  ibcTransfersPending: number;
}

export interface VolumeTopPair {
  source: TopPairZone;
  target: TopPairZone;
  ibcVolume?: number;
  ibcVolumePending: number;
}

export interface ZonesTotalInfoData {
  ibcVolume?: number | null;
  ibcVolumePending?: number | null;
  ibcTransfers?: number | null;
  ibcTransfersPending?: number | null;
  ibcTotalVolumeChart?: ChartItemByString[];
  allChannels?: number | null;
  ibcTransfersFailed?: number | null;
  activeChannels?: number | null;
  ibcVolumeTopPair?: VolumeTopPair;
  ibcTransfersTopPair?: TransfersTopPair;
}

export function useZonesTotalInfo(
  selectedPeriod: PeriodKeys,
  isMainnet = true
): { data: ZonesTotalInfoData | null; loading: boolean } {
  const options = {
    variables: {
      period: PERIODS_IN_HOURS_BY_KEY[selectedPeriod],
      isMainnet: isMainnet,
    },
  };

  const { data, loading } = useQuery(ZonesTotalInfoDocument, options);

  return {
    data: data
      ? {
          ibcVolume: data.totalStats?.aggregate?.sum?.ibcVolume,
          ibcTotalVolumeChart: handleChartByPeriod(
            data?.ibcTotalVolumeChart?.slice(),
            selectedPeriod,
            'volume'
          ),
          ibcVolumePending: data.totalStats?.aggregate?.sum?.ibcVolumePending,
          ibcTransfers: data.totalStats?.aggregate?.sum?.ibcTransfers,
          ibcTransfersPending: data.totalStats?.aggregate?.sum?.ibcTransfersPending,
          ibcTransfersFailed: data.allChannels?.aggregate?.sum?.ibcTransfersFailed,
          allChannels: data.allChannels?.aggregate?.count,
          activeChannels: data.activeChannels?.aggregate?.count,
          ibcTransfersTopPair: data.ibcTransfersTopPair?.[0],
          ibcVolumeTopPair: data.ibcVolumeTopPair?.[0],
        }
      : null,
    loading,
  };
}
