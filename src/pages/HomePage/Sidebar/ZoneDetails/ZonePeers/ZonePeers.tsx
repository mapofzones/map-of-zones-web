import { useParams } from 'react-router-dom';

import { ArrowRight } from 'assets/icons';
import { Button, ScrollableContainer } from 'components';
import { ButtonType } from 'components/ui/Button/Button.props';
import { useNavigateWithSearchParams } from 'hooks/useNavigateWithSearchParams';
import { useSortedTableData } from 'hooks/useSortedTableData';
import { getZonesPeersPath } from 'routing';
import { ElementSize } from 'types/ElementSize';

import { useZonePeers } from './useZonePeers';
import styles from './ZonePeers.module.scss';
import { ZonePeersSkeleton } from './ZonePeersSkeleton';
import { MemoizedZonePeersTable } from './ZonePeersTable/ZonePeersTable';

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

      <Button
        className={styles.detailedBtn}
        onClick={onDetailedBtnClick}
        size={ElementSize.LARGE}
        buttonType={ButtonType.SECONDARY}
      >
        <span className={styles.btnText}>Learn More</span>
        <ArrowRight />
      </Button>
    </>
  );
}
