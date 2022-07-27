import { ScrollUpButton } from 'components';
import { useDefaultSearchParam } from 'hooks/useDefaultSearchParam';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import { useZoneDetails } from '../useZoneDetails';
import { TableHeader } from './TableHeader/TableHeader';
import { ColumnKeys } from './TableHeader/Types';
import { TableRow } from './TableRow/TableRow';
import { usePeersTable } from './usePeersTable';
import styles from './ZonePeers.module.scss';

export function ZonePeers() {
  const [selectedPeriod] = useSelectedPeriod();

  const [selectedColumnKey, setSelectedColumnKey] = useDefaultSearchParam<ColumnKeys>(
    'columnKey',
    ColumnKeys.IbcVolumeReceived
  );

  const { data } = usePeersTable(selectedPeriod, selectedColumnKey);
  const { data: parentZoneData } = useZoneDetails();

  if (!parentZoneData) {
    return <></>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.tableContainer}>
        <table>
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

      <ScrollUpButton />
    </div>
  );
}
