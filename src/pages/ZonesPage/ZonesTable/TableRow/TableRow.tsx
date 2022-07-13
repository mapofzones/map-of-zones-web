import cn from 'classnames';

import { NumberFormat, NumberType } from 'components';
import { PendingIcon } from 'icons';

import styles from './TableRow.module.scss';
import { TableRowProps } from './TableRow.props';

export function TableRow({ index, zone }: TableRowProps) {
  const tmpRating = 10;

  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <span className={styles.position}>{index + 1}</span>
      </div>

      <div className={styles.columnContainer}>
        <div className={styles.zoneBaseInfoContainer}>
          <div className={styles.logoContainer}>
            {zone.logoUrl && (
              <img className={styles.logo} src={zone.logoUrl} alt={`${zone.name} logo`} />
            )}
          </div>
          <span className={styles.value}>{zone.name}</span>
          {!!tmpRating && (
            <div className={cn(styles.ratingDiff, { [styles.negative]: tmpRating < 0 })}>
              <div
                className={cn(styles.triangle, {
                  [styles.triangleUp]: tmpRating > 0,
                  [styles.triangleDown]: tmpRating < 0,
                })}
              />
              {Math.abs(tmpRating)}
            </div>
          )}
        </div>
      </div>

      <div className={styles.columnContainer}>
        <NumberFormat
          className={styles.value}
          value={zone.ibcVolumeMainnet === null ? '-' : zone.ibcVolumeMainnet}
          numberType={NumberType.Currency}
        />

        <span className={styles.pendingValueContainer}>
          <PendingIcon className={styles.pendingIcon} />
          <NumberFormat
            className={styles.pendingValue}
            value={zone.ibcVolumePendingMainnet === null ? '-' : zone.ibcVolumePendingMainnet}
            numberType={NumberType.Currency}
          />
        </span>
      </div>

      <div className={styles.columnContainer}>
        <NumberFormat
          className={styles.value}
          value={zone.ibcVolumeInMainnet === null ? '-' : zone.ibcVolumeInMainnet}
          numberType={NumberType.Currency}
        />

        <span className={styles.pendingValueContainer}>
          <PendingIcon className={styles.pendingIcon} />
          <NumberFormat
            className={styles.pendingValue}
            value={zone.ibcVolumeInPendingMainnet === null ? '-' : zone.ibcVolumeInPendingMainnet}
            numberType={NumberType.Currency}
          />
        </span>
      </div>

      <div className={styles.columnContainer}>
        <NumberFormat
          className={styles.value}
          value={zone.ibcVolumeOutMainnet === null ? '-' : zone.ibcVolumeOutMainnet}
          numberType={NumberType.Currency}
        />

        <span className={styles.pendingValueContainer}>
          <PendingIcon className={styles.pendingIcon} />
          <NumberFormat
            className={styles.pendingValue}
            value={zone.ibcVolumeOutPendingMainnet === null ? '-' : zone.ibcVolumeOutPendingMainnet}
            numberType={NumberType.Currency}
          />
        </span>
      </div>

      <div className={styles.columnContainer}>
        <NumberFormat
          className={styles.value}
          value={zone.totalTxs === null ? '-' : zone.totalTxs}
          numberType={NumberType.Number}
        />
      </div>

      <div className={styles.columnContainer}>
        <NumberFormat
          className={styles.value}
          value={zone.ibcTransfersMainnet === null ? '-' : zone.ibcTransfersMainnet}
          numberType={NumberType.Number}
        />

        <span className={styles.pendingValueContainer}>
          <PendingIcon className={styles.pendingIcon} />
          <NumberFormat
            className={styles.pendingValue}
            value={zone.ibcTransfersPendingMainnet === null ? '-' : zone.ibcTransfersPendingMainnet}
            numberType={NumberType.Number}
          />
        </span>
      </div>

      <div className={styles.columnContainer}>
        <NumberFormat
          className={styles.value}
          value={zone.peersCountMainnet === null ? '-' : zone.peersCountMainnet}
          numberType={NumberType.Number}
        />
      </div>

      <div className={styles.columnContainer}>
        <NumberFormat
          className={styles.value}
          value={zone.channelsCount === null ? '-' : zone.channelsCount}
          numberType={NumberType.Number}
        />
      </div>

      <div className={styles.columnContainer}>
        <NumberFormat
          className={styles.value}
          value={zone.ibcDauMainnet === null ? '-' : zone.ibcDauMainnet}
          numberType={NumberType.Number}
        />
      </div>

      <div className={styles.columnContainer}>IBC Transfers Activity</div>
    </div>
  );
}
