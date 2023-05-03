import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import {
  OverviewCardPeriod,
  OVERVIEW_PERIODS_API_KEYS,
} from 'components/OverviewChartCardWithMetadata';

import {
  ZoneOverviewDelegationsCardData,
  ZoneOverviewDelegationsCardResult,
} from './ZoneOverviewDelegations.types';

export function useZoneOverviewDelegations(period: OverviewCardPeriod): {
  data: ZoneOverviewDelegationsCardData | undefined;
  loading: boolean;
} {
  const { zone = '' } = useParams();

  const { data, isLoading } = useQuery<ZoneOverviewDelegationsCardResult>({
    queryKey: [`delegationsAmountChart/${zone}/${OVERVIEW_PERIODS_API_KEYS[period]}`],
    enabled: !!period && !!zone,
  });

  return {
    data: data?.data,
    loading: isLoading,
  };
}
