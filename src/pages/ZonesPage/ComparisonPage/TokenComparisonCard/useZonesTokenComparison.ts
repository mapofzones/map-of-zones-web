import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { PeriodKeys } from 'components';
import { ZoneCompareTokenDocument } from 'graphql/v2/ZonesPage/ComparisonPage/__generated__/ZoneCompareToken.query.generated';
import { ChartItemWithTime } from 'types/chart';
import { ZoneBase } from 'types/models/ZoneDetails';
import { mapCharts } from 'utils/mapCharts';
import { nullsToUndefined } from 'utils/nullsToUndefinedConverter';

import { sortDetailsByZoneKeys } from '../utils/sortDetailsByZoneKeys';

interface ZoneTokenResult extends ZoneBase {
  symbol: string | undefined;
  price?: number;
  marketCap?: number;
  tradingVolume?: number;
}

export type TokenProperties = 'price' | 'marketCap' | 'tradingVolume';

interface ZonesTokenComparisonResult {
  data: ZoneTokenResult[] | undefined;
  chart: ChartItemWithTime[];
  loading: boolean;
}

export function useZonesTokenComparison(
  zones: string[],
  period: PeriodKeys,
  chartType: TokenProperties
): ZonesTokenComparisonResult {
  const [handledData, setHandledData] = useState<ZonesTokenComparisonResult>(
    {} as ZonesTokenComparisonResult
  );

  const type = getChartType(period, chartType);

  const options = {
    variables: { zones, chartType: type },
    skip: !zones?.length,
  };

  const { data, loading } = useQuery(ZoneCompareTokenDocument, options);

  useEffect(() => {
    const dataWithoutNulls = nullsToUndefined(data?.compareTokens) ?? [];

    const mappedData = dataWithoutNulls.map((item) => ({
      zone: item.zone,
      name: item.name,
      symbol: item.token?.symbol,
      price: item?.token?.price,
      marketCap: item?.token?.marketCap,
      tradingVolume: undefined,
    }));

    const mappedChart = mapCharts(
      dataWithoutNulls.map((data) => ({ zone: data.zone, chart: data.token?.chart })),
      ['chart']
    );

    setHandledData({
      data: sortDetailsByZoneKeys(zones, mappedData),
      chart: mappedChart['chart'],
      loading,
    });
  }, [data?.compareTokens, loading, zones]);

  return handledData;
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
