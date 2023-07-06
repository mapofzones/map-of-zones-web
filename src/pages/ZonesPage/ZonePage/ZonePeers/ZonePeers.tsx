import { useCallback, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { Table, TableSkeleton, PeriodSelector } from 'components';
import { useDefaultSearchParam } from 'hooks/useDefaultSearchParam';
import { useTabletSmallMediaQuery } from 'hooks/useMediaQuery';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { SortRow } from 'hooks/useSortedTableData';
import { ScrollUpButton } from 'ui';

import { TableRow } from './TableRow/TableRow';
import { ZoneData } from './TableRow/TableRow.props';
import { ColumnKeys, getTableHeaderConfig, SORTING_COLUMN_KEYS } from './Types';
import { usePeersTable } from './usePeersTable';
import styles from './ZonePeers.module.scss';
import { useZonesListZoneDetails } from '../useZonesListZoneDetails';

export function ZonePeers() {
  const [selectedPeriod] = useSelectedPeriod();
  const isTabletSmall = useTabletSmallMediaQuery();

  const { zone = '' } = useParams();
  const [selectedColumnKey, setSelectedColumnKey] = useDefaultSearchParam<ColumnKeys>(
    'columnKey',
    ColumnKeys.IbcVolumeReceived
  );

  const [sortedPeers, setSortedPeers] = useState<ZoneData[]>([]);

  const { data: peers, loading: peersLoading } = usePeersTable(selectedPeriod);
  const { data: parentZoneData, loading: parentZoneDataLoading } = useZonesListZoneDetails(zone);

  useEffect(() => {
    const sortedColumn = SORTING_COLUMN_KEYS[selectedColumnKey];
    const sortedPeers = peers
      ?.map((peer) => {
        const sortedChannels = peer.channels
          .slice()
          .sort((a, b) => SortRow(a, b, sortedColumn, 'desc'));
        return {
          ...peer,
          channels: sortedChannels,
        };
      })
      .slice()
      .sort((a, b) => SortRow(a, b, sortedColumn, 'desc'));
    setSortedPeers(sortedPeers);
  }, [selectedColumnKey, peers]);

  const headerConfig = getTableHeaderConfig(parentZoneData);

  const onSelectedColumnKey = useCallback(
    (value: string) => {
      return setSelectedColumnKey(value as ColumnKeys);
    },
    [setSelectedColumnKey]
  );

  return (
    <div className={styles.container}>
      <PeriodSelector className={styles.periodContainer} useDropdown={isTabletSmall} />

      {!!parentZoneData && !parentZoneDataLoading && !peersLoading && (
        <Table
          className={styles.table}
          headerMetadata={headerConfig}
          selectedColumnKey={selectedColumnKey}
          setSelectedColumnKey={onSelectedColumnKey}
        >
          {sortedPeers.map((zone) => (
            <TableRow
              key={`zone_${zone.zoneCounterpartyKey}`}
              parentZone={parentZoneData}
              zone={zone}
            />
          ))}
        </Table>
      )}

      {(parentZoneDataLoading || peersLoading) && <TableSkeleton forPeers={true} />}

      <ScrollUpButton />
    </div>
  );
}
