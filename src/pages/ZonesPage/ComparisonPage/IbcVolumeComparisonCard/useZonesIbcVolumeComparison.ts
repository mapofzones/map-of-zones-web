import { useQuery } from '@apollo/client';

import {
  ZoneCompareIbcVolumeDocument,
  ZoneCompareIbcVolumeQueryResult,
} from 'graphql/v2/ZonesPage/ComparisonPage/__generated__/ZoneCompareIbcVolume.query.generated';
import { ANALYSIS_PERIODS_IN_HOURS_BY_KEY, AnalysisCardPeriod } from 'types/AnalysisCardPeriod';
import { ChartItemWithTime } from 'types/chart';
import { DatasetInfo } from 'ui/Charts/AreaChart/AreaChart.props';
import { nullsToUndefined } from 'utils/nullsToUndefinedConverter';

import { sortDetailsByZoneKeys } from '../utils/sortDetailsByZoneKeys';

interface ZoneVolumeResult {
  zone: string;
  ibcVolume?: number;
  ibcVolumeIn?: number;
  ibcVolumeOut?: number;
}

export type IbcVolumeProperties = 'ibcVolume' | 'ibcVolumeIn' | 'ibcVolumeOut';

const ZONES_COLORS = ['#62D0D7', '#B250FF', '#FF9900'];

export function useZonesIbcVolumeComparison(
  zones: string[],
  period: AnalysisCardPeriod
): {
  data: ZoneVolumeResult[] | undefined;
  charts: Record<string, ChartItemWithTime[]>;
  datasetInfo: Record<string, DatasetInfo>;
  loading: boolean;
} {
  const periodInHours = ANALYSIS_PERIODS_IN_HOURS_BY_KEY[period];
  const periodInDays = periodInHours / 24;

  const options = {
    variables: {
      zones: [...zones],
      period: periodInHours,
      isMainnet: true,
      periodInDays: periodInDays,
    },
    skip: !zones,
  };

  const { data, loading } = useQuery(ZoneCompareIbcVolumeDocument, options);

  const compareItems = nullsToUndefined(data?.stats) ?? [];

  const mappedData = compareItems.map((item) => ({
    zone: item.zone,
    ibcVolume: item.ibcVolume?.aggregate?.sum?.volume,
    ibcVolumeIn: item.ibcVolumeIn?.aggregate?.sum?.volumeIn,
    ibcVolumeOut: item.ibcVolumeOut?.aggregate?.sum?.volumeOut,
  }));

  const datasetInfo = compareItems.reduce((acc, item) => {
    const index = zones.indexOf(item.zone);
    const color = ZONES_COLORS[index];
    acc[item.zone] = {
      title: item.zone, // TODO
      color,
    };
    return acc;
  }, {} as Record<string, DatasetInfo>);

  const ibcVolumeChartItems: Record<number, ChartItemWithTime> = compareItems.reduce(
    (acc, item) => {
      item?.ibcVolumeChart?.forEach((chartItem) => {
        const { time, value } = chartItem;
        acc[time] = acc[time] || { time };
        acc[time][item.zone] = value;
      });
      return acc;
    },
    {} as Record<number, ChartItemWithTime>
  );
  const ibcVolumeChart: ChartItemWithTime[] = Object.values(ibcVolumeChartItems);

  const volumeInChartItems: Record<number, ChartItemWithTime> = compareItems.reduce((acc, item) => {
    item?.ibcVolumeInChart?.forEach((chartItem) => {
      const { time, value } = chartItem;
      acc[time] = acc[time] || { time };
      acc[time][item.zone] = value;
    });
    return acc;
  }, {} as Record<number, ChartItemWithTime>);
  const volumeInChart: ChartItemWithTime[] = Object.values(volumeInChartItems);

  const volumeOutChartItems: Record<number, ChartItemWithTime> = compareItems.reduce(
    (acc, item) => {
      item?.ibcVolumeOutChart?.forEach((chartItem) => {
        const { time, value } = chartItem;
        acc[time] = acc[time] || { time };
        acc[time][item.zone] = value;
      });
      return acc;
    },
    {} as Record<number, ChartItemWithTime>
  );
  const volumeOutChart: ChartItemWithTime[] = Object.values(volumeOutChartItems);

  return {
    data: sortDetailsByZoneKeys(zones, mappedData),
    charts: {
      ibcVolume: ibcVolumeChart,
      ibcVolumeIn: volumeInChart,
      ibcVolumeOut: volumeOutChart,
    },
    datasetInfo,
    loading,
  };
}
