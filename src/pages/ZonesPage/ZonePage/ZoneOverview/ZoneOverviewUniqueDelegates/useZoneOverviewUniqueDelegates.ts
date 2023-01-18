import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import {
  ZoneOverviewUniqueDelegatesCardData,
  ZoneOverviewUniqueDelegatesCardResult,
} from './ZoneOverviewUniqueDelegates.types';

export function useZoneOverviewUniqueDelegates(): {
  data: ZoneOverviewUniqueDelegatesCardData | undefined;
  loading: boolean;
} {
  const { zone = '' } = useParams();
  const [period] = useSelectedPeriod();

  const { data, isLoading } = useQuery<ZoneOverviewUniqueDelegatesCardResult>({
    queryKey: [`delegatorCountChart/${zone}/${period}`],
  });

  return {
    data: data?.data,
    loading: isLoading,
  };
}
