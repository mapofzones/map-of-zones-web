import {
  LinkWithQuery,
  LineChart,
  NumberType,
  RatingDiffTriangle,
  ValueWithPending,
  ZoneLogo,
  ZoneStatus,
  TableRowItem,
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
      <TableRowItem>
        <span className={styles.position}>{index + 1}</span>
      </TableRowItem>

      <TableRowItem>
        <div className={styles.zoneBaseInfoContainer}>
          <ZoneLogo logoUrl={zone.logoUrl} className={styles.logo} />
          <span className={styles.zoneName}>{zone.name}</span>
          <ZoneStatus className={styles.status} status={zone.isZoneUpToDate} />
          <RatingDiffTriangle className={styles.ratingDiff} ratingDiff={ratingDiff} />
        </div>
      </TableRowItem>

      <TableRowItem>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Currency}
          pendingValue={zone.ibcVolumePendingMainnet}
          value={zone.ibcVolumeMainnet}
        />
      </TableRowItem>

      <TableRowItem>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Currency}
          pendingValue={zone.ibcVolumeInPendingMainnet}
          value={zone.ibcVolumeInMainnet}
        />
      </TableRowItem>

      <TableRowItem withBorder={true}>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Currency}
          pendingValue={zone.ibcVolumeOutPendingMainnet}
          value={zone.ibcVolumeOutMainnet}
        />
      </TableRowItem>

      <TableRowItem>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Number}
          value={zone.totalTxs}
        />
      </TableRowItem>

      <TableRowItem withBorder={true}>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Number}
          pendingValue={zone.ibcTransfersPendingMainnet}
          value={zone.ibcTransfersMainnet}
        />
      </TableRowItem>

      <TableRowItem>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Number}
          value={zone.peersCountMainnet}
        />
      </TableRowItem>

      <TableRowItem withBorder={true}>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Number}
          value={zone.channelsCount}
        />
      </TableRowItem>

      <TableRowItem withBorder={true}>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Number}
          value={zone.ibcDauMainnet}
        />
      </TableRowItem>

      <TableRowItem withBorder={true}>
        {zone.ibcTransfersChart && <LineChart data={zone.ibcTransfersChart} dataKey="txs" />}
      </TableRowItem>
    </LinkWithQuery>
  );
}
