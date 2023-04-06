import { useParams } from 'react-router-dom';

import { ScrollableContainer } from 'components';
import { useNavigateWithSearchParams } from 'hooks/useNavigateWithSearchParams';
import { useSortedTableData } from 'hooks/useSortedTableData';
import { getZonesPeersPath } from 'routing';

import { useZonePeers } from './useZonePeers';
import styles from './ZonePeers.module.scss';
import { ZonePeersSkeleton } from './ZonePeersSkeleton';
import { MemoizedZonePeersTable } from './ZonePeersTable/ZonePeersTable';
import { ShowDetailsButton } from '../../ShowDetailsButton';

export function ZonePeers() {
  const navigateWithSearchParams = useNavigateWithSearchParams();

  const { zone } = useParams();

  const { data: peers, loading: peersLoading } = useZonePeers(); // move to ZonePeersTable component
  const sortedPeers = useSortedTableData(peers, 'ibcVolume', 'desc');

  const loading = peersLoading;

  const onDetailedBtnClick = () => {
    navigateWithSearchParams(`/${getZonesPeersPath(zone)}`);
  };

  return (
    <>
      <ScrollableContainer className={styles.container}>
        {loading && <ZonePeersSkeleton />}
        {!loading && <MemoizedZonePeersTable peers={sortedPeers} />}
      </ScrollableContainer>

      <ShowDetailsButton title="Full Zone Info" primary onClick={onDetailedBtnClick} />
    </>
  );
}
