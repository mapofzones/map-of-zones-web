import { useParams } from 'react-router-dom';

import { Button, ScrollableContainer } from 'components';
import { ButtonType } from 'components/ui/Button/Button.props';
import { useNavigateWithSearchParams } from 'hooks/useNavigateWithSearchParams';
import { ArrowRight } from 'icons';
import { ElementSize } from 'types/ElementSize';

import { useZonePeers } from './useZonePeers';
import styles from './ZonePeers.module.scss';
import { ZonePeersSkeleton } from './ZonePeersSkeleton';
import { MemoizedZonePeersTable } from './ZonePeersTable/ZonePeersTable';

export function ZonePeers() {
  const navigateWithSearchParams = useNavigateWithSearchParams();

  const { zone } = useParams();

  const { data: peers, loading: peersLoading } = useZonePeers(); // move to ZonePeersTable component

  const loading = peersLoading;

  const onDetailedBtnClick = () => {
    navigateWithSearchParams(`/zones/${zone}/peers`);
  };

  return (
    <>
      <ScrollableContainer className={styles.container}>
        {loading && <ZonePeersSkeleton />}
        {!loading && <MemoizedZonePeersTable peers={peers} />}
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
