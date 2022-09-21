import cn from 'classnames';

import {
  Divider,
  LineChart,
  NumberFormat,
  NumberType,
  PendingValue,
  TotalCard,
  TotalInfo,
  ValueWithPending,
} from 'components';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import { useZonesTotalInfo } from './useZonesTotalInfo';
import { ZonesConnection } from './ZonesConnection/ZonesConnection';
import styles from './ZonesTotalInfo.module.scss';

export function ZonesTotalInfo(): JSX.Element {
  const [selectedPeriod] = useSelectedPeriod();

  const { data: zonesTotalInfo } = useZonesTotalInfo(selectedPeriod);
  if (!zonesTotalInfo) {
    return <></>;
  }

  return (
    <TotalInfo>
      <TotalCard className={styles.withChart}>
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
          <LineChart
            className={styles.chart}
            data={zonesTotalInfo.ibcTotalVolumeChart}
            dataKey="volume"
          />
        )}
      </TotalCard>

      <TotalCard>
        <span className={styles.title}>Total IBC Transfers ({selectedPeriod})</span>
        <div className={styles.withAdditionalData}>
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

      <TotalCard className={styles.doubleItem} hiding={true}>
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

      <TotalCard className={styles.topItem}>
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

      <TotalCard className={styles.topItem}>
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
