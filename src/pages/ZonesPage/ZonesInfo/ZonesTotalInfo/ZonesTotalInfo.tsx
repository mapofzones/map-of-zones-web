import cn from 'classnames';

import { NumberFormat, NumberType, ValueWithPending } from 'components';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { PendingIcon } from 'icons';

import { useZonesTotalInfo } from './useZonesTotalInfo';
import styles from './ZonesTotalInfo.module.scss';

export function ZonesTotalInfo(): JSX.Element {
  const [selectedPeriod] = useSelectedPeriod();

  const { data: zonesTotalInfo } = useZonesTotalInfo(selectedPeriod);

  if (!zonesTotalInfo) {
    return <></>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.itemContainer}>
        <span className={styles.itemContainer_title}>Total IBC Volume ({selectedPeriod})</span>
        <ValueWithPending
          className={styles.itemContainer_value}
          numberType={NumberType.Currency}
          pendingValue={zonesTotalInfo.ibcVolumePending}
          value={zonesTotalInfo.ibcVolume}
        />
      </div>

      <div className={styles.itemContainer}>
        <span className={styles.itemContainer_title}>Total IBC Transfers ({selectedPeriod})</span>
        <div className={styles.itemContainer_withAdditionalData}>
          <ValueWithPending
            className={styles.itemContainer_value}
            numberType={NumberType.Number}
            pendingValue={zonesTotalInfo.ibcTransfersPending}
            value={zonesTotalInfo.ibcTransfers}
          />

          <span className={styles.itemContainer_pendingValue}>
            Failed:&nbsp;
            <NumberFormat
              value={zonesTotalInfo.ibcTransfersFailed}
              numberType={NumberType.Number}
            />
          </span>
        </div>
      </div>

      <div className={cn(styles.itemContainer, styles.doubleItemContainer)}>
        <div>
          <span className={styles.itemContainer_title}>All Channels</span>
          <NumberFormat
            className={cn(styles.itemContainer_value, styles.doubleItemContainer_value)}
            value={zonesTotalInfo.allChannels}
            numberType={NumberType.Number}
          />
        </div>
        <div className={styles.itemContainer_divider} />
        <div>
          <span className={styles.itemContainer_title}>Active</span>
          <NumberFormat
            className={cn(styles.itemContainer_value, styles.doubleItemContainer_value)}
            value={zonesTotalInfo.activeChannels}
            numberType={NumberType.Number}
          />
        </div>
      </div>

      <div className={cn(styles.itemContainer, styles.topItemContainer)}>
        <div>
          <span className={styles.itemContainer_title}>Most Active Pair ({selectedPeriod})</span>

          <div className={styles.topItemContainer_zonesContainer}>
            <div className={styles.topItemContainer_zoneContainer}>
              <div className={styles.topItemContainer_sourceCircle} />
              <span className={styles.topItemContainer_zoneText}>
                {zonesTotalInfo.ibcTransfersTopPair.source}
              </span>
            </div>
            <div className={styles.topItemContainer_divider} />
            <div className={styles.topItemContainer_zoneContainer}>
              <div className={styles.topItemContainer_targetCircle} />
              <span className={styles.topItemContainer_zoneText}>
                {zonesTotalInfo.ibcTransfersTopPair.target}
              </span>
            </div>
          </div>
        </div>
        <div>
          <span className={styles.topItemContainer_total}>
            <NumberFormat
              value={zonesTotalInfo.ibcTransfersTopPair.txs}
              numberType={NumberType.Number}
            />
            &nbsp;Transfers
          </span>
          <div
            className={cn(
              styles.itemContainer_pendingValueContainer,
              styles.topItemContainer_pendingValueContainer
            )}
          >
            <span className={styles.itemContainer_pendingValue}>
              <PendingIcon className={styles.itemContainer_pendingIcon} />
              <NumberFormat
                value={zonesTotalInfo.ibcTransfersTopPair.txs_pending}
                numberType={NumberType.Number}
              />
            </span>
          </div>
        </div>
      </div>

      <div className={cn(styles.itemContainer, styles.topItemContainer)}>
        <div>
          <span className={styles.itemContainer_title}>Biggest Volume Pair ({selectedPeriod})</span>
          <div className={styles.topItemContainer_zonesContainer}>
            <div className={styles.topItemContainer_zoneContainer}>
              <div className={styles.topItemContainer_sourceCircle} />
              <span className={styles.topItemContainer_zoneText}>
                {zonesTotalInfo.ibcVolumeTopPair[0].source}
              </span>
            </div>
            <div className={styles.topItemContainer_divider} />
            <div className={styles.topItemContainer_zoneContainer}>
              <div className={styles.topItemContainer_volumeTargetCircle} />
              <span className={styles.topItemContainer_zoneText}>
                {zonesTotalInfo.ibcVolumeTopPair[0].target}
              </span>
            </div>
          </div>
        </div>
        <div>
          <NumberFormat
            className={styles.topItemContainer_total}
            value={zonesTotalInfo.ibcVolumeTopPair[0].cashflow}
            numberType={NumberType.Currency}
          />
          <div
            className={cn(
              styles.itemContainer_pendingValueContainer,
              styles.topItemContainer_pendingValueContainer
            )}
          >
            <span className={styles.itemContainer_pendingValue}>
              <PendingIcon className={styles.itemContainer_pendingIcon} />
              <NumberFormat
                value={zonesTotalInfo.ibcVolumeTopPair[0].cashflow_pending}
                numberType={NumberType.Currency}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
