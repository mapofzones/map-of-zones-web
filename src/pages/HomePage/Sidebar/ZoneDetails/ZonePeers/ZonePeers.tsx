import { useNavigate, useParams } from 'react-router-dom';

import { Button, ScrollableContainer } from 'components';
import { ButtonType } from 'components/ui/Button/Button.props';
import { ArrowRight } from 'icons';
import { ElementSize } from 'types/ElementSize';

import { useZoneDetails } from '../useZoneDetails';
import { useZonePeers } from './useZonePeers';
import styles from './ZonePeers.module.scss';
import { ZonePeersSkeleton } from './ZonePeersSkeleton';
import { MemoizedZonePeersTable } from './ZonePeersTable/ZonePeersTable';

export function ZonePeers() {
  const navigate = useNavigate();

  const { zone } = useParams();

  const { data: peers, loading: peersLoading } = useZonePeers();

  const { data: zoneDetails, loading: zoneDetailsLoading } = useZoneDetails();

  const loading = peersLoading || zoneDetailsLoading;

  const onDetailedBtnClick = () => {
    navigate(`/zones/${zone}/peers`);
  };

  return (
    <>
      <ScrollableContainer className={styles.container}>
        {loading && <ZonePeersSkeleton />}
        {!loading && <MemoizedZonePeersTable peers={peers} zoneDetails={zoneDetails} />}
      </ScrollableContainer>

      <Button
        className={styles.detailedBtn}
        onClick={onDetailedBtnClick}
        size={ElementSize.MEDIUM}
        buttonType={ButtonType.SECONDARY}
      >
        <span className={styles.btnText}>Learn More</span>
        <ArrowRight />
      </Button>
    </>
  );
}
