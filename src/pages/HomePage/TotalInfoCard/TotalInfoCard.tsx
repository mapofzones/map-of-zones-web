import { useMemo } from 'react';
import { Card, NumberFormat } from '../../../components';
import { PendingIcon } from '../../../icons';
import { ColumnKeys } from '../Types';
import cn from 'classnames';
import styles from './TotalInfoCard.module.scss';
import { TotalInfoCardProps } from './TotalInfoCard.props';

const metadata: Record<ColumnKeys, any> = {
  IBC_VOLUME: {
    title: 'Total IBC Volume (24h)',
    valueKey: 'ibcVolume',
    pendingValueKey: 'ibcVolumePending',
  },
  IBC_TRANSFERS: {
    title: 'Total IBC Transfers (24h)',
    valueKey: 'ibcTransfers',
    pendingValueKey: 'ibcTransfersPending',
  },
  TOTAL_TXS: {
    title: 'Total Transaction (24h)',
    valueKey: 'totalTxs',
  },
};

function TotalInfoCard({
  className,
  totalInfo,
  columnType,
  numberType,
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
          <span className={styles.container_pendingContainer}>
            <PendingIcon />
            <span className={styles.container_pending}>
              <NumberFormat value={totalInfo[meta.pendingValueKey]} numberType={numberType} />
            </span>
          </span>
        </>
      )}
    </Card>
  );
}

export { TotalInfoCard };
