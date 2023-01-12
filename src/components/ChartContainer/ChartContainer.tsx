import { useMemo } from 'react';

import { PeriodKeys, PERIODS_IN_DAYS_BY_KEY } from 'components/PeriodSelector/Types';
import { SkeletonRectangle } from 'components/Skeleton';
import { AreaChart } from 'components/ui/Charts/AreaChart/AreaChart';
import { BarChart } from 'components/ui/Charts/BarChart/BarChart';
import { PeriodDisplay } from 'components/ui/PeriodDisplay/PeriodDisplay';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import styles from './ChartContainer.module.scss';
import { ChartContainerProps, ChartType } from './ChartContainer.props';

export function ChartContainer({
  loading,
  chartType = ChartType.AREA,
  data = [],
  datasetInfo,
  dataFormatType,
}: ChartContainerProps) {
  const [selectedPeriod] = useSelectedPeriod();
  const chartTimeFormat = useMemo(
    () => (selectedPeriod === PeriodKeys.DAY ? 'HH:mm' : 'DD MMM'),
    [selectedPeriod]
  );

  const Chart = useMemo(() => (chartType === ChartType.AREA ? AreaChart : BarChart), [chartType]);

  return (
    <>
      <PeriodDisplay
        className={styles.periodInfo}
        periodInDays={PERIODS_IN_DAYS_BY_KEY[selectedPeriod]}
      />
      {loading && <SkeletonRectangle style={{ minHeight: '200px', width: '100%' }} />}
      {!loading && data && (
        <Chart
          className={styles.chart}
          data={data}
          datasetInfo={datasetInfo}
          dataFormat={dataFormatType}
          timeFormat={chartTimeFormat}
        />
      )}
    </>
  );
}
