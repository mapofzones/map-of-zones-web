import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { ChartItemWithTime } from 'components/ui/AreaChart/AreaChart.props';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

export function useZoneOverviewIbcTransfersCard(): {
  data: ZoneOverviewIbcTransfersCardData | undefined;
  loading: boolean;
} {
  const { zone = '' } = useParams();
  const [period] = useSelectedPeriod();

  const { data, isLoading } = useQuery<ZoneOverviewIbcTransfersCardResult>({
    queryKey: [`ibcTransferChart/${zone}/${period}`],
  });

  return {
    data: data?.data,
    loading: isLoading,
  };
}

interface ZoneOverviewIbcTransfersCardResult {
  data: ZoneOverviewIbcTransfersCardData;
}

interface ZoneOverviewIbcTransfersCardData {
  zone: string;
  totalIbcTransfersCount?: number;
  totalPending?: number;
  chart: IbcTransfersChart[];
}

interface IbcTransfersChart extends ChartItemWithTime {
  time: number;
  pending: number;
  ibcTransfersCount: number;
}
