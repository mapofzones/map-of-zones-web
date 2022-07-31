import { ScrollUpButton, TableHeader } from 'components';
import { useDefaultSearchParam } from 'hooks/useDefaultSearchParam';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import { useZonesListZoneDetails } from '../useZonesListZoneDetails';
import { TableRow } from './TableRow/TableRow';
import { ColumnKeys, TABLE_HEADER_CONFIG } from './Types';
import { usePeersTable } from './usePeersTable';
import styles from './ZonePeers.module.scss';

export function ZonePeers() {
  const [selectedPeriod] = useSelectedPeriod();

  const [selectedColumnKey, setSelectedColumnKey] = useDefaultSearchParam<ColumnKeys>(
    'columnKey',
    ColumnKeys.IbcVolumeReceived
  );

  const { data } = usePeersTable(selectedPeriod, selectedColumnKey);
  const { data: parentZoneData } = useZonesListZoneDetails();

  if (!parentZoneData) {
    return <></>;
  }

  return (
    <div className={styles.container}>
      <table className={styles.tableContainer}>
        <TableHeader
          className={styles.tableHeader}
          config={TABLE_HEADER_CONFIG}
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

      <ScrollUpButton />
    </div>
  );
}
