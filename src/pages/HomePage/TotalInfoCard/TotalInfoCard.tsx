import { useMemo } from 'react';

import cn from 'classnames';

import { Card, NumberFormat } from 'components';
import { PendingIcon } from 'icons';

import { ColumnKeys } from '../Types';
import styles from './TotalInfoCard.module.scss';
import { TotalInfoCardProps, TotalInfoType } from './TotalInfoCard.props';

type TotalInfoMetadata = {
  title: string;
  valueKey: keyof TotalInfoType;
  pendingValueKey?: keyof TotalInfoType;
};

const metadata: Record<ColumnKeys, TotalInfoMetadata> = {
  ibcVolume: {
    title: 'Total IBC Volume (24h)',
    valueKey: 'ibcVolume',
    pendingValueKey: 'ibcVolumePending',
  },
  ibcTransfers: {
    title: 'Total IBC Transfers (24h)',
    valueKey: 'ibcTransfers',
    pendingValueKey: 'ibcTransfersPending',
  },
  totalTxs: {
    title: 'Total Transaction (24h)',
    valueKey: 'ibcTransfers', // add total txs
  },
};

function TotalInfoCard({
  totalInfo,
  columnType,
  numberType,
  className,
  ...props
}: TotalInfoCardProps) {
  const meta = useMemo(() => metadata[columnType], [columnType]);
  return (
    <Card className={cn(styles.container, className)} {...props}>
      {totalInfo && (
        <>
          <span className={styles.container_title}>{meta.title}</span>
          <span className={styles.container_value}>
            <NumberFormat value={totalInfo[meta.valueKey]} numberType={numberType} />
          </span>
          {meta.pendingValueKey && (
            <span className={styles.container_pendingContainer}>
              <PendingIcon />
              <span className={styles.container_pending}>
                <NumberFormat value={totalInfo[meta.pendingValueKey]} numberType={numberType} />
              </span>
            </span>
          )}
        </>
      )}
    </Card>
  );
}

export { TotalInfoCard };
