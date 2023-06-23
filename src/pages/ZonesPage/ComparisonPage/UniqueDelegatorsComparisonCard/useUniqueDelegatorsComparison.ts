import { useQueries } from '@tanstack/react-query';

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
  const queries = zones.map((zone) => {
    return {
      queryKey: [`delegatorCountChart/${zone}/${OVERVIEW_PERIODS_API_KEYS[period]}`],
      enabled: !!period && !!zone,
    };
  });
  const responses = useQueries<AnalysisUniqueDelegatorsCardData[]>({ queries });

  const result =
    responses
      .map((result) => (result.data as AnalysisUniqueDelegatorsApiCardResult)?.data)
      .filter((d) => !!d) ?? [];
  const loading = responses.every((result) => result.isLoading);
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
