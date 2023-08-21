import { useContext, useState } from 'react';

import cn from 'classnames';

import { PeriodKeys, RatingDiffTriangle, ZoneLogo } from 'components';
import {
  AnalysisCard,
  AnalysisCardLegend,
  AnalysisLegendItem,
  AnalysisLegendTitleBase,
  LegendNumberValue,
  LegendValueBase,
} from 'components/AnalysisCard';
import { Period } from 'components/PeriodBlock';
import { useSwitchedTokenInfoChartAnalytics } from 'hooks/analytics/ZonesPage/ZonePage/ZoneOverviewPage/useSwitchedTokenInfoChart';
import { ElementSize } from 'types/ElementSize';
import { NumberType } from 'types/NumberType';
import { ButtonGroup, NumberFormat, SkeletonTextWrapper } from 'ui';

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
    <AnalysisCard title="Token" className={cn(className, styles.container)}>
      <AnalysisCardLegend className={cn(styles.chartLegend, styles.wrapped)}>
        <AnalysisLegendItem showBorder className={styles.legendItem}>
          <AnalysisLegendTitleBase>Price</AnalysisLegendTitleBase>
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
        </AnalysisLegendItem>

        <AnalysisLegendItem showBorder className={styles.legendItem}>
          <AnalysisLegendTitleBase>Market Cap</AnalysisLegendTitleBase>
          <SkeletonTextWrapper loading={loading} defaultText={'$13 952 000'}>
            <LegendNumberValue
              size="lg"
              value={data?.marketCap || undefined}
              numberType={NumberType.Currency}
            />
          </SkeletonTextWrapper>
        </AnalysisLegendItem>

        <AnalysisLegendItem showBorder className={styles.legendItem}>
          <AnalysisLegendTitleBase>Trading Volume (24h)</AnalysisLegendTitleBase>
          <SkeletonTextWrapper loading={loading} defaultText={'$13 952 000'}>
            <LegendNumberValue
              size="lg"
              value={data?.tradingVolumeDay || undefined}
              numberType={NumberType.Currency}
            />
          </SkeletonTextWrapper>
        </AnalysisLegendItem>
      </AnalysisCardLegend>

      <div className={styles.chartControls}>
        <ButtonGroup
          className={styles.priceSwitcher}
          size={ElementSize.MEDIUM}
          buttons={chartOptions}
          setSelectedButton={onChartSelected}
        ></ButtonGroup>

        {PERIODS.length > 1 && (
          <ButtonGroup
            className={styles.chartTypeSwitcher}
            size={ElementSize.MEDIUM}
            buttons={PERIODS.map((period: PeriodKeys) => ({
              key: period,
              title: period.toUpperCase(),
            }))}
            setSelectedButton={onPeriodSelected}
          />
        )}
      </div>

      <TokenCharts chartType={selectedChartType} period={selectedPeriod} />
    </AnalysisCard>
  );
}
