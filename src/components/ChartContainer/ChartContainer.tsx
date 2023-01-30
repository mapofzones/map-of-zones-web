import { useMemo } from 'react';

import cn from 'classnames';

import { PeriodKeys, PERIODS_IN_DAYS_BY_KEY } from 'components/PeriodSelector/Types';
import { SkeletonRectangle } from 'components/Skeleton';
import { AreaChart } from 'components/ui/Charts/AreaChart/AreaChart';
import { BarChart } from 'components/ui/Charts/BarChart/BarChart';
import { PeriodDisplay } from 'components/ui/PeriodDisplay/PeriodDisplay';
import { Watermark } from 'components/Watermark';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

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
}: ChartContainerProps) {
  const [selectedPeriod] = useSelectedPeriod();
  const chartTimeFormat = useMemo(
    () => (selectedPeriod === PeriodKeys.DAY ? 'HH:mm' : 'DD MMM'),
    [selectedPeriod]
  );

  const tooltipTimeFormat = useMemo(
    () => (selectedPeriod === PeriodKeys.DAY ? 'DD MMM, HH:mm' : 'DD MMM YYYY'),
    [selectedPeriod]
  );

  const Chart = useMemo(() => (chartType === ChartType.AREA ? AreaChart : BarChart), [chartType]);

  return (
    <>
      <PeriodDisplay
        className={styles.periodInfo}
        periodInDays={PERIODS_IN_DAYS_BY_KEY[selectedPeriod]}
      />
      {loading && <SkeletonRectangle style={{ width: '100%', flex: '1 1 auto' }} />}
      {!loading && data && (
        <div style={{ position: 'relative', flex: '1 1 auto' }}>
          <Watermark />
          <Chart
            className={cn(styles.chart, className)}
            data={data}
            datasetInfo={datasetInfo}
            dataFormat={dataFormatType}
            timeFormat={chartTimeFormat}
            tooltipTimeFormat={tooltipTimeFormat}
            isZeroMinXAxisValue={isZeroMinXAxisValue}
          />
        </div>
      )}
    </>
  );
}
