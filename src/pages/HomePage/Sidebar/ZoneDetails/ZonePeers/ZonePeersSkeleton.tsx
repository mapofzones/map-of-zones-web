import { Card } from 'components';

import styles from './ZonePeers.module.scss';

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
