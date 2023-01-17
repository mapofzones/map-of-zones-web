import cn from 'classnames';

import {
  Card,
  NumberFormat,
  NumberType,
  RatingDiffTriangle,
  SkeletonTextWrapper,
  ValueWithPending,
  ZoneLogo,
} from 'components';
import { PeriodBlock } from 'components/PeriodBlock';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { ElementSize } from 'types/ElementSize';

import { TokenCharts } from './TokenCharts/TokenCharts';
import { priceDiffKeyByPeriod } from './Types';
import { useZoneOverviewToken } from './useZoneOverviewToken';
import styles from './ZoneOverviewToken.module.scss';

export function ZoneOverviewToken({ className }: { className?: string }) {
  const [selectedPeriod] = useSelectedPeriod();

  const { data, loading } = useZoneOverviewToken();

  return (
    <Card title="Token" className={cn(className, styles.container)}>
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
              &nbsp;
              <PeriodBlock />
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

      <TokenCharts />
    </Card>
  );
}
