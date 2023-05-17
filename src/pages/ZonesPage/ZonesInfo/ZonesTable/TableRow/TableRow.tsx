import { useNavigate } from 'react-router-dom';

import {
  RatingDiffTriangle,
  ValueWithPending,
  ZoneLogo,
  ZoneStatus,
  TableRowItem,
} from 'components';
import { overviewPath } from 'routing';
import { NumberType } from 'types/NumberType';
import { LineChart } from 'ui';

import styles from './TableRow.module.scss';
import { TableRowProps, ZoneData } from './TableRow.props';
import { ColumnKeys } from '../Types';

const ratingDiffKeysMap: Record<ColumnKeys, keyof ZoneData> = {
  ibcVolumeReceived: 'ibcVolumeInRatingDiff',
  ibcVolumeSent: 'ibcVolumeOutRatingDiff',
  ibcVolume: 'ibcVolumeRatingDiff',
  ibcTransfers: 'ibcTransfersRatingDiff',
  totalTxs: 'totalIbcTxsRatingDiff',
  activeAddresses: 'dauRatingDiff',
  ibcDau: 'ibcDauRatingDiff',
};

export function TableRow({
  index,
  isTableHorizontalScrollable,
  selectedColumnKey,
  zone,
}: TableRowProps) {
  const navigate = useNavigate();

  const ratingDiff = zone[ratingDiffKeysMap[selectedColumnKey]] as number;

  const onClick = () => {
    navigate(`${zone.zone}/${overviewPath}`);
  };

  return (
    <tr className={styles.container} onClick={onClick}>
      <TableRowItem isSticky={isTableHorizontalScrollable}>
        <span className={styles.position}>{index + 1}</span>
      </TableRowItem>

      <TableRowItem isSticky={isTableHorizontalScrollable} withBorder={isTableHorizontalScrollable}>
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
          pendingValue={zone.ibcVolumePending}
          value={zone.ibcVolume}
        />
      </TableRowItem>

      <TableRowItem>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Currency}
          pendingValue={zone.ibcVolumeInPending}
          value={zone.ibcVolumeIn}
        />
      </TableRowItem>

      <TableRowItem withBorder={true}>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Currency}
          pendingValue={zone.ibcVolumeOutPending}
          value={zone.ibcVolumeOut}
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
          pendingValue={zone.ibcTransfersPending}
          value={zone.ibcTransfers}
        />
      </TableRowItem>

      <TableRowItem>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Number}
          value={zone.peersCount}
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

      <TableRowItem>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Number}
          value={zone.dau}
        />
      </TableRowItem>

      <TableRowItem withBorder={true}>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Number}
          value={zone.ibcDau}
        />
      </TableRowItem>

      <TableRowItem>
        {zone.ibcVolumeChart && <LineChart data={zone.ibcVolumeChart} dataKey="volume" />}
      </TableRowItem>
    </tr>
  );
}
