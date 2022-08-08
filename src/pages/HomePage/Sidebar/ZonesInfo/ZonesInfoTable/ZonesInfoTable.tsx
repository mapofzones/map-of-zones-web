import { memo, useMemo } from 'react';

import cn from 'classnames';

import { searchZonesByName } from 'utils/helper';

import { ZoneInfoRow } from '../../../index';
import { ColumnKeys } from '../../../Types';
import { METADATA } from '../Types';
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

function ZonesInfoTable({
  data,
  searchValue,
  columnType,
  className,
  ...props
}: ZonesInfoTableProps) {
  const fields = fieldsMap[columnType];
  const numberType = METADATA[columnType].numberType;

  const filteredZones = useMemo(
    () => (searchValue ? searchZonesByName(data || [], searchValue) : data),
    [data, searchValue]
  );

  return (
    <div className={cn(styles.zonesInfoTable, className)} {...props}>
      {!!searchValue && !filteredZones?.length && (
        <div className={styles.zonesNotFoundContainer}>No zones found.</div>
      )}
      {filteredZones?.map((zone: ZonesTableDataQueryItem) => (
        <ZoneInfoRow
          key={zone.zone}
          numberType={numberType}
          searchValue={searchValue}
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

export const MemoizedZonesInfoTable = memo(ZonesInfoTable);
