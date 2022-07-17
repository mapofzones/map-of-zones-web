import {
  Button,
  Card,
  NumberFormat,
  NumberType,
  PeerLineChart,
  ScrollableContainer,
  ValueWithPending,
} from 'components';
import { ArrowRight, CircularArrows } from 'icons';

import { useZoneDetails } from '../useZoneDetails';
import { useZonePeers } from './useZonePeers';
import styles from './ZonePeers.module.scss';

export function ZonePeers() {
  const { data: peers, loading: peersLoading } = useZonePeers();

  const { data: zoneDetails, loading: zoneDetailsLoading } = useZoneDetails();

  const loading = peersLoading || zoneDetailsLoading;

  return (
    <>
      <ScrollableContainer className={styles.container}>
        {loading && <ZonePeersSkeleton />}
        {!loading &&
          zoneDetails &&
          peers?.map((peer) => (
            <Card hasBorder key={peer.zoneCounterpartyKey} className={styles.peerCard}>
              <div className={styles.title}>
                {zoneDetails?.name}
                <CircularArrows className={styles.icon} />
                {peer.zoneCounterpartyName}
              </div>
              <NumberFormat
                className={styles.totalValue}
                value={peer.ibcVolumeIn + peer.ibcVolumeOut}
                numberType={NumberType.Currency}
              />
              <PeerLineChart className={styles.lineChart} zone={zoneDetails} counterparty={peer} />
              <div className={styles.valuesContainer}>
                <ValueWithPending
                  value={peer.ibcVolumeOut}
                  pendingValue={peer.ibcVolumeOutPending}
                  numberType={NumberType.Currency}
                />
                <ValueWithPending
                  value={peer.ibcVolumeIn}
                  pendingValue={peer.ibcVolumeInPending}
                  numberType={NumberType.Currency}
                  alignRight
                />
              </div>
            </Card>
          ))}
      </ScrollableContainer>

      <Button className={styles.detailedBtn}>
        <span className={styles.btnText}>Learn More</span>
        <ArrowRight />
      </Button>
    </>
  );
}

export function ZonePeersSkeleton() {
  return (
    <>
      {Array(3)
        .fill(0)
        .map((_, index: number) => (
          <Card hasBorder key={index} className={styles.peerCard} loading={true} />
        ))}
    </>
  );
}
