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
    sortingColumnKey: 'ibc_cashflow_rating',
  },
  IBC_TRANSFERS: {
    title: 'IBC Transfers',
    numberType: 'number',
    sortingColumnKey: 'ibc_transfers_rating',
  },
  TOTAL_TXS: {
    title: 'Total TXS',
    numberType: 'number',
    sortingColumnKey: 'total_txs_rating',
  },
};

function HomePage() {
  const [columnType, setColumnType] = useState<ColumnKeys>(ColumnKeys.IbcVolume);
  const [selectedPeriod, setSelectedPeriod] = useState<number>(24);

  const meta = useMemo(() => metadata[columnType], [columnType]);

  const { data: totalInfo } = useQuery(TotalZonesInfoDocument, {
    variables: {
      period: selectedPeriod,
      isMainnet: true,
      withVolume: columnType === ColumnKeys.IbcVolume,
      withTransfers: columnType === ColumnKeys.IbcTransfers,
    },
  });
  const { data: zones } = useQuery(ZonesTableDataDocument, {
    variables: {
      period: selectedPeriod,
      isMainnet: true,
      orderBy: {
        [meta.sortingColumnKey]: 'asc',
      },
      withVolume: columnType === ColumnKeys.IbcVolume,
      withTransfers: columnType === ColumnKeys.IbcTransfers,
      withTotalTxs: columnType === ColumnKeys.TotalTxs,
    },
  });

  const onColumnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as ColumnKeys;
    setColumnType(value);
  };

  const onPeriodChange = (periodInHours: number) => {
    setSelectedPeriod(periodInHours);
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
          <div className={styles.periodSelector}>
            <Button onClick={() => onPeriodChange(24)}>24h</Button>
            <Button onClick={() => onPeriodChange(24 * 7)}>7d</Button>
            <Button onClick={() => onPeriodChange(24 * 30)}>30d</Button>
          </div>
        </div>
        <div className={styles.scrollableTable}>
          <TotalInfoCard
            totalInfo={totalInfo?.headers[0]}
            columnType={columnType}
            numberType={meta.numberType}
          />
          <ZonesInfoTable data={zones} columnType={columnType} numberType={meta.numberType} />
        </div>
        <Button className={styles.detailedBtn}>
          <span className={styles.btnText}>Detailed View</span>
          <ArrowRight />
        </Button>
      </Card>
    </div>
  );
}

export default HomePage;
