import { useMemo } from 'react';

import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import { TableHeader } from './TableHeader/TableHeader';
import { SORTING_COLUMN_KEYS } from './TableHeader/Types';
import { TableRow } from './TableRow/TableRow';
import { usePeersTable } from './usePeersTable';
import { useSelectedColumn } from './useSelectedColumn';
import { useZoneDetails } from './useZoneDetails';
import styles from './ZonePeers.module.scss';

export function ZonePeers() {
  const [selectedPeriod] = useSelectedPeriod();
  const [selectedColumnKey, setSelectedColumnKey] = useSelectedColumn();

  const sortingColumnKey = useMemo(
    () => SORTING_COLUMN_KEYS[selectedColumnKey],
    [selectedColumnKey]
  );

  const { data } = usePeersTable(selectedPeriod, sortingColumnKey);
  const { data: parentZoneData } = useZoneDetails();

  return (
    <div>
      <table className={styles.tableContainer}>
        <TableHeader
          selectedColumnKey={selectedColumnKey}
          setSelectedColumnKey={setSelectedColumnKey}
        />

        <tbody>
          {data.map((zone) => (
            <TableRow
              key={`zone_${zone.zoneCounterpartyKey}`}
              parentZone={parentZoneData}
              zone={zone}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
