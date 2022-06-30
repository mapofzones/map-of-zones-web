import { useMemo } from 'react';

import cn from 'classnames';

import { ZoneInfoRow } from '../index';
import { ColumnKeys } from '../Types';
import styles from './ZonesInfoTable.module.scss';
import { ZonesInfoTableProps } from './ZonesInfoTable.props';

const fieldsMap: Record<ColumnKeys, any> = {
  ibcVolume: {
    valueKey: 'ibcVolume',
    pendingValueKey: 'ibcVolumePending',
  },
  ibcTransfers: {
    valueKey: 'ibcTransfers',
    pendingValueKey: 'ibcTransfersPending',
  },
  totalTxs: {
    pendingValueKey: 'totalTxs',
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
        data.zonesTable &&
        data.zonesTable.map((info: any) => (
          <ZoneInfoRow
            key={info.zone}
            numberType={numberType}
            data={{
              id: info.zone,
              name: info.name,
              logoUrl: info.logoUrl,
              value: info[fields.valueKey],
              pendingValue: info[fields.pendingValueKey],
            }}
          />
        ))}
    </div>
  );
}

export { ZonesInfoTable };
