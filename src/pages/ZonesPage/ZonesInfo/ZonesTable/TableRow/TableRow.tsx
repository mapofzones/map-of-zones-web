import cn from 'classnames';

import { NumberFormat, NumberType, ZoneStatus } from 'components';
import { PendingIcon } from 'icons';

import { ColumnKeys } from '../TableHeader/Types';
import styles from './TableRow.module.scss';
import { TableRowProps, ZoneData } from './TableRow.props';

const ratingDiffKeysMap: Record<ColumnKeys, keyof ZoneData> = {
  ibcActiveAddresses: 'ibcActiveAddressesMainnetRatingDiff',
  ibcVolumeReceived: 'ibcVolumeInMainnetRatingDiff',
  ibcVolumeSent: 'ibcVolumeOutMainnetRatingDiff',
  ibcVolume: 'ibcVolumeMainnetRatingDiff',
  ibcTransfers: 'ibcTransfersMainnetRatingDiff',
  totalTxs: 'totalIbcTxsMainnetRatingDiff',
};

export function TableRow({ index, selectedColumnKey, zone }: TableRowProps) {
  const ratingDiff = zone[ratingDiffKeysMap[selectedColumnKey]] as number;

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

          <ZoneStatus className={styles.status} status={zone.isZoneUpToDate} />

          {!!ratingDiff && (
            <div className={cn(styles.ratingDiff, { [styles.negative]: ratingDiff < 0 })}>
              <div
                className={cn(styles.triangle, {
                  [styles.triangleUp]: ratingDiff > 0,
                  [styles.triangleDown]: ratingDiff < 0,
                })}
              />
              {Math.abs(ratingDiff)}
            </div>
          )}
        </div>
      </td>

      <td className={styles.columnContainer}>
        <NumberFormat
          className={styles.value}
          value={zone.ibcVolumeMainnet}
          numberType={NumberType.Currency}
        />

        <span className={styles.pendingValueContainer}>
          <PendingIcon className={styles.pendingIcon} />
          <NumberFormat
            className={styles.pendingValue}
            value={zone.ibcVolumePendingMainnet}
            numberType={NumberType.Currency}
          />
        </span>
      </td>

      <td className={styles.columnContainer}>
        <NumberFormat
          className={styles.value}
          value={zone.ibcVolumeInMainnet}
          numberType={NumberType.Currency}
        />

        <span className={styles.pendingValueContainer}>
          <PendingIcon className={styles.pendingIcon} />
          <NumberFormat
            className={styles.pendingValue}
            value={zone.ibcVolumeInPendingMainnet}
            numberType={NumberType.Currency}
          />
        </span>
      </td>

      <td className={styles.columnContainer}>
        <NumberFormat
          className={styles.value}
          value={zone.ibcVolumeOutMainnet}
          numberType={NumberType.Currency}
        />

        <span className={styles.pendingValueContainer}>
          <PendingIcon className={styles.pendingIcon} />
          <NumberFormat
            className={styles.pendingValue}
            value={zone.ibcVolumeOutPendingMainnet}
            numberType={NumberType.Currency}
          />
        </span>
      </td>

      <td className={cn(styles.columnContainer, styles.withBorder)}>
        <NumberFormat
          className={styles.value}
          value={zone.totalTxs}
          numberType={NumberType.Number}
        />
      </td>

      <td className={styles.columnContainer}>
        <NumberFormat
          className={styles.value}
          value={zone.ibcTransfersMainnet}
          numberType={NumberType.Number}
        />

        <span className={styles.pendingValueContainer}>
          <PendingIcon className={styles.pendingIcon} />
          <NumberFormat
            className={styles.pendingValue}
            value={zone.ibcTransfersPendingMainnet}
            numberType={NumberType.Number}
          />
        </span>
      </td>

      <td className={cn(styles.columnContainer, styles.withBorder)}>
        <NumberFormat
          className={styles.value}
          value={zone.peersCountMainnet}
          numberType={NumberType.Number}
        />
      </td>

      <td className={styles.columnContainer}>
        <NumberFormat
          className={styles.value}
          value={zone.channelsCount}
          numberType={NumberType.Number}
        />
      </td>

      <td className={cn(styles.columnContainer, styles.withBorder)}>
        <NumberFormat
          className={styles.value}
          value={zone.ibcDauMainnet}
          numberType={NumberType.Number}
        />
      </td>

      <td className={cn(styles.columnContainer, styles.withBorder)}>IBC Transfers Activity</td>
    </tr>
  );
}
