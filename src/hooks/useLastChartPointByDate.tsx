import { useMemo } from 'react';

import { ChartItemWithTime } from 'types/chart';
import { formatUnixUTC } from 'utils/dateTimeUtils';

export function useLastChartPointByDate<T extends ChartItemWithTime>(data: T[]) {
  return useMemo(() => {
    const chartMapData = data.reduce((dict: { [key: string]: T }, curr: T) => {
      const currItemTime = formatUnixUTC(curr.time, 'DD/MM/YYYY');

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
