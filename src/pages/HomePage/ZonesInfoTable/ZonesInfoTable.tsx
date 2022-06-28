import { useMemo } from 'react';

import cn from 'classnames';

import { ZoneInfoRow } from '../index';
import { ColumnKeys } from '../Types';
import styles from './ZonesInfoTable.module.scss';
import { ZonesInfoTableProps } from './ZonesInfoTable.props';

const fieldsMap: Record<ColumnKeys, any> = {
  IBC_VOLUME: {
    value: 'ibcVolume',
    pendingValue: 'ibcVolumePending',
  },
  IBC_TRANSFERS: {
    value: 'ibcTransfers',
    pendingValue: 'ibcTransfersPending',
  },
  TOTAL_TXS: {
    value: 'totalTxs',
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
  console.log(fields);

  return (
    <div className={cn(styles.zonesInfoTable, className)} {...props}>
      {data &&
        data.zonesInfo &&
        data.zonesInfo.map((info: any) => (
          <ZoneInfoRow
            key={info.id}
            numberType={numberType}
            data={{
              name: info.name,
              logoUrl: info.logoUrl,
              value: info[fields.value],
              pendingValue: info[fields.pendingValue],
            }}
          />
        ))}
    </div>
  );
}

export { ZonesInfoTable };
