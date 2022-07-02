import { useMemo } from 'react';

import { useQuery } from '@apollo/client';

import { Button, NumberType } from 'components';
import { Zones_Stats_Select_Column } from 'graphql/base-types';
import { TotalZonesInfoDocument } from 'graphql/HomePage/__generated__/TotalZonesInfo.generated';
import { ZonesTableDataDocument } from 'graphql/HomePage/__generated__/ZonesTableData.generated';
import { ArrowRight } from 'icons';
import { TotalInfoCard } from 'pages/HomePage/TotalInfoCard/TotalInfoCard';
import { ColumnKeys } from 'pages/HomePage/Types';
import { ZonesInfoTable } from 'pages/HomePage/ZonesInfoTable/ZonesInfoTable';

import { PeriodKeys, PERIODS } from './Types';
import { useSelectedColumn } from './useSelectedColumn';
import { useSelectedPeriod } from './useSelectedPeriod';
import styles from './ZonesInfo.module.scss';

const metadata: Record<
  ColumnKeys,
  { title: string; numberType: NumberType; sortingColumnKey: Zones_Stats_Select_Column }
> = {
  ibcVolume: {
    title: 'IBC Volume',
    numberType: NumberType.Currency,
    sortingColumnKey: Zones_Stats_Select_Column.IbcCashflowRating,
  },
  ibcTransfers: {
    title: 'IBC Transfers',
    numberType: NumberType.Currency,
    sortingColumnKey: Zones_Stats_Select_Column.TotalTxsRating,
  },
  totalTxs: {
    title: 'Total TXS',
    numberType: NumberType.Currency,
    sortingColumnKey: Zones_Stats_Select_Column.TotalTxsRating,
  },
};

function ZonesInfo() {
  const [selectedPeriod, setSelectedPeriod] = useSelectedPeriod();
  const [selectedColumnKey, setSelectedColumnKey] = useSelectedColumn();

  const meta = useMemo(() => metadata[selectedColumnKey], [selectedColumnKey]);

  const { data: totalInfo } = useQuery(TotalZonesInfoDocument, {
    variables: {
      period: PERIODS[selectedPeriod],
      isMainnet: true,
      withVolume: selectedColumnKey === ColumnKeys.IbcVolume,
      withTransfers: selectedColumnKey === ColumnKeys.IbcTransfers,
    },
  });
  const { data: zones } = useQuery(ZonesTableDataDocument, {
    variables: {
      period: PERIODS[selectedPeriod],
      isMainnet: true,
      orderBy: {
        [meta.sortingColumnKey]: 'asc',
      },
      withVolume: selectedColumnKey === ColumnKeys.IbcVolume,
      withTransfers: selectedColumnKey === ColumnKeys.IbcTransfers,
      withTotalTxs: selectedColumnKey === ColumnKeys.TotalTxs,
    },
  });

  const onColumnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as ColumnKeys;
    setSelectedColumnKey(value);
  };

  const onPeriodChange = (period: PeriodKeys) => {
    setSelectedPeriod(period);
  };

  return (
    <div className={styles.container}>
      <div className={styles.blockRow}>
        <span>{zones?.zonesTable?.length} Zones</span>
        <div>Search</div>
      </div>
      <div className={styles.blockRow}>
        <select value={selectedColumnKey} onChange={onColumnChange}>
          <option value={ColumnKeys.IbcVolume}>{metadata[ColumnKeys.IbcVolume].title}</option>
          <option value={ColumnKeys.IbcTransfers}>{metadata[ColumnKeys.IbcTransfers].title}</option>
          <option value={ColumnKeys.TotalTxs}>{metadata[ColumnKeys.TotalTxs].title}</option>
        </select>
        <div className={styles.periodSelector}>
          <Button onClick={() => onPeriodChange(PeriodKeys.DAY)}>24h</Button>
          <Button onClick={() => onPeriodChange(PeriodKeys.WEEK)}>7d</Button>
          <Button onClick={() => onPeriodChange(PeriodKeys.MONTH)}>30d</Button>
        </div>
      </div>
      <div className={styles.scrollableTable}>
        <TotalInfoCard
          totalInfo={totalInfo?.headers[0]}
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
