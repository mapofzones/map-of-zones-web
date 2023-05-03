import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import {
  OverviewCardPeriod,
  OVERVIEW_PERIODS_API_KEYS,
} from 'components/OverviewChartCardWithMetadata';

import {
  ZoneOverviewUniqueDelegatesCardData,
  ZoneOverviewUniqueDelegatesCardResult,
} from './ZoneOverviewUniqueDelegates.types';

export function useZoneOverviewUniqueDelegates(period: OverviewCardPeriod): {
  data: ZoneOverviewUniqueDelegatesCardData | undefined;
  loading: boolean;
} {
  const { zone = '' } = useParams();

  const { data, isLoading } = useQuery<ZoneOverviewUniqueDelegatesCardResult>({
    queryKey: [`delegatorCountChart/${zone}/${OVERVIEW_PERIODS_API_KEYS[period]}`],
    enabled: !!period && !!zone,
  });

  return {
    data: data?.data,
    loading: isLoading,
  };
}
