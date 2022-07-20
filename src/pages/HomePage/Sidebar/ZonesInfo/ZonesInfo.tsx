import { useState } from 'react';

import cn from 'classnames';

import {
  Button,
  Dropdown,
  PeriodSelector,
  ScrollableContainer,
  Search,
  SkeletonTextWrapper,
} from 'components';
import { DropdownOption } from 'components/ui/Dropdown/DropdownOption';
import { useDefaultSearchParam } from 'hooks/useDefaultSearchParam';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { ArrowRight } from 'icons';
import { ColumnKeys } from 'pages/HomePage/Types';

import { TotalInfoCard } from './TotalInfoCard/TotalInfoCard';
import { COLUMN_OPTIONS, METADATA } from './Types';
import { useTotalZonesInfo } from './useTotalZonesInfo';
import { useZonesTableData } from './useZonesTableData';
import styles from './ZonesInfo.module.scss';
import { MemoizedZonesInfoTable } from './ZonesInfoTable/ZonesInfoTable';
import { ZonesInfoTableSkeleton } from './ZonesInfoTable/ZonesInfoTableSkeleton';

function ZonesInfo(): JSX.Element {
  const [selectedPeriod] = useSelectedPeriod();
  const [selectedColumnKey, setSelectedColumnKey] = useDefaultSearchParam<ColumnKeys>(
    'columnKey',
    ColumnKeys.IbcVolume
  );
  const [searchValue, setSearchValue] = useState('');
  const [searchExpanded, setSearchExpanded] = useState(false);

  const metadata = METADATA[selectedColumnKey];

  const { data: totalInfo, loading: totalInfoLoading } = useTotalZonesInfo(
    selectedPeriod,
    selectedColumnKey
  );
  const { data: zones, loading: tableDataLoading } = useZonesTableData(
    selectedPeriod,
    selectedColumnKey,
    metadata.sortingColumnKey
  );

  const onColumnChange = (option: DropdownOption) => {
    setSelectedColumnKey(option.key as ColumnKeys);
  };

  const onSearchChange = (value: string) => {
    setSearchValue(value);
  };

  return (
    <div className={styles.container}>
      <div className={cn(styles.zoneCountSearchContainer, { [styles.expanded]: searchExpanded })}>
        <span className={styles.zonesCountInfo}>
          <SkeletonTextWrapper loading={tableDataLoading} defaultText={'00'}>
            {zones?.length}
          </SkeletonTextWrapper>
          {' Zones'}
        </span>

        <Search
          className={styles.search}
          onSearchChange={onSearchChange}
          onFocus={() => setSearchExpanded(true)}
          onBlur={() => setSearchExpanded(false)}
        />
      </div>
      <div className={styles.selectorsContainer}>
        <Dropdown
          className={styles.columnDropdown}
          options={COLUMN_OPTIONS}
          initialSelectedKey={selectedColumnKey}
          onOptionSelected={onColumnChange}
        />
        <PeriodSelector />
      </div>
      <ScrollableContainer className={styles.scrollableTable}>
        <TotalInfoCard
          loading={totalInfoLoading}
          className={styles.totalInfo}
          totalInfo={totalInfo}
          columnType={selectedColumnKey}
        />
        {!tableDataLoading && (
          <MemoizedZonesInfoTable
            data={zones}
            searchValue={searchValue}
            columnType={selectedColumnKey}
          />
        )}
        {tableDataLoading && <ZonesInfoTableSkeleton />}
      </ScrollableContainer>
      <div className={styles.shadow}></div>
      <Button className={styles.detailedBtn}>
        <span className={styles.btnText}>Detailed View</span>
        <ArrowRight />
      </Button>
    </div>
  );
}

export { ZonesInfo };
