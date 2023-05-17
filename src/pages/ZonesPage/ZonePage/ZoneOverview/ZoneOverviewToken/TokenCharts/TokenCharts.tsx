import { PeriodKeys } from 'components';
import { ChartContainer } from 'components/ChartContainer';
import { NumberType } from 'types/NumberType';

import { ChartType } from './../Types';
import { useZoneTokenChart } from './../useZoneTokenChart';
import styles from './TokenCharts.module.scss';

export function TokenCharts({ chartType, period }: { chartType: ChartType; period: PeriodKeys }) {
  const { data: chartData, loading: chartLoading } = useZoneTokenChart(chartType, period);

  return (
    <div className={styles.chartContainer}>
      <ChartContainer
        className={styles.priceVolumeChart}
        loading={chartLoading}
        data={chartData}
        datasetInfo={{
          value: {
            title: chartType === ChartType.PRICE ? 'Price' : 'Volume',
          },
        }}
        dataFormatType={chartType === ChartType.PRICE ? NumberType.Currency : NumberType.Number}
        tooltipTimeFormat="DD MMM, HH:mm"
        chartTimeFormat={period === PeriodKeys.DAY ? 'HH:mm' : 'DD MMM'}
        isZeroMinXAxisValue={false}
      />
    </div>
  );
}
