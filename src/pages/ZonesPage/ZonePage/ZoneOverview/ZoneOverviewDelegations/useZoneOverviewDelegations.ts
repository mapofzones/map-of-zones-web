import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import {
  ZoneOverviewDelegationsCardData,
  ZoneOverviewDelegationsCardResult,
} from './ZoneOverviewDelegations.types';

export function useZoneOverviewDelegations(): {
  data: ZoneOverviewDelegationsCardData | undefined;
  loading: boolean;
} {
  const { zone = '' } = useParams();
  const [period] = useSelectedPeriod();

  const { data, isLoading } = useQuery<ZoneOverviewDelegationsCardResult>({
    queryKey: [`delegationsAmountChart/${zone}/${period}`],
  });

  return {
    data: data?.data,
    loading: isLoading,
  };
}
