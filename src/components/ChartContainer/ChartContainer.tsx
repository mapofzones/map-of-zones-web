import { useMemo } from 'react';

import cn from 'classnames';
import moment from 'moment';

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

  const flatData = useMemo(() => {
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

  return (
    <>
      <PeriodDisplay
        className={styles.periodInfo}
        periodInDays={PERIODS_IN_DAYS_BY_KEY[selectedPeriod]}
      />
      {loading && <SkeletonRectangle style={{ minHeight: '230px', width: '100%' }} />}
      {!loading && data && (
        <div style={{ position: 'relative' }}>
          <Watermark />
          <Chart
            className={cn(styles.chart, className)}
            data={flatData}
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
