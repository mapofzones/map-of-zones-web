import { memo } from 'react';

import cn from 'classnames';

import { useSearchSidebarAnalytics } from 'hooks/analytics/HomePage/useSearchSidebarAnalytics';
import { useFilteredZones } from 'hooks/useFilteredZones';

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
    ratingKey: keyof ZonesTableDataQueryItem;
    ratingDiffKey: keyof ZonesTableDataQueryItem;
  }
> = {
  ibcVolume: {
    valueKey: 'ibcVolume',
    pendingValueKey: 'ibcVolumePending',
    ratingKey: 'ibcVolumeRating',
    ratingDiffKey: 'ibcVolumeRatingDiff',
  },
  ibcTransfers: {
    valueKey: 'ibcTransfers',
    pendingValueKey: 'ibcTransfersPending',
    ratingKey: 'ibcTransfersRating',
    ratingDiffKey: 'ibcTransfersRatingDiff',
  },
  totalTxs: {
    valueKey: 'totalTxs',
    ratingKey: 'totalTxsRating',
    ratingDiffKey: 'totalTxsRatingDiff',
  },
  dau: {
    valueKey: 'dau',
    ratingKey: 'dauRating',
    ratingDiffKey: 'dauRatingDiff',
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

  const filteredZones = useFilteredZones(data || [], searchValue);

  useSearchSidebarAnalytics(filteredZones, searchValue);

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
            rating: zone[fields.ratingKey] as any,
            ratingDiff: zone[fields.ratingDiffKey] as any,
            value: zone[fields.valueKey] as any,
            pendingValue: fields.pendingValueKey && (zone[fields.pendingValueKey] as any),
          }}
        />
      ))}
    </div>
  );
}

export const MemoizedZonesInfoTable = memo(ZonesInfoTable);
