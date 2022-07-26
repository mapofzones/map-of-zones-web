import cn from 'classnames';

import {
  LinkWithQuery,
  NumberType,
  RatingDiffTriangle,
  ValueWithPending,
  ZoneLogo,
  ZoneStatus,
} from 'components';

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
    <LinkWithQuery className={styles.container} to={`${zone.zone}/overview`}>
      <td className={styles.columnContainer}>
        <span className={styles.position}>{index + 1}</span>
      </td>

      <td className={styles.columnContainer}>
        <div className={styles.zoneBaseInfoContainer}>
          <ZoneLogo logoUrl={zone.logoUrl} className={styles.logo} />
          <span className={styles.zoneName}>{zone.name}</span>
          <ZoneStatus className={styles.status} status={zone.isZoneUpToDate} />
          <RatingDiffTriangle className={styles.ratingDiff} ratingDiff={ratingDiff} />
        </div>
      </td>

      <td className={styles.columnContainer}>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Currency}
          pendingValue={zone.ibcVolumePendingMainnet}
          value={zone.ibcVolumeMainnet}
        />
      </td>

      <td className={styles.columnContainer}>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Currency}
          pendingValue={zone.ibcVolumeInPendingMainnet}
          value={zone.ibcVolumeInMainnet}
        />
      </td>

      <td className={cn(styles.columnContainer, styles.withBorder)}>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Currency}
          pendingValue={zone.ibcVolumeOutPendingMainnet}
          value={zone.ibcVolumeOutMainnet}
        />
      </td>

      <td className={styles.columnContainer}>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Number}
          value={zone.totalTxs}
        />
      </td>

      <td className={cn(styles.columnContainer, styles.withBorder)}>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Number}
          pendingValue={zone.ibcTransfersPendingMainnet}
          value={zone.ibcTransfersMainnet}
        />
      </td>

      <td className={styles.columnContainer}>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Number}
          value={zone.peersCountMainnet}
        />
      </td>

      <td className={cn(styles.columnContainer, styles.withBorder)}>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Number}
          value={zone.channelsCount}
        />
      </td>

      <td className={cn(styles.columnContainer, styles.withBorder)}>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Number}
          value={zone.ibcDauMainnet}
        />
      </td>

      <td className={styles.columnContainer}>IBC Transfers Activity</td>
    </LinkWithQuery>
  );
}
