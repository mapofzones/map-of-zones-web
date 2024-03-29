import { useContext, useState } from 'react';

import cn from 'classnames';

import {
  ButtonGroup,
  NumberFormat,
  NumberType,
  PeriodKeys,
  RatingDiffTriangle,
  SkeletonTextWrapper,
  ZoneLogo,
} from 'components';
import { OverviewChartLegend } from 'components/OverviewChartCard/Legend/OverviewChartLegend';
import { OverviewLegendItem } from 'components/OverviewChartCard/Legend/OverviewLegendItem';
import { LegendTitleBase } from 'components/OverviewChartCard/Legend/Title/LegendTitleBase';
import { LegendNumberValue } from 'components/OverviewChartCard/Legend/Value/LegendNumberValue';
import { LegendValueBase } from 'components/OverviewChartCard/Legend/Value/LegendValueBase';
import { ZoneOverviewCard } from 'components/OverviewChartCard/ZoneOverviewCard';
import { Period } from 'components/PeriodBlock';
import { useSwitchedTokenInfoChartAnalytics } from 'hooks/analytics/ZonesPage/ZonePage/ZoneOverviewPage/useSwitchedTokenInfoChart';
import { ElementSize } from 'types/ElementSize';

import { TokenCharts } from './TokenCharts/TokenCharts';
import { chartOptions, ChartType, priceDiffKeyByPeriod } from './Types';
import styles from './ZoneOverviewToken.module.scss';
import { OverviewTokenContext } from '../OverviewTokenContextProvider';

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
    <ZoneOverviewCard title="Token" className={cn(className, styles.container)}>
      <OverviewChartLegend className={cn(styles.chartLegend, styles.wrapped)}>
        <OverviewLegendItem className={styles.legendItem}>
          <LegendTitleBase>Price</LegendTitleBase>
          <LegendValueBase>
            <div className={cn(styles.infoGroup, styles.tokenNamePrice)}>
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
          </LegendValueBase>
        </OverviewLegendItem>

        <OverviewLegendItem className={styles.legendItem}>
          <LegendTitleBase>Market Cap</LegendTitleBase>
          <SkeletonTextWrapper loading={loading} defaultText={'$13 952 000'}>
            <LegendNumberValue
              value={data?.marketCap || undefined}
              numberType={NumberType.Currency}
            />
          </SkeletonTextWrapper>
        </OverviewLegendItem>

        <OverviewLegendItem className={styles.legendItem}>
          <LegendTitleBase>Trading Volume (24h)</LegendTitleBase>
          <SkeletonTextWrapper loading={loading} defaultText={'$13 952 000'}>
            <LegendNumberValue
              value={data?.tradingVolumeDay || undefined}
              numberType={NumberType.Currency}
            />
          </SkeletonTextWrapper>
        </OverviewLegendItem>
      </OverviewChartLegend>

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
    </ZoneOverviewCard>
  );
}
