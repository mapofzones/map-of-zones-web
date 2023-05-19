import { useQuery } from '@apollo/client';

import { PeriodKeys } from 'components';
import { ZoneCompareTokenDocument } from 'graphql/v2/ZonesPage/ComparisonPage/__generated__/ZoneCompareToken.query.generated';
import { ChartItemWithTime } from 'types/chart';
import { nullsToUndefined } from 'utils/nullsToUndefinedConverter';

import { sortDetailsByZoneKeys } from '../utils/sortDetailsByZoneKeys';

interface ZoneTokenResult {
  zone: string;
  name: string;
  symbol: string | undefined;
  price?: number;
  marketCap?: number;
  tradingVolume?: number;
}

export type TokenProperties = 'price' | 'marketCap' | 'tradingVolume';

export function useZonesTokenComparison(
  zones: string[],
  period: PeriodKeys,
  chartType: TokenProperties
): {
  data: ZoneTokenResult[] | undefined;
  chart: ChartItemWithTime[];
  loading: boolean;
} {
  const type = getChartType(period, chartType);

  const options = {
    variables: { zones, chartType: type },
    skip: !zones,
  };

  const { data, loading } = useQuery(ZoneCompareTokenDocument, options);

  const dataWithoutNulls = nullsToUndefined(data?.compareTokens) ?? [];

  const mappedData = dataWithoutNulls.map((item) => ({
    zone: item.zone,
    name: item.name,
    symbol: item.token?.symbol,
    price: item?.token?.price,
    marketCap: item?.token?.marketCap,
    tradingVolume: undefined,
  }));

  const mappedItems: Record<number, ChartItemWithTime> = dataWithoutNulls.reduce((acc, item) => {
    item.token?.chart?.forEach((chartItem) => {
      const { time, value } = chartItem;
      acc[time] = acc[time] || { time };
      acc[time][item.zone] = value;
    });
    return acc;
  }, {} as Record<number, ChartItemWithTime>);
  const mappedChart: ChartItemWithTime[] = Object.values(mappedItems);

  return {
    data: sortDetailsByZoneKeys(zones, mappedData),
    chart: mappedChart,
    loading,
  };
}

function getChartType(period: PeriodKeys, chartType: TokenProperties) {
  let type = '';
  if (chartType === 'price') {
    type += 'price';
  } else if (chartType === 'tradingVolume') {
    type += 'volume';
  } else if (chartType === 'marketCap') {
    type += 'volume';
  }
  type += '_';
  if (period === PeriodKeys.DAY) {
    type += 'daily';
  } else if (period === PeriodKeys.WEEK) {
    type += 'weekly';
  } else if (period === PeriodKeys.MONTH) {
    type += 'monthly';
  }
  return type;
}
