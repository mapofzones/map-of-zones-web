import cn from 'classnames';

import { LineChart, NumberType, RatingDiffTriangle, ValueWithPending, ZoneLogo } from 'components';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import styles from './AssetsTotalInfo.module.scss';
import { useAssetsTotalInfo } from './useAssetsTotalInfo';

export function AssetsTotalInfo(): JSX.Element {
  const [selectedPeriod] = useSelectedPeriod();

  const { data: zonesTotalInfo } = useAssetsTotalInfo(selectedPeriod);

  if (!zonesTotalInfo) {
    return <></>;
  }

  return (
    <div className={styles.container}>
      <div className={cn(styles.itemContainer, styles.withChart)}>
        <div>
          <div className={styles.title}>{selectedPeriod} Trading Volume</div>
          <ValueWithPending
            className={styles.value}
            numberType={NumberType.Currency}
            value={995345645124}
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
          value={198308551250}
        />
      </div>

      <div className={cn(styles.itemContainer, styles.doubleItemContainer)}>
        <div className={styles.title}>All Assets</div>
        <ValueWithPending
          className={cn(styles.value, styles.doublevalue)}
          numberType={NumberType.Number}
          value={35}
        />
      </div>

      <div className={cn(styles.itemContainer, styles.topItem)}>
        <div className={styles.zoneInfoContainer}>
          <ZoneLogo
            logoUrl="https://storage.mapofzones.com/frontend/labels/Cosmos40.svg"
            className={styles.logo}
          />
          <div>
            <div className={styles.title}>Atom Market Cap Dominance</div>
            <div className={styles.value}>Cosmos</div>
          </div>
        </div>

        <div className={styles.totalContainer}>
          <ValueWithPending className={styles.total} value={35} numberType={NumberType.Percent} />
        </div>
      </div>

      <div className={cn(styles.itemContainer, styles.topItem)}>
        <div className={styles.zoneInfoContainer}>
          <ZoneLogo
            logoUrl="https://storage.mapofzones.com/frontend/labels/Cosmos40.svg"
            className={styles.logo}
          />
          <div>
            <div className={styles.title}>Top Mover</div>
            <div className={styles.value}>Desmos</div>
          </div>
        </div>

        <div className={styles.totalContainer}>
          <RatingDiffTriangle
            className={styles.total}
            numberType={NumberType.Percent}
            ratingDiff={1.54}
          />
          <ValueWithPending
            className={styles.value}
            numberType={NumberType.Currency}
            value={760644271905}
          />
        </div>
      </div>
    </div>
  );
}
