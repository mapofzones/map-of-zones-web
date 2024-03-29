import { memo } from 'react';

import { CircularArrows } from 'assets/icons';
import { Card, NumberFormat, NumberType, PeerLineChart, ValueWithPending } from 'components';

import styles from './ZonePeersTable.module.scss';
import { ZonePeersTableProps } from './ZonePeersTableProps';
import { ZonePeer } from '../useZonePeers';

function ZonePeersTable({ peers }: ZonePeersTableProps) {
  if (!peers || !peers.length) {
    return <div className={styles.emptyContainer}>Peers for zone not found.</div>;
  }

  return (
    <>
      {peers.map((peer: ZonePeer) => (
        <Card hasBorder key={peer.counterpartyBlockchain?.zone} className={styles.peerCard}>
          <div className={styles.title}>
            {peer.blockchain?.name}
            <CircularArrows className={styles.icon} />
            {peer.counterpartyBlockchain?.name}
          </div>
          <NumberFormat
            className={styles.totalValue}
            value={peer.ibcVolume}
            numberType={NumberType.Currency}
          />
          <PeerLineChart
            className={styles.lineChart}
            zone={peer.blockchain}
            counterparty={peer.counterpartyBlockchain}
            volumeInPercent={peer.volumeInPercent}
            volumeOutPercent={peer.volumeOutPercent}
          />
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
    </>
  );
}

export const MemoizedZonePeersTable = memo(ZonePeersTable);
