import { useQueries } from '@tanstack/react-query';

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
  const queries = zones.map((zone) => {
    return {
      queryKey: [`activeAddressesCountChart/${zone}/${OVERVIEW_PERIODS_API_KEYS[period]}`],
      enabled: !!period && !!zone,
    };
  });

  const responses = useQueries<DailyActiveAddressesRootApiResult[]>({ queries });

  const result =
    responses
      .map((result) => (result.data as DailyActiveAddressesRootApiResult)?.data)
      .filter((d) => !!d) ?? [];
  const loading = responses.every((result) => result.isLoading);
  const charts = mapComparisonRestApiChartsData(result);

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
