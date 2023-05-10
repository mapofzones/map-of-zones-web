import { useMemo } from 'react';

import { PeriodSelector } from 'components';
import { useDefaultSearchParam } from 'hooks/useDefaultSearchParam';
import { useNavigateWithSearchParams } from 'hooks/useNavigateWithSearchParams';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { useSortedTableData } from 'hooks/useSortedTableData';
import { ColumnKeys } from 'pages/HomePage/Types';
import { zonesPath } from 'routing';
import { ElementSize } from 'types/ElementSize';
import { Dropdown, DropdownOption, ScrollableContainer } from 'ui';

import { TotalInfoCard } from './TotalInfoCard/TotalInfoCard';
import { getColumnOptions, METADATA } from './Types';
import { useTotalZonesInfo } from './useTotalZonesInfo';
import { useZonesTableData } from './useZonesTableData';
import styles from './ZonesInfo.module.scss';
import { MemoizedZonesInfoTable } from './ZonesInfoTable/ZonesInfoTable';
import { ZonesInfoTableSkeleton } from './ZonesInfoTable/ZonesInfoTableSkeleton/ZonesInfoTableSkeleton';
import { ZonesInfoTitle } from './ZonesInfoTitle/ZonesInfoTitle';
import { ZoneTitleSearchProvider } from './ZoneTitleSearchProvider';
import { ShowDetailsButton } from '../ShowDetailsButton';

const showTotalInfo = false;

function ZonesInfo(): JSX.Element {
  const navigateWithSearchParams = useNavigateWithSearchParams();

  const [selectedPeriod] = useSelectedPeriod();
  const [selectedColumnKey, setSelectedColumnKey] = useDefaultSearchParam<ColumnKeys>(
    'columnKey',
    ColumnKeys.IbcVolume
  );

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

  const onDetailedBtnClick = () => {
    navigateWithSearchParams(`/${zonesPath}`);
  };

  return (
    <ZoneTitleSearchProvider>
      <div className={styles.container}>
        <ZonesInfoTitle zonesCount={zones?.length} loading={tableDataLoading} />
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
            <MemoizedZonesInfoTable data={sortedZones} columnType={selectedColumnKey} />
          )}
        </ScrollableContainer>
        <div className={styles.shadow}></div>

        <ShowDetailsButton title="Explore All Zones" onClick={onDetailedBtnClick} />
      </div>
    </ZoneTitleSearchProvider>
  );
}

export { ZonesInfo };
