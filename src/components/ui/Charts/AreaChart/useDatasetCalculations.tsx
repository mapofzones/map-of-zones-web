import { useMemo } from 'react';

import { ChartItemWithTime, DatasetInfo } from './AreaChart.props';

export function useDatasetCalculations(
  datasetInfo: {
    [key: string]: DatasetInfo;
  },
  data: ChartItemWithTime[]
) {
  return useMemo(
    () =>
      Object.keys(datasetInfo).reduce((prev: { [key: string]: any }, key: string) => {
        const dataset = datasetInfo[key];
        const lastPointIndex = data.length - 1;
        const referencePoint = data[lastPointIndex];
        let color = dataset.color;
        if (!color) {
          const firstValue = data[0] ? data[0][key] : 0;
          const lastValue = data[lastPointIndex] ? data[lastPointIndex][key] : 0;
          const isNegative = firstValue > lastValue;
          color = isNegative ? '#ff4455' : '#66DD55';
        }
        const gradientId = `gradient-${color}`;
        prev[key] = {
          referencePoint,
          gradientId,
          color,
        };
        return prev;
      }, {}),
    [data, datasetInfo]
  );
}