import { useMemo, useState } from 'react';

import { ButtonGroup, NumberType, SkeletonRectangle } from 'components';
import { PeriodKeys, PERIODS_IN_DAYS_BY_KEY } from 'components/PeriodSelector/Types';
import { AreaChart } from 'components/ui/AreaChart/AreaChart';
import { PeriodDisplay } from 'components/ui/PeriodDisplay/PeriodDisplay';
import { useSwitchedTokenInfoChartAnalytics } from 'hooks/analytics/ZonesPage/ZonePage/ZoneOverviewPage/useSwitchedTokenInfoChart';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { ElementSize } from 'types/ElementSize';

import { chartOptions, ChartType } from './../Types';
import { useZoneTokenChart } from './../useZoneTokenChart';
import styles from './TokenCharts.module.scss';

export function TokenCharts() {
  const [selectedPeriod] = useSelectedPeriod();

  const [selectedChartType, setSelectedChartType] = useState<ChartType>(ChartType.PRICE);

  const chartTimeFormat = useMemo(
    () => (selectedPeriod === PeriodKeys.DAY ? 'HH:mm' : 'DD MMM'),
    [selectedPeriod]
  );

  const { data: chartData, loading: chartLoading } = useZoneTokenChart(selectedChartType);

  const trackSelectedChart = useSwitchedTokenInfoChartAnalytics();

  const onChartSelected = (item: { key?: ChartType }) => {
    item?.key && setSelectedChartType(item.key);
    trackSelectedChart(item.key);
  };

  return (
    <div className={styles.chartContainer}>
      <ButtonGroup
        className={styles.priceSwitcher}
        size={ElementSize.SMALL}
        buttons={chartOptions}
        setSelectedButton={onChartSelected}
      ></ButtonGroup>
      <PeriodDisplay
        className={styles.periodInfo}
        periodInDays={PERIODS_IN_DAYS_BY_KEY[selectedPeriod]}
      />
      {chartLoading && <SkeletonRectangle style={{ minHeight: '200px', width: '100%' }} />}
      {!chartLoading && chartData && (
        <AreaChart
          className={styles.priceVolumeChart}
          data={chartData}
          dataKey={'value'}
          dataFormat={
            selectedChartType === ChartType.PRICE ? NumberType.Currency : NumberType.Number
          }
          timeFormat={chartTimeFormat}
        />
      )}
    </div>
  );
}