import { useMemo } from 'react';
import { Card, NumberFormat } from '../../../components';
import { PendingIcon } from '../../../icons';
import { ColumnKeys } from '../Types';
import styles from './TotalInfoCard.module.scss';

const metadata: Record<any, any> = {
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
    valueKey: 'total_txs',
  },
};

function TotalInfoCard({ totalInfo, columnType, numberType }: any) {
  const meta = useMemo(() => metadata[columnType], [columnType]);
  return (
    <Card className={styles.container}>
      {totalInfo && (
        <>
          <span className={styles.container_title}>{meta.title}</span>
          <span className={styles.container_value}>
            <NumberFormat value={totalInfo[meta.valueKey]} type={numberType} />
          </span>
          <span className={styles.container_pendingContainer}>
            <PendingIcon />
            <span className={styles.container_pending}>
              <NumberFormat value={totalInfo[meta.pendingValueKey]} type={numberType} />
            </span>
          </span>
        </>
      )}
    </Card>
  );
}

export { TotalInfoCard };
