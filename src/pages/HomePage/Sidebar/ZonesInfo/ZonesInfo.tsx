import { useMemo } from 'react';

import { Button, Dropdown, NumberType, PeriodSelector } from 'components';
import { DropdownOption } from 'components/Dropdown/DropdownOption';
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
  {
    key: ColumnKeys;
    title: string;
    numberType: NumberType;
    sortingColumnKey: Zones_Stats_Select_Column;
  }
> = {
  [ColumnKeys.IbcVolume]: {
    key: ColumnKeys.IbcVolume,
    title: 'IBC Volume',
    numberType: NumberType.Currency,
    sortingColumnKey: Zones_Stats_Select_Column.IbcCashflowMainnetRating,
  },
  [ColumnKeys.IbcTransfers]: {
    key: ColumnKeys.IbcTransfers,
    title: 'IBC Transfers',
    numberType: NumberType.Number,
    sortingColumnKey: Zones_Stats_Select_Column.IbcTransfersMainnetRating,
  },
  [ColumnKeys.TotalTxs]: {
    key: ColumnKeys.TotalTxs,
    title: 'Total TXS',
    numberType: NumberType.Number,
    sortingColumnKey: Zones_Stats_Select_Column.TotalTxsMainnetRating,
  },
};

const dropdownOptions = [
  {
    key: ColumnKeys.IbcVolume,
    title: 'IBC Volume',
  },
  {
    key: ColumnKeys.IbcTransfers,
    title: 'IBC Transfers',
  },
  {
    key: ColumnKeys.TotalTxs,
    title: 'Total TXS',
  },
]

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

  const keyExtractor = (option: ) => option.key;

  const onColumnChange = (option: ColumnKeys) => {
    setSelectedColumnKey(option);
  };

  return (
    <div className={styles.container}>
      <div className={styles.blockRow}>
        <span>{zones?.length} Zones</span>
        <div>Search</div>
      </div>
      <div className={styles.blockRow}>
        <Dropdown
          className={styles.columnDropdown}
          options={Object.values(metadata).map((data) => ({ key: data.key, title: data.title }))}
          initialSelectedKey={selectedColumnKey}
          keyExtractor={keyExtractor}
          titleExtractor={(option) => option?.title}
          onOptionSelected={onColumnChange}
        />
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
