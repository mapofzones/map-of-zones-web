import cn from 'classnames';

import {
  Divider,
  LineChart,
  NumberFormat,
  NumberType,
  PendingValue,
  TotalCard,
  TotalCardSkeleton,
  TotalInfo,
  ValueWithPending,
} from 'components';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import { useZonesTotalInfo } from './useZonesTotalInfo';
import { ZonesConnection } from './ZonesConnection/ZonesConnection';
import styles from './ZonesTotalInfo.module.scss';

export function ZonesTotalInfo(): JSX.Element {
  const [selectedPeriod] = useSelectedPeriod();

  const isLaptopMedium = useMediaQuery('(max-width: 1280px)');

  const { data: zonesTotalInfo } = useZonesTotalInfo(selectedPeriod);

  if (!zonesTotalInfo) {
    return (
      <TotalInfo>
        <TotalCardSkeleton className={cn(styles.card, styles.withChart)} />
        <TotalCardSkeleton className={styles.card} />
        {!isLaptopMedium && <TotalCardSkeleton className={cn(styles.card, styles.doubleItem)} />}
        <TotalCardSkeleton className={cn(styles.card, styles.topItem)} />
        <TotalCardSkeleton className={cn(styles.card, styles.topItem)} />
      </TotalInfo>
    );
  }

  return (
    <TotalInfo>
      <TotalCard className={cn(styles.card, styles.withChart)}>
        <div>
          <span className={styles.title}>Total IBC Volume ({selectedPeriod})</span>
          <ValueWithPending
            className={styles.value}
            numberType={NumberType.Currency}
            pendingValue={zonesTotalInfo.ibcVolumePending}
            value={zonesTotalInfo.ibcVolume}
          />
        </div>

        {zonesTotalInfo.ibcTotalVolumeChart && (
          <LineChart data={zonesTotalInfo.ibcTotalVolumeChart} dataKey="volume" />
        )}
      </TotalCard>

      <TotalCard className={styles.card}>
        <span className={styles.title}>Total IBC Transfers ({selectedPeriod})</span>
        <div className={styles.additionalDataContainer}>
          <ValueWithPending
            className={styles.value}
            numberType={NumberType.Number}
            pendingValue={zonesTotalInfo.ibcTransfersPending}
            value={zonesTotalInfo.ibcTransfers}
          />

          <span className={styles.pendingValue}>
            Failed:&nbsp;
            <NumberFormat
              value={zonesTotalInfo.ibcTransfersFailed}
              numberType={NumberType.Number}
            />
          </span>
        </div>
      </TotalCard>

      {!isLaptopMedium && (
        <TotalCard className={cn(styles.card, styles.doubleItem)}>
          <div>
            <span className={styles.title}>All Channels</span>
            <NumberFormat
              className={cn(styles.value, styles.doublevalue)}
              value={zonesTotalInfo.allChannels}
              numberType={NumberType.Number}
            />
          </div>
          <Divider />
          <div>
            <span className={styles.title}>Active</span>
            <NumberFormat
              className={cn(styles.value, styles.doublevalue)}
              value={zonesTotalInfo.activeChannels}
              numberType={NumberType.Number}
            />
          </div>
        </TotalCard>
      )}

      <TotalCard className={cn(styles.card, styles.topItem)}>
        {zonesTotalInfo.ibcTransfersTopPair && (
          <>
            <div className={styles.zonesPairContainer}>
              <span className={styles.title}>Most Active Pair ({selectedPeriod})</span>
              <ZonesConnection
                circlesTypes={['source', 'target']}
                source={zonesTotalInfo.ibcTransfersTopPair.source?.name}
                target={zonesTotalInfo.ibcTransfersTopPair.target?.name}
              />
            </div>
            <div>
              <span className={styles.total}>
                <NumberFormat
                  value={zonesTotalInfo.ibcTransfersTopPair.ibcTransfers}
                  numberType={NumberType.Number}
                />
                &nbsp;Transfers
              </span>
              <PendingValue
                className={styles.pendingValue}
                numberType={NumberType.Number}
                value={zonesTotalInfo.ibcTransfersTopPair.ibcTransfersPending}
              />
            </div>
          </>
        )}
      </TotalCard>

      <TotalCard className={cn(styles.card, styles.topItem)}>
        {zonesTotalInfo.ibcVolumeTopPair && (
          <>
            <div className={styles.zonesPairContainer}>
              <span className={styles.title}>Biggest Volume Pair ({selectedPeriod})</span>
              <ZonesConnection
                circlesTypes={['source', 'volume']}
                source={zonesTotalInfo.ibcVolumeTopPair.source?.name}
                target={zonesTotalInfo.ibcVolumeTopPair.target?.name}
              />
            </div>
            <div>
              <NumberFormat
                className={styles.total}
                value={zonesTotalInfo.ibcVolumeTopPair.ibcVolume}
                numberType={NumberType.Currency}
              />
              <PendingValue
                className={styles.pendingValue}
                numberType={NumberType.Currency}
                value={zonesTotalInfo.ibcVolumeTopPair.ibcVolumePending}
              />
            </div>
          </>
        )}
      </TotalCard>
    </TotalInfo>
  );
}
