import { useMemo } from 'react';

import cn from 'classnames';

import { ZoneInfoRow } from '../../../index';
import { ColumnKeys } from '../../../Types';
import styles from './ZonesInfoTable.module.scss';
import { ZonesInfoTableProps } from './ZonesInfoTable.props';

const fieldsMap: Record<ColumnKeys, { valueKey: string; pendingValueKey?: string }> = {
  ibcVolume: {
    valueKey: 'ibcVolume',
    pendingValueKey: 'ibcVolumePending',
  },
  ibcTransfers: {
    valueKey: 'ibcTransfers',
    pendingValueKey: 'ibcTransfersPending',
  },
  totalTxs: {
    valueKey: 'totalTxs',
  },
};

function ZonesInfoTable({
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
        data.map((info: any) => (
          <ZoneInfoRow
            key={info.zone}
            numberType={numberType}
            zone={{
              id: info.zone,
              name: info.name,
              logoUrl: info.logoUrl,
              value: info[fields.valueKey],
              pendingValue: fields.pendingValueKey && info[fields.pendingValueKey],
            }}
          />
        ))}
    </div>
  );
}

export { ZonesInfoTable };
