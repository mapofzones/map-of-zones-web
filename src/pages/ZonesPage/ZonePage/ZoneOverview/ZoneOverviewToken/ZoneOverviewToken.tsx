import { useContext, useState } from 'react';

import cn from 'classnames';

import {
  ButtonGroup,
  Card,
  NumberFormat,
  NumberType,
  PeriodKeys,
  RatingDiffTriangle,
  SkeletonTextWrapper,
  ValueWithPending,
  ZoneLogo,
} from 'components';
import { Period } from 'components/PeriodBlock';
import { useSwitchedTokenInfoChartAnalytics } from 'hooks/analytics/ZonesPage/ZonePage/ZoneOverviewPage/useSwitchedTokenInfoChart';
import { ElementSize } from 'types/ElementSize';

import { OverviewTokenContext } from '../OverviewTokenContextProvider';
import { TokenCharts } from './TokenCharts/TokenCharts';
import { chartOptions, ChartType, priceDiffKeyByPeriod } from './Types';
import styles from './ZoneOverviewToken.module.scss';

const PERIODS: PeriodKeys[] = [PeriodKeys.DAY, PeriodKeys.WEEK, PeriodKeys.MONTH];

export function ZoneOverviewToken({ className }: { className?: string }) {
  const [selectedChartType, setSelectedChartType] = useState<ChartType>(ChartType.PRICE);
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodKeys>(PeriodKeys.DAY);

  const { loading, data } = useContext(OverviewTokenContext);

  const onChartSelected = (item: { key?: ChartType }) => {
    item?.key && setSelectedChartType(item.key);
    trackSelectedChart(item.key);
  };

  const onPeriodSelected = (item: { key?: PeriodKeys }) => {
    item?.key && setSelectedPeriod(item.key);
  };

  const trackSelectedChart = useSwitchedTokenInfoChartAnalytics();

  return (
    <Card title="Token" className={cn(className, styles.container)}>
      <div className={styles.detailsContainer}>
        <div className={styles.detailsItem}>
          <span className={styles.detailsItem_title}>Price</span>
          <span className={styles.detailsItem_data}>
            <div className={styles.infoGroup}>
              <ZoneLogo size="24px" logoUrl={data?.logoUrl} loading={loading} />
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
              <Period period={selectedPeriod} />
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
          title="Trading Volume (24h)"
          value={data?.tradingVolumeDay}
          numberType={NumberType.Currency}
          size={ElementSize.LARGE}
          loading={loading}
          defaultSkeletonText={'$418 940 000'}
        />
      </div>

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

      <TokenCharts chartType={selectedChartType} period={selectedPeriod} />
    </Card>
  );
}
