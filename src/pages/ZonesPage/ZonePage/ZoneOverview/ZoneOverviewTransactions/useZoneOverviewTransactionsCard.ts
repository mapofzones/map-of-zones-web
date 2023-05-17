import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { OVERVIEW_PERIODS_API_KEYS } from 'components/OverviewChartCardWithMetadata';
import { AnalysisCardPeriod } from 'types/AnalysisCardPeriod';

import {
  ZoneOverviewIbcTransactionsCardData,
  ZoneOverviewIbcTransactionsCardResult,
} from './ZoneOverviewIbcTransactions.types';

export function useZoneOverviewTransactionCard(period: AnalysisCardPeriod): {
  data: ZoneOverviewIbcTransactionsCardData | undefined;
  loading: boolean;
} {
  const { zone = '' } = useParams();

  const { data, isLoading } = useQuery<ZoneOverviewIbcTransactionsCardResult>({
    queryKey: [`txsChart/${zone}/${OVERVIEW_PERIODS_API_KEYS[period]}`],
    enabled: !!period && !!zone,
  });

  return {
    data: data?.data,
    loading: isLoading,
  };
}
