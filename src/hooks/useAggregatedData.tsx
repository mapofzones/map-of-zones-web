import { useMemo } from 'react';

import moment from 'moment';

import { PeriodKeys } from 'components/PeriodSelector/Types';
import { DatasetInfo } from 'components/ui/Charts/AreaChart/AreaChart.props';
import { ChartItemWithTime } from 'types/chart';

export function useAggregatedData(
  data: ChartItemWithTime[],
  selectedPeriod: PeriodKeys,
  datasetInfo: { [key: string]: DatasetInfo }
) {
  return useMemo(() => {
    if (selectedPeriod === PeriodKeys.DAY) {
      return data;
    }

    const aggregatedDataByTime = data.reduce((acc: any, curr: any, index: number) => {
      const dateTime = moment.unix(curr.time).format('DD/MM/YYYY');

      Object.keys(datasetInfo).forEach((datasetKey: string) => {
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
  }, [data, datasetInfo, selectedPeriod]);
}
