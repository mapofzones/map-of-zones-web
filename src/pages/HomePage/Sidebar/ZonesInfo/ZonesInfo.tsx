import { useMemo } from 'react';

import { Button, NumberType, PeriodSelector } from 'components';
import { Zones_Stats_Select_Column } from 'graphql/base-types';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { ArrowRight } from 'icons';
import { TotalInfoCard } from 'pages/HomePage/Sidebar/ZonesInfo/TotalInfoCard/TotalInfoCard';
import { ZonesInfoTable } from 'pages/HomePage/Sidebar/ZonesInfo/ZonesInfoTable/ZonesInfoTable';
import { ColumnKeys } from 'pages/HomePage/Types';

import { useSelectedColumn } from './useSelectedColumn';
import { useTotalZonesInfo } from './useTotalZonesInfo';
import { useZonesTableData } from './useZonesTableData';
import styles from './ZonesInfo.module.scss';

const metadata: Record<
  ColumnKeys,
  { title: string; numberType: NumberType; sortingColumnKey: Zones_Stats_Select_Column }
> = {
  ibcVolume: {
    title: 'IBC Volume',
    numberType: NumberType.Currency,
    sortingColumnKey: Zones_Stats_Select_Column.IbcCashflowMainnetRating,
  },
  ibcTransfers: {
    title: 'IBC Transfers',
    numberType: NumberType.Number,
    sortingColumnKey: Zones_Stats_Select_Column.IbcTransfersMainnetRating,
  },
  totalTxs: {
    title: 'Total TXS',
    numberType: NumberType.Number,
    sortingColumnKey: Zones_Stats_Select_Column.TotalTxsMainnetRating,
  },
};

function ZonesInfo(): JSX.Element {
  const [selectedPeriod] = useSelectedPeriod();
  const [selectedColumnKey, setSelectedColumnKey] = useSelectedColumn();

  const meta = useMemo(() => metadata[selectedColumnKey], [selectedColumnKey]);

  const { data: totalInfo } = useTotalZonesInfo(selectedPeriod, selectedColumnKey);
  const { data: zones } = useZonesTableData(
    selectedPeriod,
    selectedColumnKey,
    meta.sortingColumnKey
  );

  const onColumnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as ColumnKeys;
    setSelectedColumnKey(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.blockRow}>
        <span>{zones?.length} Zones</span>
        <div>Search</div>
      </div>
      <div className={styles.blockRow}>
        <select value={selectedColumnKey} onChange={onColumnChange}>
          <option value={ColumnKeys.IbcVolume}>{metadata[ColumnKeys.IbcVolume].title}</option>
          <option value={ColumnKeys.IbcTransfers}>{metadata[ColumnKeys.IbcTransfers].title}</option>
          <option value={ColumnKeys.TotalTxs}>{metadata[ColumnKeys.TotalTxs].title}</option>
        </select>
        <PeriodSelector />
      </div>
      <div className={styles.scrollableTable}>
        <TotalInfoCard
          className={styles.totalInfo}
          totalInfo={totalInfo}
          columnType={selectedColumnKey}
          numberType={meta.numberType}
        />
        <ZonesInfoTable data={zones} columnType={selectedColumnKey} numberType={meta.numberType} />
      </div>
      <Button className={styles.detailedBtn}>
        <span className={styles.btnText}>Detailed View</span>
        <ArrowRight />
      </Button>
    </div>
  );
}

export { ZonesInfo };
