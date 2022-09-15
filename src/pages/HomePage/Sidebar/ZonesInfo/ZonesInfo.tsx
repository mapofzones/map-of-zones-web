import { useMemo, useState } from 'react';

import { Button, Dropdown, PeriodSelector, ScrollableContainer } from 'components';
import { ButtonType } from 'components/ui/Button/Button.props';
import { DropdownOption } from 'components/ui/Dropdown/DropdownOption';
import { useDefaultSearchParam } from 'hooks/useDefaultSearchParam';
import { useNavigateWithSearchParams } from 'hooks/useNavigateWithSearchParams';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { useSortedTableData } from 'hooks/useSortedTableData';
import { ArrowRight } from 'icons';
import { ColumnKeys } from 'pages/HomePage/Types';
import { ElementSize } from 'types/ElementSize';

import { TotalInfoCard } from './TotalInfoCard/TotalInfoCard';
import { getColumnOptions, METADATA } from './Types';
import { useTotalZonesInfo } from './useTotalZonesInfo';
import { useZonesTableData } from './useZonesTableData';
import styles from './ZonesInfo.module.scss';
import { MemoizedZonesInfoTable } from './ZonesInfoTable/ZonesInfoTable';
import { ZonesInfoTableSkeleton } from './ZonesInfoTable/ZonesInfoTableSkeleton';
import { ZonesInfoTitle } from './ZonesInfoTitle/ZonesInfoTitle';

const showTotalInfo = false;

function ZonesInfo(): JSX.Element {
  const navigateWithSearchParams = useNavigateWithSearchParams();

  const [selectedPeriod] = useSelectedPeriod();
  const [selectedColumnKey, setSelectedColumnKey] = useDefaultSearchParam<ColumnKeys>(
    'columnKey',
    ColumnKeys.IbcVolume
  );

  const [searchValue, setSearchValue] = useState('');

  const metadata = METADATA[selectedColumnKey];

  const { data: totalInfo, loading: totalInfoLoading } = useTotalZonesInfo(
    selectedPeriod,
    selectedColumnKey,
    !showTotalInfo
  );
  const { data: zones, loading: tableDataLoading } = useZonesTableData(
    selectedPeriod,
    selectedColumnKey
  );

  const sortedZones = useSortedTableData(zones, metadata.sortingColumnKey, 'asc');

  const columnOptions = useMemo(() => getColumnOptions(selectedPeriod), [selectedPeriod]);

  const onColumnChange = (option: DropdownOption) => {
    setSelectedColumnKey(option.key as ColumnKeys);
  };

  const onSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const onDetailedBtnClick = () => {
    navigateWithSearchParams('/zones');
  };

  return (
    <div className={styles.container}>
      <ZonesInfoTitle
        zonesCount={zones?.length}
        loading={tableDataLoading}
        onSearchChange={onSearchChange}
      />
      <div className={styles.selectorsContainer}>
        <Dropdown
          className={styles.columnDropdown}
          options={columnOptions}
          initialSelectedKey={selectedColumnKey}
          onOptionSelected={onColumnChange}
        />
        <PeriodSelector />
      </div>
      <ScrollableContainer className={styles.scrollableTable}>
        {!!showTotalInfo && (
          <TotalInfoCard
            loading={totalInfoLoading}
            className={styles.totalInfo}
            totalInfo={totalInfo}
            columnType={selectedColumnKey}
          />
        )}
        {!tableDataLoading && (
          <MemoizedZonesInfoTable
            data={sortedZones}
            searchValue={searchValue}
            columnType={selectedColumnKey}
          />
        )}
        {tableDataLoading && <ZonesInfoTableSkeleton />}
      </ScrollableContainer>
      <div className={styles.shadow}></div>
      <Button
        className={styles.detailedBtn}
        onClick={onDetailedBtnClick}
        size={ElementSize.LARGE}
        buttonType={ButtonType.SECONDARY}
      >
        <span className={styles.btnText}>Learn More</span>
        <ArrowRight />
      </Button>
    </div>
  );
}

export { ZonesInfo };
