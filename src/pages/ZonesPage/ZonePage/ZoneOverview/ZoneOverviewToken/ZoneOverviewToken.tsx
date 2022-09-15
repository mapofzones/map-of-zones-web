import { useMemo, useState } from 'react';

import cn from 'classnames';

import {
  ButtonGroup,
  NumberFormat,
  NumberType,
  RatingDiffTriangle,
  ValueWithPending,
  ZoneLogo,
} from 'components';
import { PeriodKeys, PERIODS_IN_DAYS_BY_KEY } from 'components/PeriodSelector/Types';
import { AreaChart } from 'components/ui/AreaChart/AreaChart';
import { PeriodDisplay } from 'components/ui/PeriodDisplay/PeriodDisplay';
import { useSwitchedTokenInfoChartAnalytics } from 'hooks/analytics/zoneOverview/useSwitchedTokenInfoChart';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { ElementSize } from 'types/ElementSize';

import { chartOptions, ChartType } from './Types';
import { useZoneOverviewToken } from './useZoneOverviewToken';
import styles from './ZoneOverviewToken.module.scss';

export function ZoneOverviewToken({ className }: { className?: string }) {
  const [selectedPeriod] = useSelectedPeriod();

  const [selectedChartType, setSelectedChartType] = useState<ChartType | undefined>(
    ChartType.PRICE
  );

  const chartTimeFormat = useMemo(
    () => (selectedPeriod === PeriodKeys.DAY ? 'HH:mm' : 'DD MMM'),
    [selectedPeriod]
  );

  const { data } = useZoneOverviewToken();
  const trackSelectedChart = useSwitchedTokenInfoChartAnalytics();

  const onChartSelected = (item: { key?: ChartType }) => {
    setSelectedChartType(item.key);
    trackSelectedChart(item.key);
  };

  const priceData = [
    {
      time: 1660194000,
      price: 1.22,
    },
    {
      time: 1660197600,
      price: 1.25,
    },
    {
      time: 1660201200,
      price: 1.32,
    },
    {
      time: 1660204800,
      price: 1.12,
    },
    {
      time: 1660208400,
      price: 1.14,
    },
    {
      time: 1660212000,
      price: 1.18,
    },
    {
      time: 1660215600,
      price: 1.28,
    },
    {
      time: 1660219200,
      price: 1.32,
    },
  ];

  const volumeData = [
    {
      time: 1660194000,
      volume: 142200,
    },
    {
      time: 1660197600,
      volume: 102500,
    },
    {
      time: 1660201200,
      volume: 103200,
    },
    {
      time: 1660208400,
      volume: 101400,
    },
    {
      time: 1660212000,
      volume: 81800,
    },
    {
      time: 1660215600,
      volume: 92800,
    },
    {
      time: 1660219200,
      volume: 123200,
    },
  ];

  return (
    <div className={cn(className, styles.container)}>
      <div className={styles.title}>Token</div>
      <div className={styles.detailsContainer}>
        <div className={styles.detailsItem}>
          <span className={styles.detailsItem_title}>Price</span>
          <span className={styles.detailsItem_data}>
            <div className={styles.infoGroup}>
              <ZoneLogo size="20px" logoUrl={data?.logoUrl} />
              <span className={styles.tokenName}>{data?.symbol}</span>
              <NumberFormat
                value={data?.price}
                numberType={NumberType.Currency}
                className={styles.tokenPrice}
              />
            </div>
            <div className={styles.infoGroup}>
              <RatingDiffTriangle
                className={styles.tokenPriceDiff}
                numberType={NumberType.Percent}
                ratingDiff={data?.priceDayDiffPercent}
              />
              <span className={styles.period}>&nbsp;(24h)</span>
            </div>
          </span>
        </div>
        <ValueWithPending
          className={styles.detailsItem}
          title="Market Cap"
          value={data?.marketCap}
          numberType={NumberType.Currency}
          size={ElementSize.LARGE}
        />
        <ValueWithPending
          className={styles.detailsItem}
          title="Volume"
          value={data?.tradingVolumeDay}
          numberType={NumberType.Currency}
          size={ElementSize.LARGE}
        />
      </div>
      <div className={styles.chartContainer}>
        <ButtonGroup
          className={styles.priceSwitcher}
          buttons={chartOptions}
          setSelectedButton={(item) => setSelectedChartType(item.key)}
        ></ButtonGroup>
        <PeriodDisplay
          className={styles.periodInfo}
          periodInDays={PERIODS_IN_DAYS_BY_KEY[selectedPeriod]}
        />
        <AreaChart
          className={styles.priceVolumeChart}
          data={selectedChartType === ChartType.PRICE ? priceData : volumeData} // TODO: add chart data from API
          dataKey={selectedChartType === ChartType.PRICE ? 'price' : 'volume'}
          dataFormat={
            selectedChartType === ChartType.PRICE ? NumberType.Currency : NumberType.Number
          }
          timeFormat={chartTimeFormat}
        />
      </div>
    </div>
  );
}
