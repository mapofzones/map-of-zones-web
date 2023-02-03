import { useMemo } from 'react';

import moment from 'moment';

import { PeriodKeys } from 'components';
import { ChartItemWithTime } from 'types/chart';

export function useLastChartPointByDate<T extends ChartItemWithTime>(
  data: T[],
  period: PeriodKeys
) {
  return useMemo(() => {
    if (period === PeriodKeys.DAY) {
      return data;
    }

    const chartMapData = data.reduce((dict: { [key: string]: T }, curr: T) => {
      const currItemTime = moment.unix(curr.time).format('DD/MM/YYYY');

      if (!dict[currItemTime] || curr.time > dict[currItemTime].time) {
        dict[currItemTime] = curr;
      }

      return dict;
    }, {});

    const chartData2 = Object.keys(chartMapData).map((key: string) => {
      const value = chartMapData[key];
      return value;
    });
    return chartData2;
  }, [data]);
}
