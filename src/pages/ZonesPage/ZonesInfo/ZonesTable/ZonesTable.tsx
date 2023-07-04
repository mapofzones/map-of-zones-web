import { Table, TableSkeleton } from 'components';
import { useDefaultSearchParam } from 'hooks/useDefaultSearchParam';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { useSortedTableData } from 'hooks/useSortedTableData';
import { useAppSelector } from 'store/hooks';
import { useZonesPageComparisonModeActionsCreator } from 'store/ZonesPageComparisonMode.slice';

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

  const tableHeaderConfig = getTableHeaderConfigByPeriod(selectedPeriod);

  const { isComparison, zones } = useAppSelector((state) => state.zonesPageComparisonMode);
  const { addZoneToCompare, removeZoneFromCompare } = useZonesPageComparisonModeActionsCreator();

  console.log(zones.length);

  return (
    <div className={styles.container}>
      {!zonesLoading && (
        <Table
          className={styles.table}
          headerConfig={tableHeaderConfig}
          selectedColumnKey={selectedColumnKey}
          setSelectedColumnKey={setSelectedColumnKey}
        >
          {sortedZones.map((zone, index) => (
            <TableRow
              key={`zone_${zone.zone}`}
              index={index}
              selectedColumnKey={selectedColumnKey}
              zone={zone}
              isCompareMode={isComparison}
              checked={zones.includes(zone.zone)}
              disabledCheckbox={zones.length >= 3 && !zones.includes(zone.zone)}
              onCheckedChange={(value) => {
                if (value) {
                  addZoneToCompare(zone.zone);
                } else {
                  removeZoneFromCompare(zone.zone);
                }
              }}
            />
          ))}
        </Table>
      )}

      {zonesLoading && <TableSkeleton />}
    </div>
  );
}
