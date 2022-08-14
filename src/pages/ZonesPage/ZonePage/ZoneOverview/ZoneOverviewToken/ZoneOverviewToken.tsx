import cn from 'classnames';

import { NumberFormat, NumberType, RatingDiffTriangle, ZoneLogo } from 'components';
import { AreaChart } from 'components/ui/AreaChart/AreaChart';

import styles from './ZoneOverviewToken.module.scss';

export function ZoneOverviewToken({ className }: { className?: string }) {
  return (
    <div className={cn(className, styles.container)}>
      <div className={styles.title}>Token</div>
      <div className={styles.tokenInfoContainer}>
        <div className={styles.tokenInfoItem}>
          <span className={styles.tokenInfoItem_title}>Price</span>
          <span className={styles.tokenInfoItem_data}>
            <div className={styles.infoGroup}>
              <ZoneLogo size="20px" />
              <span className={styles.tokenName}>INJ</span>
              <NumberFormat
                value={1.56}
                numberType={NumberType.Currency}
                className={styles.tokenPrice}
              />
            </div>
            <div className={styles.infoGroup}>
              <RatingDiffTriangle
                className={styles.tokenPriceDiff}
                numberType={NumberType.Percent}
                ratingDiff={13.5}
              />
              <span className={styles.period}>(24h)</span>
            </div>
          </span>
        </div>
        <div className={styles.tokenInfoItem}>
          <span className={styles.tokenInfoItem_title}>Market Cap</span>
          <NumberFormat
            className={styles.tokenInfoItem_data}
            value={997309120}
            numberType={NumberType.Currency}
          />
        </div>
        <div className={styles.tokenInfoItem}>
          <span className={styles.tokenInfoItem_title}>Volume</span>
          <NumberFormat
            className={styles.tokenInfoItem_data}
            value={1530009150}
            numberType={NumberType.Currency}
          />
        </div>
      </div>
      <div className={styles.tokenInfoChart}>
        <AreaChart />
      </div>
    </div>
  );
}
