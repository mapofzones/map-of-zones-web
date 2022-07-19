import { memo } from 'react';

import { Card, NumberFormat, NumberType, PeerLineChart, ValueWithPending } from 'components';
import { CircularArrows } from 'icons';

import { ZonePeer } from '../useZonePeers';
import styles from './ZonePeersTable.module.scss';
import { ZonePeersTableProps } from './ZonePeersTableProps';

function ZonePeersTable({ peers, zoneDetails }: ZonePeersTableProps) {
  if (!zoneDetails || !peers) {
    return <>Peers for zone not found.</>;
  }

  return (
    <>
      {peers.map((peer: ZonePeer) => (
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
    </>
  );
}

export const MemoizedZonePeersTable = memo(ZonePeersTable);
