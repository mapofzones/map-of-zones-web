import { gql, useQuery } from '@apollo/client';
import { useMemo, useState } from 'react';
import { Button, Card } from '../../components';
import { ArrowRight, PendingIcon } from '../../icons';
import { TOTAL_INFO_QUERY } from '../../queries/HomePage/TotalInfoQuery';
import { ZONES_INFO_QUERY } from '../../queries/HomePage/ZonesInfoQuery';
import styles from './HomePage.module.scss';
import { ZonesInfoTable } from './index';

const detailedInfo: { [key: string]: any } = {
  ibcVolume: {
    format: 'currency',
    title: 'Total IBC Volume (24h)',
    value: 'ibcVolume',
    pendingValue: 'ibcVolumePending',
  },
  ibcTransfers: {
    format: 'number',
    title: 'Total IBC Transfers (24h)',
    value: 'ibcTransfers',
    pendingValue: 'ibcTransfersPending',
  },
  tatalTxs: {
    format: 'number',
    title: 'Total Transaction (24h)',
  },
};

function HomePage() {
  const [columnType, setColumnType] = useState('ibcVolume');

  const details = useMemo(() => detailedInfo[columnType], [columnType]);

  const { data: totalInfo } = useQuery(TOTAL_INFO_QUERY, {
    variables: {
      period: 24,
      isMainnet: true,
      withVolume: columnType === 'ibcVolume',
      withTransfers: columnType === 'ibcTransfers',
    },
  });
  const { data: zones } = useQuery(ZONES_INFO_QUERY, {
    variables: {
      period: 24,
      isMainnet: true,
      withVolume: columnType === 'ibcVolume',
      withTransfers: columnType === 'ibcTransfers',
    },
  });

  console.log(zones);

  const onColumnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    console.log(event.target.value);
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
              <option value="ibcVolume">IBC Volume</option>
              <option value="ibcTransfers">IBC Transfers</option>
            </select>
          </div>
          <div>24h | 7d | 30d</div>
        </div>
        <Card className={styles.totalContainer}>
          {totalInfo && (
            <>
              <span className={styles.totalContainer_title}>Total IBC Volume (24h)</span>
              <span className={styles.totalContainer_value}>
                ${totalInfo.headers[0][details.value]}
              </span>
              <span className={styles.totalContainer_pendingContainer}>
                <PendingIcon />
                <span className={styles.totalContainer_pending}>
                  ${totalInfo.headers[0][details.pendingValue]}
                </span>
              </span>
            </>
          )}
        </Card>
        <ZonesInfoTable data={zones} columnType={columnType} />
        <Button className={styles.detailedBtn}>
          <span className={styles.btnText}>Detailed View</span>
          <ArrowRight />
        </Button>
      </Card>
    </div>
  );
}

export default HomePage;
