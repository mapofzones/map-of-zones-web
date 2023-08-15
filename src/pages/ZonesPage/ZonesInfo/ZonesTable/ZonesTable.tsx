import { useCallback, useMemo } from 'react';

import { Table, TableSkeleton } from 'components';
import { useDefaultSearchParam } from 'hooks/useDefaultSearchParam';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { useSortedTableData } from 'hooks/useSortedTableData';

import { TableRow } from './TableRow/TableRow';
import { ColumnKeys, getTableHeaderConfigByPeriod, SORTING_COLUMN_KEYS } from './Types';
import { useZonesTable } from './useZonesTable';
import styles from './ZonesTable.module.scss';

export function ZonesTable() {
  const [selectedPeriod] = useSelectedPeriod(undefined);

  const [selectedColumnKey, setSelectedColumnKey] = useDefaultSearchParam<ColumnKeys>(
    'columnKey',
    ColumnKeys.IbcVolume
  );

  const sortingColumnKey = SORTING_COLUMN_KEYS[selectedColumnKey];

  const { data, loading: zonesLoading } = useZonesTable(selectedPeriod);
  const sortedZones = useSortedTableData(data, sortingColumnKey, 'asc');

  const tableHeaderConfig = useMemo(
    () => getTableHeaderConfigByPeriod(selectedPeriod),
    [selectedPeriod]
  );

  const onSelectedColumnKey = useCallback(
    (value: string) => {
      return setSelectedColumnKey(value as ColumnKeys);
    },
    [setSelectedColumnKey]
  );

  const Children = useMemo(() => {
    return sortedZones.map((zone, index) => (
      <TableRow
        key={`zone_${zone.zone}`}
        index={index}
        selectedColumnKey={selectedColumnKey}
        zone={zone}
      />
    ));
  }, [selectedColumnKey, sortedZones]);

  return (
    <div className={styles.container}>
      {!zonesLoading && (
        <Table
          className={styles.table}
          headerMetadata={tableHeaderConfig}
          selectedColumnKey={selectedColumnKey}
          setSelectedColumnKey={onSelectedColumnKey}
        >
          {Children}
        </Table>
      )}

      {zonesLoading && <TableSkeleton />}
    </div>
  );
}
