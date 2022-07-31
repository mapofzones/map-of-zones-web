import { PeriodSelector, Table } from 'components';
import { useDefaultSearchParam } from 'hooks/useDefaultSearchParam';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import { TableRow } from './TableRow/TableRow';
import { ColumnKeys, SORTING_COLUMN_KEYS, TABLE_HEADER_CONFIG } from './Types';
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
  const { data } = useZonesTable(selectedPeriod, sortingColumnKey);

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
        headerConfig={TABLE_HEADER_CONFIG}
        selectedColumnKey={selectedColumnKey}
        setSelectedColumnKey={setSelectedColumnKey}
      >
        {data.map((zone, index) => (
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
