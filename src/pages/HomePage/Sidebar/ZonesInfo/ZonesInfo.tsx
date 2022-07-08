import { useMemo, useState } from 'react';

import { Button, Dropdown, PeriodSelector, Search } from 'components';
import { DropdownOption } from 'components/Dropdown/DropdownOption';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { ArrowRight } from 'icons';
import { ColumnKeys } from 'pages/HomePage/Types';

import { TotalInfoCard } from './TotalInfoCard/TotalInfoCard';
import { COLUMN_OPTIONS, METADATA } from './Types';
import { useSelectedColumn } from './useSelectedColumn';
import { useTotalZonesInfo } from './useTotalZonesInfo';
import { useZonesTableData } from './useZonesTableData';
import styles from './ZonesInfo.module.scss';
import { ZonesInfoTable } from './ZonesInfoTable/ZonesInfoTable';

function ZonesInfo(): JSX.Element {
  const [selectedPeriod] = useSelectedPeriod();
  const [selectedColumnKey, setSelectedColumnKey] = useSelectedColumn();
  const [searchValue, setSearchValue] = useState('');

  const metadata = useMemo(() => METADATA[selectedColumnKey], [selectedColumnKey]);

  const { data: totalInfo } = useTotalZonesInfo(selectedPeriod, selectedColumnKey);
  const { data: zones } = useZonesTableData(
    selectedPeriod,
    selectedColumnKey,
    metadata.sortingColumnKey
  );

  const filteredZones = useMemo(
    () =>
      searchValue
        ? zones.filter((zone) => zone.name.toLowerCase().includes(searchValue.toLowerCase()))
        : zones,
    [zones, searchValue]
  );

  const onColumnChange = (option: DropdownOption) => {
    setSelectedColumnKey(option.key as ColumnKeys);
  };

  const onSearchChange = (value: string) => {
    setSearchValue(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.blockRow}>
        <span>{zones?.length} Zones</span>
        <Search
          className={styles.search}
          initialValue={searchValue}
          onSearchChange={onSearchChange}
        />
      </div>
      <div className={styles.blockRow}>
        <Dropdown
          className={styles.columnDropdown}
          options={COLUMN_OPTIONS}
          initialSelectedKey={selectedColumnKey}
          onOptionSelected={onColumnChange}
        />
        <PeriodSelector />
      </div>
      <div className={styles.scrollableTable}>
        <TotalInfoCard
          className={styles.totalInfo}
          totalInfo={totalInfo}
          columnType={selectedColumnKey}
          numberType={metadata.numberType}
        />
        <ZonesInfoTable
          data={filteredZones}
          columnType={selectedColumnKey}
          numberType={metadata.numberType}
        />
      </div>
      <Button className={styles.detailedBtn}>
        <span className={styles.btnText}>Detailed View</span>
        <ArrowRight />
      </Button>
    </div>
  );
}

export { ZonesInfo };
