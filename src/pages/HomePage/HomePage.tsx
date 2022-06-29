import { useMemo, useState } from 'react';

import { useQuery } from '@apollo/client';

import { Button, Card } from 'components';
import { TotalZonesInfoDocument } from 'graphql/HomePage/__generated__/TotalZonesInfo.generated';
import { ZonesTableDataDocument } from 'graphql/HomePage/__generated__/ZonesTableData.generated';
import { ArrowRight } from 'icons';

import styles from './HomePage.module.scss';
import { ColumnKeys } from './Types';

import { TotalInfoCard, ZonesInfoTable } from './index';

const metadata: Record<ColumnKeys, any> = {
  IBC_VOLUME: {
    title: 'IBC Volume',
    numberType: 'currency',
  },
  IBC_TRANSFERS: {
    title: 'IBC Transfers',
    numberType: 'number',
  },
  TOTAL_TXS: {
    title: 'Total TXS',
    numberType: 'number',
  },
};

function HomePage() {
  const [columnType, setColumnType] = useState<ColumnKeys>(ColumnKeys.IbcVolume);

  const meta = useMemo(() => metadata[columnType], [columnType]);

  const { data: totalInfo } = useQuery(TotalZonesInfoDocument, {
    variables: {
      period: 24,
      isMainnet: true,
      withVolume: columnType === ColumnKeys.IbcVolume,
      withTransfers: columnType === ColumnKeys.IbcTransfers,
    },
  });
  const { data: zones } = useQuery(ZonesTableDataDocument, {
    variables: {
      period: 24,
      isMainnet: true,
      withVolume: columnType === ColumnKeys.IbcVolume,
      withTransfers: columnType === ColumnKeys.IbcTransfers,
      withTotalTxs: columnType === ColumnKeys.TotalTxs,
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
          <span>{zones?.zonesTable?.length} Zones</span>
          <div>Search</div>
        </div>
        <div className={styles.blockRow}>
          <div>
            <select value={columnType} onChange={onColumnChange}>
              <option value={ColumnKeys.IbcVolume}>{metadata[ColumnKeys.IbcVolume].title}</option>
              <option value={ColumnKeys.IbcTransfers}>
                {metadata[ColumnKeys.IbcTransfers].title}
              </option>
              <option value={ColumnKeys.TotalTxs}>{metadata[ColumnKeys.TotalTxs].title}</option>
            </select>
          </div>
          <div>24h | 7d | 30d</div>
        </div>
        <TotalInfoCard
          totalInfo={totalInfo?.headers[0]}
          columnType={columnType}
          numberType={meta.numberType}
        />
        <ZonesInfoTable data={zones} columnType={columnType} numberType={meta.numberType} />
        <Button className={styles.detailedBtn}>
          <span className={styles.btnText}>Detailed View</span>
          <ArrowRight />
        </Button>
      </Card>
    </div>
  );
}

export default HomePage;
