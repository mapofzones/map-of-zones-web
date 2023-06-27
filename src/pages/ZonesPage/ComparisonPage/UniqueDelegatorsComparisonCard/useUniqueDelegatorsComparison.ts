import { useQueries, useQuery } from '@tanstack/react-query';

import { OVERVIEW_PERIODS_API_KEYS } from 'components/OverviewChartCardWithMetadata';
import { AnalysisCardPeriod } from 'types/AnalysisCardPeriod';
import {
  AnalysisUniqueDelegatorsCardData,
  AnalysisUniqueDelegatorsApiCardResult,
  UniqueDelegatorsChart,
} from 'types/models/Analysis/ZoneAnalysisUniqueDelegators';
import {
  MappedComparisonResult,
  mapComparisonRestApiChartsData,
} from 'utils/mapComparisonRestApiChartsData';

export type ZoneUniqueDelegatorsComparisonData = Pick<
  AnalysisUniqueDelegatorsCardData,
  'zone' | 'totalDelegatorsCount'
>;

interface ZonesUniqueDelegatorsComparisonResult {
  data: ZoneUniqueDelegatorsComparisonData[] | undefined;
  charts: MappedComparisonResult<UniqueDelegatorsChart[]>;
  loading: boolean;
}

export function useUniqueDelegatorsComparison(
  zones: string[],
  period: AnalysisCardPeriod
): ZonesUniqueDelegatorsComparisonResult {
  const { data: responses, isLoading: loading } = useQuery<AnalysisUniqueDelegatorsApiCardResult[]>(
    {
      queryKey: [`delegatorCountChart/${zones.join(',')}/${OVERVIEW_PERIODS_API_KEYS[period]}`],
      enabled: !!period && !!zones?.length,
    }
  );

  const result = responses?.map((item) => item.data)?.filter((d) => !!d) ?? [];
  const charts: MappedComparisonResult<UniqueDelegatorsChart[]> =
    mapComparisonRestApiChartsData(result);

  return {
    data: result.map((item) => ({
      zone: item.zone,
      totalDelegatorsCount: item.totalDelegatorsCount,
    })),
    charts,
    loading,
  };
}
