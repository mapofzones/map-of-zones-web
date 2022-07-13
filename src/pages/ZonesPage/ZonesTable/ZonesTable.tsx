import { PeriodSelector } from 'components';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import { TableHeader } from './TableHeader/TableHeader';
import { TableRow } from './TableRow/TableRow';
import { useSelectedColumn } from './useSelectedColumn';
import { useZonesCount } from './useZonesCount';
import { useZonesTable } from './useZonesTable';
import styles from './ZonesTable.module.scss';

export function ZonesTable() {
  const [selectedPeriod] = useSelectedPeriod();
  const [selectedColumnKey, setSelectedColumnKey] = useSelectedColumn();

  const { data: zonesCountData } = useZonesCount(selectedPeriod);
  const { data } = useZonesTable(selectedPeriod);

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

      <table className={styles.tableContainer}>
        <TableHeader
          selectedColumnKey={selectedColumnKey}
          setSelectedColumnKey={setSelectedColumnKey}
        />

        <tbody>
          {data.map((zone, index) => (
            <TableRow key={`zone_${zone.zone}`} index={index} zone={zone} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
