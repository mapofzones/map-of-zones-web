import {
  LineChart,
  NumberType,
  RatingDiffTriangle,
  TotalCard,
  TotalInfo,
  ValueWithPending,
  ZoneLogo,
} from 'components';

import styles from './AssetsTotalInfo.module.scss';
import { useAssetsTotalInfo } from './useAssetsTotalInfo';

export function AssetsTotalInfo(): JSX.Element {
  const { data: zonesTotalInfo } = useAssetsTotalInfo();

  if (!zonesTotalInfo) {
    return <></>;
  }

  return (
    <TotalInfo>
      <TotalCard className={styles.withChart}>
        <div>
          <div className={styles.title}>24h Trading Volume</div>
          <ValueWithPending
            className={styles.value}
            numberType={NumberType.Currency}
            value={zonesTotalInfo.volume24h}
          />
        </div>

        {zonesTotalInfo.total24hTradingVolumeChart && (
          <LineChart
            className={styles.chart}
            data={zonesTotalInfo.total24hTradingVolumeChart}
            dataKey="volume"
          />
        )}
      </TotalCard>

      <TotalCard>
        <div className={styles.title}>Cosmos Network Market Cap</div>
        <ValueWithPending
          className={styles.value}
          numberType={NumberType.Currency}
          value={zonesTotalInfo.marketCap}
        />
      </TotalCard>

      <TotalCard className={styles.doubleItem} hiding={true}>
        <div className={styles.title}>All Assets</div>
        <ValueWithPending
          className={styles.value}
          numberType={NumberType.Number}
          value={zonesTotalInfo.assetsCount}
        />
      </TotalCard>

      <TotalCard className={styles.topItem}>
        <div className={styles.zoneInfoContainer}>
          <ZoneLogo logoUrl={zonesTotalInfo.topMarketTokenLogo} className={styles.logo} />
          <div>
            <div className={styles.title}>Atom Market Cap Dominance</div>
            <div className={styles.value}>
              {zonesTotalInfo.topMarketName}{' '}
              <span className={styles.additianalValue}>
                ({zonesTotalInfo.topMarketTokenSymbol})
              </span>
            </div>
            {/* <div className={styles.additianalValue}>{zonesTotalInfo.topMarketTokenSymbol}</div> */}
          </div>
        </div>

        <div className={styles.totalContainer}>
          <ValueWithPending
            className={styles.total}
            value={zonesTotalInfo.topMarketDominance}
            numberType={NumberType.Percent}
          />
        </div>
      </TotalCard>

      <TotalCard className={styles.topItem}>
        <div className={styles.zoneInfoContainer}>
          <ZoneLogo logoUrl={zonesTotalInfo.topMoverTokenLogo} className={styles.logo} />
          <div>
            <div className={styles.title}>Top Mover</div>
            <div className={styles.value}>
              {zonesTotalInfo.topMoverName}{' '}
              <span className={styles.additianalValue}>({zonesTotalInfo.topMoverTokenSymbol})</span>
            </div>
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
      </TotalCard>
    </TotalInfo>
  );
}
