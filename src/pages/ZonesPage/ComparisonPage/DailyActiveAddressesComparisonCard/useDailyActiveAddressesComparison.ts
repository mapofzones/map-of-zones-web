import { useQueries, useQuery } from '@tanstack/react-query';

import { OVERVIEW_PERIODS_API_KEYS } from 'components/OverviewChartCardWithMetadata';
import { AnalysisCardPeriod } from 'types/AnalysisCardPeriod';
import { ChartItemWithTime } from 'types/chart';
import {
  MappedComparisonResult,
  mapComparisonRestApiChartsData,
} from 'utils/mapComparisonRestApiChartsData';

export interface ZoneDailyActiveAddressesItem {
  zone: string;
  totalActiveAddresses?: number;
  totalIbcActiveAddresses?: number;
}

interface ZonesDailyActiveAddressesComparisonResult {
  data: ZoneDailyActiveAddressesItem[] | undefined;
  charts: MappedComparisonResult<ChartItemWithTime[]>;
  loading: boolean;
}

export function useDailyActiveAddressesComparison(
  zones: string[],
  period: AnalysisCardPeriod
): ZonesDailyActiveAddressesComparisonResult {
  const { data: responses, isLoading: loading } = useQuery<DailyActiveAddressesRootApiResult[]>({
    queryKey: [`activeAddressesCountChart/${zones.join(',')}/${OVERVIEW_PERIODS_API_KEYS[period]}`],
    enabled: !!period && !!zones?.length,
  });

  const result = responses?.map((item) => item.data)?.filter((d) => !!d) ?? [];
  const charts: MappedComparisonResult<DailyActiveAddressesChart[]> =
    mapComparisonRestApiChartsData(result);

  return {
    data: result.map((item) => ({
      zone: item.zone,
      totalActiveAddresses: item.totalActiveAddresses,
      totalIbcActiveAddresses: item.totalIbcActiveAddresses,
    })),
    charts,
    loading,
  };
}

interface DailyActiveAddressesRootApiResult {
  data: DailyActiveAddressesApiResult;
}

interface DailyActiveAddressesApiResult {
  zone: string;
  totalActiveAddresses?: number;
  totalIbcActiveAddresses?: number;
  chart: DailyActiveAddressesChart[];
}

interface DailyActiveAddressesChart extends ChartItemWithTime {
  time: number;
  activeAddressesCount: number;
  ibcActiveAddressesCount: number;
}
