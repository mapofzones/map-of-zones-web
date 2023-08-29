import { useMemo } from 'react';

import cn from 'classnames';

import { Watermark } from 'components/Watermark';
import { SkeletonRectangle } from 'ui';
import { AreaChart } from 'ui/Charts/AreaChart/AreaChart';
import { BarChart } from 'ui/Charts/BarChart/BarChart';
import { keys } from 'utils/mergeChartArraysIntoOne';

import styles from './ChartContainer.module.scss';
import { ChartContainerProps } from './ChartContainer.props';
import { ChartType } from '../../types/ChartType';

export function ChartContainer<T extends object>({
  loading,
  className,
  chartType = ChartType.AREA,
  data = [],
  datasetInfo,
  dataFormatType,
  isZeroMinXAxisValue,
  lastDashedPeriod = false,
  tooltipTimeFormat = 'DD MMM YYYY',
  chartTimeFormat = 'DD MMM',
}: ChartContainerProps<T>) {
  const Chart = useMemo(() => (chartType === ChartType.AREA ? AreaChart : BarChart), [chartType]);

  const dataExist =
    !!data &&
    !!data.length &&
    !!data.filter((item) =>
      keys(item).some((key: keyof T) => {
        if (key === 'time') {
          return false;
        }

        return item[key] !== undefined && item[key] != null;
      })
    ).length;

  return (
    <>
      {loading && <SkeletonRectangle style={{ width: '100%', flex: '1 1 auto' }} />}
      {!loading && data && (
        <div className={styles.container}>
          {!!dataExist && <Watermark className={styles.chartLogo} />}
          {!dataExist && <div>No data available</div>}
          <Chart
            className={cn(styles.chart, className)}
            data={data}
            datasetInfo={datasetInfo}
            dataFormat={dataFormatType}
            timeFormat={chartTimeFormat}
            tooltipTimeFormat={tooltipTimeFormat}
            isZeroMinXAxisValue={isZeroMinXAxisValue}
            lastDashedPeriod={lastDashedPeriod}
          />
        </div>
      )}
    </>
  );
}
