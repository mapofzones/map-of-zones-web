import { useMemo } from 'react';

import { useDefaultSearchParam } from 'hooks/useDefaultSearchParam';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import { TableHeader } from './TableHeader/TableHeader';
import { ColumnKeys, SORTING_COLUMN_KEYS } from './TableHeader/Types';
import { TableRow } from './TableRow/TableRow';
import { usePeersTable } from './usePeersTable';
import { useZoneDetails } from './useZoneDetails';
import styles from './ZonePeers.module.scss';

export function ZonePeers() {
  const [selectedPeriod] = useSelectedPeriod();

  const [selectedColumnKey, setSelectedColumnKey] = useDefaultSearchParam<ColumnKeys>(
    'columnKey',
    ColumnKeys.IbcVolumeReceived
  );

  const sortingColumnKey = useMemo(
    () => SORTING_COLUMN_KEYS[selectedColumnKey],
    [selectedColumnKey]
  );

  const { data } = usePeersTable(selectedPeriod, sortingColumnKey);
  const { data: parentZoneData } = useZoneDetails();

  if (!parentZoneData) {
    return <></>;
  }

  return (
    <div className={styles.container}>
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
