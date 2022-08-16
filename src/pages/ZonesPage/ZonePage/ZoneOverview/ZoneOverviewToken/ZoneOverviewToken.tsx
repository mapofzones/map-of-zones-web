import cn from 'classnames';

import {
  NumberFormat,
  NumberType,
  RatingDiffTriangle,
  ValueWithPending,
  ZoneLogo,
} from 'components';
import { AreaChart } from 'components/ui/AreaChart/AreaChart';
import { ElementSize } from 'types/ElementSize';

import styles from './ZoneOverviewToken.module.scss';

export function ZoneOverviewToken({ className }: { className?: string }) {
  const data = [
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
          <ValueWithPending
            title="Market Cap"
            value={997309120}
            numberType={NumberType.Currency}
            size={ElementSize.LARGE}
          />
        </div>
        <div className={styles.tokenInfoItem}>
          <ValueWithPending
            title="Volume"
            value={1530009150}
            numberType={NumberType.Currency}
            size={ElementSize.LARGE}
          />
        </div>
      </div>
      <div className={styles.tokenInfoChart}>
        <AreaChart
          data={data}
          dataKey={'price'}
          dataFormat={NumberType.Currency}
          timeFormat={'HH:mm'}
        />
      </div>
    </div>
  );
}
