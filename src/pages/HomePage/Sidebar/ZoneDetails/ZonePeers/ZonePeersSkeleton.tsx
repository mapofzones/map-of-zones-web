import { SkeletonRectangle } from 'ui';

import styles from './ZonePeers.module.scss';

export function ZonePeersSkeleton() {
  return (
    <>
      {Array(3)
        .fill(0)
        .map((_, index: number) => (
          <SkeletonRectangle key={index} className={styles.peerCard} />
        ))}
    </>
  );
}
