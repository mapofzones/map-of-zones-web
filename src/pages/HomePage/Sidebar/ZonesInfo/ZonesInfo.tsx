import { useMemo } from 'react';

import { Dropdown, PeriodSelector, ScrollableContainer } from 'components';
import { DropdownOption } from 'components/ui/Dropdown/DropdownOption';
import { useDefaultSearchParam } from 'hooks/useDefaultSearchParam';
import { useNavigateWithSearchParams } from 'hooks/useNavigateWithSearchParams';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { useSortedTableData } from 'hooks/useSortedTableData';
import { ColumnKeys } from 'pages/HomePage/Types';
import { zonesPath } from 'routing';
import { ElementSize } from 'types/ElementSize';

import { TotalInfoCard } from './TotalInfoCard/TotalInfoCard';
import { getColumnOptions, METADATA } from './Types';
import { useTotalZonesInfo } from './useTotalZonesInfo';
import { useZonesTableData } from './useZonesTableData';
import styles from './ZonesInfo.module.scss';
import { MemoizedZonesInfoTable } from './ZonesInfoTable/ZonesInfoTable';
import { ZonesInfoTableSkeleton } from './ZonesInfoTable/ZonesInfoTableSkeleton/ZonesInfoTableSkeleton';
import { ZonesInfoTitle } from './ZonesInfoTitle/ZonesInfoTitle';
import { LearnMoreButton } from '../LearnMoreButton';

const showTotalInfo = false;

function ZonesInfo(): JSX.Element {
  const navigateWithSearchParams = useNavigateWithSearchParams();

  const [selectedPeriod] = useSelectedPeriod();
  const [selectedColumnKey, setSelectedColumnKey] = useDefaultSearchParam<ColumnKeys>(
    'columnKey',
    ColumnKeys.IbcVolume
  );

  const [searchValue, setSearchValue] = useDefaultSearchParam('searchZone');

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
    navigateWithSearchParams(`/${zonesPath}`);
  };

  return (
    <div className={styles.container}>
      <ZonesInfoTitle
        zonesCount={zones?.length}
        searchValue={searchValue}
        loading={tableDataLoading}
        onSearchChange={onSearchChange}
      />
      <div className={styles.selectorsContainer}>
        <Dropdown
          className={styles.columnDropdown}
          options={columnOptions}
          initialSelectedKey={selectedColumnKey}
          onOptionSelected={onColumnChange}
          size={ElementSize.LARGE}
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
        {tableDataLoading && <ZonesInfoTableSkeleton />}
        {!tableDataLoading && (
          <MemoizedZonesInfoTable
            data={sortedZones}
            searchValue={searchValue}
            columnType={selectedColumnKey}
          />
        )}
      </ScrollableContainer>
      <div className={styles.shadow}></div>

      <LearnMoreButton onClick={onDetailedBtnClick} />
    </div>
  );
}

export { ZonesInfo };
