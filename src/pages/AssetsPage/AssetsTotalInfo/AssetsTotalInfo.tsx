import cn from 'classnames';

import { LineChart, NumberType, RatingDiffTriangle, ValueWithPending, ZoneLogo } from 'components';

import styles from './AssetsTotalInfo.module.scss';
import { useAssetsTotalInfo } from './useAssetsTotalInfo';

export function AssetsTotalInfo(): JSX.Element {
  const { data: zonesTotalInfo } = useAssetsTotalInfo();

  if (!zonesTotalInfo) {
    return <></>;
  }

  return (
    <div className={styles.container}>
      <div className={cn(styles.itemContainer, styles.withChart)}>
        <div>
          <div className={styles.title}>24h Trading Volume</div>
          <ValueWithPending
            className={styles.value}
            numberType={NumberType.Currency}
            value={zonesTotalInfo.volume24h}
          />
        </div>

        {zonesTotalInfo.ibcVolumeChart && (
          <LineChart
            className={styles.chart}
            data={zonesTotalInfo.ibcVolumeChart}
            dataKey="ibcVolumeChart"
          />
        )}
      </div>

      <div className={styles.itemContainer}>
        <div className={styles.title}>Cosmos Network Mkt Cap</div>
        <ValueWithPending
          className={styles.value}
          numberType={NumberType.Currency}
          value={zonesTotalInfo.marketCap}
        />
      </div>

      <div className={cn(styles.itemContainer, styles.doubleItem)}>
        <div className={styles.title}>All Assets</div>
        <ValueWithPending
          className={styles.value}
          numberType={NumberType.Number}
          value={zonesTotalInfo.assetsCount}
        />
      </div>

      <div className={cn(styles.itemContainer, styles.topItem)}>
        <div className={styles.zoneInfoContainer}>
          <ZoneLogo logoUrl={zonesTotalInfo.topMarketLogo} className={styles.logo} />
          <div>
            <div className={styles.title}>Atom Market Cap Dominance</div>
            <div className={styles.value}>{zonesTotalInfo.topMarketName}</div>
          </div>
        </div>

        <div className={styles.totalContainer}>
          <ValueWithPending
            className={styles.total}
            value={zonesTotalInfo.topMarketDominance}
            numberType={NumberType.Percent}
          />
        </div>
      </div>

      <div className={cn(styles.itemContainer, styles.topItem)}>
        <div className={styles.zoneInfoContainer}>
          <ZoneLogo logoUrl={zonesTotalInfo.topMoverLogo} className={styles.logo} />
          <div>
            <div className={styles.title}>Top Mover</div>
            <div className={styles.value}>{zonesTotalInfo.topMoverName}</div>
          </div>
        </div>

        <div className={styles.totalContainer}>
          <RatingDiffTriangle
            className={styles.total}
            numberType={NumberType.Percent}
            ratingDiff={zonesTotalInfo.topMoverRating}
          />
          <ValueWithPending
            className={styles.value}
            numberType={NumberType.Currency}
            value={zonesTotalInfo.topMoverValue}
          />
        </div>
      </div>
    </div>
  );
}
