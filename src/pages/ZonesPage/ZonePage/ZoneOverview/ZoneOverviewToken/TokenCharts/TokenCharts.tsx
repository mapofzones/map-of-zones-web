import { useState } from 'react';

import { ButtonGroup, NumberType } from 'components';
import { ChartContainer } from 'components/ChartContainer';
import { PeriodKeys } from 'components/PeriodSelector/Types';
import { useSwitchedTokenInfoChartAnalytics } from 'hooks/analytics/ZonesPage/ZonePage/ZoneOverviewPage/useSwitchedTokenInfoChart';
import { ElementSize } from 'types/ElementSize';

import { chartOptions, ChartType } from './../Types';
import { useZoneTokenChart } from './../useZoneTokenChart';
import styles from './TokenCharts.module.scss';

const PERIODS: PeriodKeys[] = [PeriodKeys.DAY, PeriodKeys.WEEK, PeriodKeys.MONTH];

export function TokenCharts() {
  const [selectedChartType, setSelectedChartType] = useState<ChartType>(ChartType.PRICE);
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodKeys>(PeriodKeys.DAY);

  const { data: chartData, loading: chartLoading } = useZoneTokenChart(
    selectedChartType,
    selectedPeriod
  );

  const trackSelectedChart = useSwitchedTokenInfoChartAnalytics();

  const onChartSelected = (item: { key?: ChartType }) => {
    item?.key && setSelectedChartType(item.key);
    trackSelectedChart(item.key);
  };

  const onPeriodSelected = (item: { key?: PeriodKeys }) => {
    item?.key && setSelectedPeriod(item.key);
  };

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartControls}>
        <ButtonGroup
          className={styles.priceSwitcher}
          size={ElementSize.SMALL}
          buttons={chartOptions}
          setSelectedButton={onChartSelected}
        ></ButtonGroup>

        {PERIODS.length > 1 && (
          <ButtonGroup
            className={styles.chartTypeSwitcher}
            size={ElementSize.SMALL}
            buttons={PERIODS.map((period: PeriodKeys) => ({
              key: period,
              title: period.toUpperCase(),
            }))}
            setSelectedButton={onPeriodSelected}
          />
        )}
      </div>
      <ChartContainer
        className={styles.priceVolumeChart}
        loading={chartLoading}
        data={chartData}
        datasetInfo={{
          value: {
            title: selectedChartType === ChartType.PRICE ? 'Price' : 'Trading Volume',
          },
        }}
        dataFormatType={
          selectedChartType === ChartType.PRICE ? NumberType.Currency : NumberType.Number
        }
        tooltipTimeFormat="DD MMM, HH:mm"
        isZeroMinXAxisValue={false}
      />
    </div>
  );
}
