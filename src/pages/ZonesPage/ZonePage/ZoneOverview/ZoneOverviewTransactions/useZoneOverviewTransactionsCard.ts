import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { ChartItemWithTime } from 'components/ui/AreaChart/AreaChart.props';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

export function useZoneOverviewTransactionCard(): {
  data: Data | undefined;
  loading: boolean;
} {
  const { zone = '' } = useParams();
  const [period] = useSelectedPeriod();

  const { data, isLoading } = useQuery<ZoneOverviewTransactionCardResult>({
    queryKey: [`ibcTransferChart/${zone}/${period}`],
  });

  return {
    data: data?.data,
    loading: isLoading,
  };
}

interface ZoneOverviewTransactionCardResult {
  data: Data;
}

interface Data {
  zone: string;
  totalIbcTransfersCount?: number;
  totalPending?: number;
  chart: Chart[];
}

interface Chart extends ChartItemWithTime {
  time: number;
  pending: number;
  ibcTransfersCount: number;
}
