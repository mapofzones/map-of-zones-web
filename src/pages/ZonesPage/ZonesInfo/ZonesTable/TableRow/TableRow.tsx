import { useMemo } from 'react';

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
  const ratingDiff = useMemo(
    () => zone[ratingDiffKeysMap[selectedColumnKey]] as number,
    [selectedColumnKey, zone]
  );

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
