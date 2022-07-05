import { useMemo } from 'react';

import cn from 'classnames';

import { ZoneInfoRow } from '../../../index';
import { ColumnKeys } from '../../../Types';
import styles from './ZonesInfoTable.module.scss';
import { ZonesInfoTableProps, ZonesTableDataQueryItem } from './ZonesInfoTable.props';

const fieldsMap: Record<
  ColumnKeys,
  {
    valueKey: keyof ZonesTableDataQueryItem;
    pendingValueKey?: keyof ZonesTableDataQueryItem;
    ratingDiffKey: keyof ZonesTableDataQueryItem;
  }
> = {
  ibcVolume: {
    valueKey: 'ibcVolume',
    pendingValueKey: 'ibcVolumePending',
    ratingDiffKey: 'ibcVolumeRatingDiff',
  },
  ibcTransfers: {
    valueKey: 'ibcTransfers',
    pendingValueKey: 'ibcTransfersPending',
    ratingDiffKey: 'ibcTransfersRatingDiff',
  },
  totalTxs: {
    valueKey: 'totalTxs',
    ratingDiffKey: 'totalTxsRatingDiff',
  },
};

export function ZonesInfoTable({
  data,
  columnType,
  numberType,
  className,
  ...props
}: ZonesInfoTableProps) {
  const fields = useMemo(() => fieldsMap[columnType], [columnType]);

  return (
    <div className={cn(styles.zonesInfoTable, className)} {...props}>
      {data &&
        data.map((zone: ZonesTableDataQueryItem) => (
          <ZoneInfoRow
            key={zone.zone}
            numberType={numberType}
            zone={{
              id: zone.zone,
              name: zone.name,
              logoUrl: zone.logoUrl,
              ratingDiff: zone[fields.ratingDiffKey] as number,
              value: zone[fields.valueKey] as number,
              pendingValue: fields.pendingValueKey && (zone[fields.pendingValueKey] as number),
            }}
          />
        ))}
    </div>
  );
}
