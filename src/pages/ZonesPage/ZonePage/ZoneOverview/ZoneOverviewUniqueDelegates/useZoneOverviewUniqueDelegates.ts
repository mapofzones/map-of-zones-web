import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { OVERVIEW_PERIODS_API_KEYS } from 'components/OverviewChartCardWithMetadata';
import { AnalysisCardPeriod } from 'types/AnalysisCardPeriod';
import {
  AnalysisUniqueDelegatorsCardData,
  AnalysisUniqueDelegatorsApiCardResult,
} from 'types/models/Analysis/ZoneAnalysisUniqueDelegators';

export function useZoneOverviewUniqueDelegates(period: AnalysisCardPeriod): {
  data: AnalysisUniqueDelegatorsCardData | undefined;
  loading: boolean;
} {
  const { zone = '' } = useParams();

  const { data, isLoading } = useQuery<AnalysisUniqueDelegatorsApiCardResult>({
    queryKey: [`delegatorCountChart/${zone}/${OVERVIEW_PERIODS_API_KEYS[period]}`],
    enabled: !!period && !!zone,
  });

  return {
    data: data?.data,
    loading: isLoading,
  };
}
