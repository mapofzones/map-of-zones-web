import cn from 'classnames';

import { PeriodSelector, SkeletonRectangle, Table, TableSkeleton } from 'components';
import { useDefaultSearchParam } from 'hooks/useDefaultSearchParam';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { useSortedTableData } from 'hooks/useSortedTableData';

import { TableRow } from './TableRow/TableRow';
import { ColumnKeys, getTableHeaderConfigByPeriod, SORTING_COLUMN_KEYS } from './Types';
import { useZonesCount } from './useZonesCount';
import { useZonesTable } from './useZonesTable';
import styles from './ZonesTable.module.scss';

export function ZonesTable() {
  const isTabletSmall = useMediaQuery('(max-width: 630px)');

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
          <div className={styles.titleContainer}>
            <span className={styles.title}>{zonesCountData?.allZonesCount} Zones</span>
            <span className={styles.subtitle}>
              {zonesCountData?.activeZonesCount} Active ({selectedPeriod})
            </span>
          </div>
        )}

        {!zonesCountData?.allZonesCount && (
          <div className={styles.titleContainer}>
            <SkeletonRectangle className={cn(styles.title, styles.skeleton)} />
          </div>
        )}

        <PeriodSelector useDropdown={isTabletSmall} />
      </div>

      {!!sortedZones.length && (
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
      )}

      {!sortedZones.length && <TableSkeleton />}
    </div>
  );
}
