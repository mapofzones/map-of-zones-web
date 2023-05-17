import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { OVERVIEW_PERIODS_API_KEYS } from 'components/OverviewChartCardWithMetadata';
import { AnalysisCardPeriod } from 'types/AnalysisCardPeriod';

import {
  ZoneOverviewDelegationsCardData,
  ZoneOverviewDelegationsCardResult,
} from './ZoneOverviewDelegations.types';

export function useZoneOverviewDelegations(period: AnalysisCardPeriod): {
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
