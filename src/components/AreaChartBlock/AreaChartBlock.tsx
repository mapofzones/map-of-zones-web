import { useMemo } from 'react';

import { PeriodKeys, PERIODS_IN_DAYS_BY_KEY } from 'components/PeriodSelector/Types';
import { SkeletonRectangle } from 'components/Skeleton';
import { AreaChart } from 'components/ui/AreaChart/AreaChart';
import { PeriodDisplay } from 'components/ui/PeriodDisplay/PeriodDisplay';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import styles from './AreaChartBlock.module.scss';

import { AreaChartBlockProps } from '.';

export function AreaChartBlock({
  loading,
  data,
  datasetInfo,
  dataFormatType,
}: AreaChartBlockProps) {
  const [selectedPeriod] = useSelectedPeriod();
  const chartTimeFormat = useMemo(
    () => (selectedPeriod === PeriodKeys.DAY ? 'HH:mm' : 'DD MMM'),
    [selectedPeriod]
  );

  return (
    <>
      <PeriodDisplay
        className={styles.periodInfo}
        periodInDays={PERIODS_IN_DAYS_BY_KEY[selectedPeriod]}
      />
      {loading && <SkeletonRectangle style={{ minHeight: '200px', width: '100%' }} />}
      {!loading && data && (
        <AreaChart
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
