import { Button, ScrollableContainer } from 'components';
import { ArrowRight } from 'icons';

import { useZoneDetails } from '../useZoneDetails';
import { useZonePeers } from './useZonePeers';
import styles from './ZonePeers.module.scss';
import { ZonePeersSkeleton } from './ZonePeersSkeleton';
import { MemoizedZonePeersTable } from './ZonePeersTable/ZonePeersTable';

export function ZonePeers() {
  const { data: peers, loading: peersLoading } = useZonePeers();

  const { data: zoneDetails, loading: zoneDetailsLoading } = useZoneDetails();

  const loading = peersLoading || zoneDetailsLoading;

  return (
    <>
      <ScrollableContainer className={styles.container}>
        {loading && <ZonePeersSkeleton />}
        {!loading && <MemoizedZonePeersTable peers={peers} zoneDetails={zoneDetails} />}
      </ScrollableContainer>

      <Button className={styles.detailedBtn}>
        <span className={styles.btnText}>Learn More</span>
        <ArrowRight />
      </Button>
    </>
  );
}
