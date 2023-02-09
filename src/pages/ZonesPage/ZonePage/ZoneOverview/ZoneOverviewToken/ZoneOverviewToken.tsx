import { useContext } from 'react';

import cn from 'classnames';

import {
  NumberFormat,
  NumberType,
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
import { PeriodBlock } from 'components/PeriodBlock';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import { OverviewTokenContext } from '../OverviewTokenContextProvider';
import { TokenCharts } from './TokenCharts/TokenCharts';
import { priceDiffKeyByPeriod } from './Types';
import styles from './ZoneOverviewToken.module.scss';

export function ZoneOverviewToken({ className }: { className?: string }) {
  const [selectedPeriod] = useSelectedPeriod();

  const { loading, data } = useContext(OverviewTokenContext);

  return (
    <ZoneOverviewCard title="Token" className={cn(className, styles.container)}>
      <OverviewChartLegend className={cn(styles.chartLegend, styles.wrapped)}>
        <OverviewLegendItem className={styles.legendItem}>
          <LegendTitleBase>Price</LegendTitleBase>
          <LegendValueBase>
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
              <PeriodBlock />
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

      <TokenCharts />
    </ZoneOverviewCard>
  );
}
