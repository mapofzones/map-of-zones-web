import { useMemo, useState } from 'react';

import cn from 'classnames';

import {
  ButtonGroup,
  NumberFormat,
  NumberType,
  RatingDiffTriangle,
  SkeletonRectangle,
  SkeletonTextWrapper,
  ValueWithPending,
  ZoneLogo,
} from 'components';
import { PeriodKeys, PERIODS_IN_DAYS_BY_KEY } from 'components/PeriodSelector/Types';
import { AreaChart } from 'components/ui/AreaChart/AreaChart';
import { PeriodDisplay } from 'components/ui/PeriodDisplay/PeriodDisplay';
import { useSwitchedTokenInfoChartAnalytics } from 'hooks/analytics/zoneOverview/useSwitchedTokenInfoChart';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { ElementSize } from 'types/ElementSize';

import { chartOptions, ChartType, priceDiffKeyByPeriod } from './Types';
import { useZoneOverviewToken } from './useZoneOverviewToken';
import { useZoneTokenChart } from './useZoneTokenChart';
import styles from './ZoneOverviewToken.module.scss';

export function ZoneOverviewToken({ className }: { className?: string }) {
  const [selectedPeriod] = useSelectedPeriod();

  const [selectedChartType, setSelectedChartType] = useState<ChartType>(ChartType.PRICE);

  const chartTimeFormat = useMemo(
    () => (selectedPeriod === PeriodKeys.DAY ? 'HH:mm' : 'DD MMM'),
    [selectedPeriod]
  );

  const { data, loading } = useZoneOverviewToken();
  const { data: chartData, loading: chartLoading } = useZoneTokenChart(selectedChartType);

  const trackSelectedChart = useSwitchedTokenInfoChartAnalytics();

  const onChartSelected = (item: { key?: ChartType }) => {
    item?.key && setSelectedChartType(item.key);
    trackSelectedChart(item.key);
  };

  return (
    <div className={cn(className, styles.container)}>
      <div className={styles.title}>Token</div>
      <div className={styles.detailsContainer}>
        <div className={styles.detailsItem}>
          <span className={styles.detailsItem_title}>Price</span>
          <span className={styles.detailsItem_data}>
            <div className={styles.infoGroup}>
              <ZoneLogo size="20px" logoUrl={data?.logoUrl} loading={loading} />
              <SkeletonTextWrapper
                className={styles.tokenName}
                loading={loading}
                defaultText={'ATOM'}
              >
                {data?.symbol}
              </SkeletonTextWrapper>
              <SkeletonTextWrapper
                loading={loading}
                className={styles.tokenPrice}
                defaultText={'$1.2228'}
              >
                <NumberFormat value={data?.price} numberType={NumberType.Currency} />
              </SkeletonTextWrapper>
            </div>
            <div className={styles.infoGroup}>
              <SkeletonTextWrapper
                className={styles.tokenPriceDiff}
                loading={loading}
                defaultText={'18.98 %'}
              >
                <RatingDiffTriangle
                  numberType={NumberType.Percent}
                  allowEmpty={true}
                  ratingDiff={data?.[priceDiffKeyByPeriod[selectedPeriod]] as number | undefined}
                />
              </SkeletonTextWrapper>
              <span className={styles.period}>&nbsp;({selectedPeriod})</span>
            </div>
          </span>
        </div>
        <ValueWithPending
          className={styles.detailsItem}
          title="Market Cap"
          value={data?.marketCap}
          numberType={NumberType.Currency}
          size={ElementSize.LARGE}
          loading={loading}
          defaultSkeletonText={'$418 940 000'}
        />
        <ValueWithPending
          className={styles.detailsItem}
          title="Trading Volume"
          value={data?.tradingVolumeDay}
          numberType={NumberType.Currency}
          size={ElementSize.LARGE}
          loading={loading}
          defaultSkeletonText={'$418 940 000'}
        />
      </div>
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
    </div>
  );
}
