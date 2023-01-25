import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import {
  ZoneOverviewIbcTransactionsCardData,
  ZoneOverviewIbcTransactionsCardResult,
} from './ZoneOverviewIbcTransactions.types';

export function useZoneOverviewTransactionCard(): {
  data: ZoneOverviewIbcTransactionsCardData | undefined;
  loading: boolean;
} {
  const { zone = '' } = useParams();
  const [period] = useSelectedPeriod();

  const { data, isLoading } = useQuery<ZoneOverviewIbcTransactionsCardResult>({
    queryKey: [`txsChart/${zone}/${period}`],
    enabled: !!period && !!zone,
  });

  return {
    data: data?.data,
    loading: isLoading,
  };
}
