import { PeriodSelector, Table } from 'components';
import { useDefaultSearchParam } from 'hooks/useDefaultSearchParam';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { useSortedTableData } from 'hooks/useSortedTableData';

import { TableRow } from './TableRow/TableRow';
import { ColumnKeys, getTableHeaderConfigByPeriod, SORTING_COLUMN_KEYS } from './Types';
import { useZonesCount } from './useZonesCount';
import { useZonesTable } from './useZonesTable';
import styles from './ZonesTable.module.scss';

export function ZonesTable() {
  const [selectedPeriod] = useSelectedPeriod();

  const [selectedColumnKey, setSelectedColumnKey] = useDefaultSearchParam<ColumnKeys>(
    'columnKey',
    ColumnKeys.IbcVolume
  );

  const sortingColumnKey = SORTING_COLUMN_KEYS[selectedColumnKey];

  const { data: zonesCountData } = useZonesCount(selectedPeriod);
  const { data } = useZonesTable(selectedPeriod);

  const sortedZones = useSortedTableData(data, sortingColumnKey, 'asc');

  const tableHeaderConfig = getTableHeaderConfigByPeriod(selectedPeriod);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {!!zonesCountData?.allZonesCount && (
          <div>
            <span className={styles.header_title}>{zonesCountData?.allZonesCount} Zones</span>
            <span className={styles.header_subtitle}>
              {zonesCountData?.activeZonesCount} Active ({selectedPeriod})
            </span>
          </div>
        )}

        <PeriodSelector />
      </div>

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
          />
        ))}
      </Table>
    </div>
  );
}
