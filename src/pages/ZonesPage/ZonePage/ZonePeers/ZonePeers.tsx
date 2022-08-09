import { ScrollUpButton, Table } from 'components';
import { useDefaultSearchParam } from 'hooks/useDefaultSearchParam';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import { useZonesListZoneDetails } from '../useZonesListZoneDetails';
import { TableRow } from './TableRow/TableRow';
import { ColumnKeys, getTableHeaderConfig } from './Types';
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

  const headerConfig = getTableHeaderConfig(parentZoneData);

  return (
    <div className={styles.container}>
      <Table
        className={styles.table}
        headerConfig={headerConfig}
        selectedColumnKey={selectedColumnKey}
        setSelectedColumnKey={setSelectedColumnKey}
      >
        {data.map((zone) => (
          <TableRow
            key={`zone_${zone.zoneCounterpartyKey}`}
            parentZone={parentZoneData}
            zone={zone}
          />
        ))}
      </Table>

      <ScrollUpButton />
    </div>
  );
}
