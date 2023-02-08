import { useMemo } from 'react';

import moment from 'moment';

import { PeriodKeys } from 'components/PeriodSelector/Types';
import { ChartItemWithTime } from 'types/chart';

import { useSelectedPeriod } from './useSelectedPeriod';

export function useAggregatedDataByPeriod<T extends ChartItemWithTime>(
  data: T[],
  keys: (keyof T)[]
): T[] {
  const [selectedPeriod] = useSelectedPeriod();

  return useMemo(() => {
    if (selectedPeriod === PeriodKeys.DAY) {
      return data;
    }

    const aggregatedDataByTime = data.reduce((acc: any, curr: any, index: number) => {
      const dateTime = moment.unix(curr.time).format('DD/MM/YYYY');

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
  }, [data, keys, selectedPeriod]);
}
