import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { PeriodKeys } from 'components/PeriodSelector/Types';
import { ZoneTokenChartDocument } from 'graphql/v2/ZonesPage/ZonePage/__generated__/ZoneTokenChart.query.generated';
import { ChartItemWithTime } from 'types/chart';

import { ChartType } from './Types';

export interface ZoneTokenChartData {
  chart: ChartItemWithTime[];
}

export function useZoneTokenChart(
  chartType: ChartType,
  selectedPeriod: PeriodKeys
): {
  data: ChartItemWithTime[];
  loading: boolean;
} {
  const { zone = '' } = useParams();

  const type = getChartType(selectedPeriod, chartType);

  const options = {
    variables: { zone, chartType: type },
    skip: !zone,
  };

  const { data, loading } = useQuery(ZoneTokenChartDocument, options);

  return {
    data: data?.overviewBlockchainCharts[0].token?.chart ?? [],
    loading,
  };
}

function getChartType(period: PeriodKeys, chartType: ChartType) {
  let type = '';
  if (chartType === ChartType.PRICE) {
    type += 'price';
  } else if (chartType === ChartType.VOLUME) {
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
