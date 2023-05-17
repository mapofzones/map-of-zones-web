import { useMemo } from 'react';

import moment from 'moment';

import { AnalysisCardPeriod } from 'types/AnalysisCardPeriod';
import { formatUnixUTC } from 'utils/dateTimeUtils';

export function useAggregatedDataByPeriod<T>(
  data: T[],
  selectedPeriod: AnalysisCardPeriod,
  keys: (keyof T)[]
): T[] {
  return useMemo(() => {
    const aggregatedDataByTime = data.reduce((acc: any, curr: any, index: number) => {
      const dateTime = formatUnixUTC(curr.time, 'DD/MM/YYYY');

      keys.forEach((datasetKey: keyof T) => {
        const value = curr[datasetKey];
        if (value !== undefined) {
          if (!acc[dateTime]) {
            acc[dateTime] = {};
          }
          acc[dateTime][datasetKey] = !acc[dateTime][datasetKey]
            ? value
            : (acc[dateTime][datasetKey] += value);
        }
      });

      return acc;
    }, {});

    const [, ...newData] = Object.keys(aggregatedDataByTime).map((date: string) => {
      return {
        time: moment(date, 'DD/MM/YYYY').unix(),
        ...aggregatedDataByTime[date],
      };
    });
    return newData;
  }, [data, keys]);
}
