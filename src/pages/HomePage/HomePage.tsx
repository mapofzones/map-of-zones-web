import { gql, useQuery } from '@apollo/client';
import { useMemo, useState } from 'react';
import { Button, Card, NumberFormat } from '../../components';
import { ArrowRight, PendingIcon } from '../../icons';
import { TOTAL_INFO_QUERY } from '../../queries/HomePage/TotalInfoQuery';
import { ZONES_INFO_QUERY } from '../../queries/HomePage/ZonesInfoQuery';
import styles from './HomePage.module.scss';
import { ZonesInfoTable } from './index';
import { ColumnKeys } from './Types';

const detailedInfo: { [key: string]: any } = {
  IBC_VOLUME: {
    numberType: 'currency',
    title: 'Total IBC Volume (24h)',
    value: 'ibcVolume',
    pendingValue: 'ibcVolumePending',
  },
  IBC_TRANSFERS: {
    numberType: 'number',
    title: 'Total IBC Transfers (24h)',
    value: 'ibcTransfers',
    pendingValue: 'ibcTransfersPending',
  },
  TOTAL_TXS: {
    numberType: 'number',
    title: 'Total Transaction (24h)',
    value: 'total_txs',
  },
};

function HomePage() {
  const [columnType, setColumnType] = useState<ColumnKeys>(ColumnKeys.IbcVolume);

  const details = useMemo(() => detailedInfo[columnType], [columnType]);

  const { data: totalInfo } = useQuery(TOTAL_INFO_QUERY, {
    variables: {
      period: 24,
      isMainnet: true,
      withVolume: columnType === ColumnKeys.IbcVolume,
      withTransfers: columnType === ColumnKeys.IbcTransfers,
    },
  });
  const { data: zones } = useQuery(ZONES_INFO_QUERY, {
    variables: {
      period: 24,
      isMainnet: true,
      withVolume: columnType === ColumnKeys.IbcVolume,
      withTransfers: columnType === ColumnKeys.IbcTransfers,
    },
  });

  const onColumnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as ColumnKeys;
    setColumnType(value);
  };

  return (
    <div className={styles.pageContainer}>
      <div>MAP</div>
      <Card className={styles.sidebar}>
        <div className={styles.blockRow}>
          <span>{zones?.zonesInfo?.length} Zones</span>
          <div>Search</div>
        </div>
        <div className={styles.blockRow}>
          <div>
            <select value={columnType} onChange={onColumnChange}>
              <option value={ColumnKeys.IbcVolume}>IBC Volume</option>
              <option value={ColumnKeys.IbcTransfers}>IBC Transfers</option>
            </select>
          </div>
          <div>24h | 7d | 30d</div>
        </div>
        <Card className={styles.totalContainer}>
          {totalInfo && (
            <>
              <span className={styles.totalContainer_title}>Total IBC Volume (24h)</span>
              <span className={styles.totalContainer_value}>
                <NumberFormat
                  value={totalInfo.headers[0][details.value]}
                  type={details.numberType}
                />
              </span>
              <span className={styles.totalContainer_pendingContainer}>
                <PendingIcon />
                <span className={styles.totalContainer_pending}>
                  <NumberFormat
                    value={totalInfo.headers[0][details.pendingValue]}
                    type={details.numberType}
                  />
                </span>
              </span>
            </>
          )}
        </Card>
        <ZonesInfoTable data={zones} columnType={columnType} numberType={details.numberType} />
        <Button className={styles.detailedBtn}>
          <span className={styles.btnText}>Detailed View</span>
          <ArrowRight />
        </Button>
      </Card>
    </div>
  );
}

export default HomePage;
