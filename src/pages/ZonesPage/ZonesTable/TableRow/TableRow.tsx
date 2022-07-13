import cn from 'classnames';

import { NumberFormat, NumberType } from 'components';
import { PendingIcon } from 'icons';

import styles from './TableRow.module.scss';
import { TableRowProps } from './TableRow.props';

export function TableRow({ index, zone }: TableRowProps) {
  const tmpRating = 10;

  return (
    <tr className={styles.container}>
      <td className={styles.columnContainer}>
        <span className={styles.position}>{index + 1}</span>
      </td>

      <td className={styles.columnContainer}>
        <div className={styles.zoneBaseInfoContainer}>
          <div className={styles.logoContainer}>
            {zone.logoUrl && (
              <>
                <img className={styles.logo} src={zone.logoUrl} alt={`${zone.name} logo`} />
                <div className={styles.shadow} />
              </>
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
      </td>

      <td className={styles.columnContainer}>
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
      </td>

      <td className={styles.columnContainer}>
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
      </td>

      <td className={styles.columnContainer}>
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
      </td>

      <td className={styles.columnContainer}>
        <NumberFormat
          className={styles.value}
          value={zone.totalTxs === null ? '-' : zone.totalTxs}
          numberType={NumberType.Number}
        />
      </td>

      <td className={styles.columnContainer}>
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
      </td>

      <td className={styles.columnContainer}>
        <NumberFormat
          className={styles.value}
          value={zone.peersCountMainnet === null ? '-' : zone.peersCountMainnet}
          numberType={NumberType.Number}
        />
      </td>

      <td className={styles.columnContainer}>
        <NumberFormat
          className={styles.value}
          value={zone.channelsCount === null ? '-' : zone.channelsCount}
          numberType={NumberType.Number}
        />
      </td>

      <td className={styles.columnContainer}>
        <NumberFormat
          className={styles.value}
          value={zone.ibcDauMainnet === null ? '-' : zone.ibcDauMainnet}
          numberType={NumberType.Number}
        />
      </td>

      <td className={styles.columnContainer}>IBC Transfers Activity</td>
    </tr>
  );
}
