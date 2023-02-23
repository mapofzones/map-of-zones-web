import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { OverviewCardPeriod } from 'components/OverviewChartCard';

import {
  ZoneOverviewIbcTransactionsCardData,
  ZoneOverviewIbcTransactionsCardResult,
} from './ZoneOverviewIbcTransactions.types';

export function useZoneOverviewTransactionCard(period: OverviewCardPeriod): {
  data: ZoneOverviewIbcTransactionsCardData | undefined;
  loading: boolean;
} {
  const { zone = '' } = useParams();

  const { data, isLoading } = useQuery<ZoneOverviewIbcTransactionsCardResult>({
    queryKey: [`txsChart/${zone}/${period}`],
    enabled: !!period && !!zone,
  });

  return {
    data: data?.data,
    loading: isLoading,
  };
}
