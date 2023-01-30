import { useState } from 'react';

import { ButtonGroup, NumberType } from 'components';
import { ChartContainer, ChartType as CType } from 'components/ChartContainer';
import { useSwitchedTokenInfoChartAnalytics } from 'hooks/analytics/ZonesPage/ZonePage/ZoneOverviewPage/useSwitchedTokenInfoChart';
import { ElementSize } from 'types/ElementSize';

import { chartOptions, ChartType } from './../Types';
import { useZoneTokenChart } from './../useZoneTokenChart';
import styles from './TokenCharts.module.scss';

export function TokenCharts() {
  const [selectedChartType, setSelectedChartType] = useState<ChartType>(ChartType.PRICE);

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
        isZeroMinXAxisValue={false}
      />
    </div>
  );
}
