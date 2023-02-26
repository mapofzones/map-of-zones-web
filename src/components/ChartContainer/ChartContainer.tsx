import { useMemo } from 'react';

import cn from 'classnames';

import { SkeletonRectangle } from 'components/Skeleton';
import { AreaChart } from 'components/ui/Charts/AreaChart/AreaChart';
import { BarChart } from 'components/ui/Charts/BarChart/BarChart';
import { Watermark } from 'components/Watermark';

import styles from './ChartContainer.module.scss';
import { ChartContainerProps, ChartType } from './ChartContainer.props';

export function ChartContainer({
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
}: ChartContainerProps) {
  const Chart = useMemo(() => (chartType === ChartType.AREA ? AreaChart : BarChart), [chartType]);

  return (
    <>
      {loading && <SkeletonRectangle style={{ width: '100%', flex: '1 1 auto' }} />}
      {!loading && data && (
        <div style={{ position: 'relative', flex: '1 1 auto' }}>
          <Watermark className={styles.chartLogo} />
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
