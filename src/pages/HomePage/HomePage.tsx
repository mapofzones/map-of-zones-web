import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import { Button, Card } from '../../components';
import { ArrowRight, PendingIcon } from '../../icons';
import styles from './HomePage.module.scss';
import { ZonesInfoTable } from './index';
import { INFO_WITH_TRANSFERS, INFO_WITH_VOLUME } from './ZonesInfoTable/ZonesInfoTable';

const TOTAL_INFO = gql`
  query GetTotalInfo($period: Int!) {
    headers(where: { timeframe: { _eq: $period }, is_mainnet_only: { _eq: false } }) {
      ibcVolume: ibc_cashflow_period
      ibcVolumePending: ibc_cashflow_pending_period
    }
  }
`;

const ZONES_INFO = gql`
  ${INFO_WITH_VOLUME}
  ${INFO_WITH_TRANSFERS}
  query GetZonesInfo($period: Int!, $isMainnet: Boolean!, $withVolume: Boolean!) {
    zonesInfo: zones_stats(
      where: { timeframe: { _eq: $period }, is_zone_mainnet: { _eq: $isMainnet } }
    ) {
      ...InfoWithVolume @include(if: $withVolume)
      ...InfoWithTransfers @skip(if: $withVolume)
    }
  }
`;

function HomePage() {
  const { loading, data } = useQuery(TOTAL_INFO, { variables: { period: 24 } });
  const { data: countData } = useQuery(gql`
    query GetZonesCount {
      zones_stats_aggregate {
        aggregate {
          count
        }
      }
    }
  `);
  const [columnType, setColumnType] = useState('volume');

  const { data: zones } = useQuery(ZONES_INFO, {
    variables: { period: 24, isMainnet: true, withVolume: columnType === 'volume' },
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
          <span>168 Zones</span>
          <div>Search</div>
        </div>
        <div className={styles.blockRow}>
          {/* <div>IBC Volume</div> */}
          <div>
            <select value={columnType} onChange={onColumnChange}>
              <option value="volume">IBC Volume</option>
              <option value="transfers">IBC transfers</option>
            </select>
          </div>
          <div>24h | 7d | 30d</div>
        </div>
        <Card className={styles.totalContainer}>
          {loading && <p>Loading...</p>}
          {data && (
            <>
              <span className={styles.totalContainer_title}>Total IBC Volume (24h)</span>
              <span className={styles.totalContainer_value}>${data.headers[0].ibcVolume}</span>
              <span className={styles.totalContainer_pendingContainer}>
                <PendingIcon />
                <span className={styles.totalContainer_pending}>
                  ${data.headers[0].ibcVolumePending}
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
