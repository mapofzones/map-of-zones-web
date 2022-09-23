import cn from 'classnames';

import { SkeletonCircle, SkeletonRectangle } from 'components/Skeleton';

import styles from './TableRowSkeleton.module.scss';

export function TableRowSkeleton({
  className,
  index,
  forPeers,
}: {
  className?: string;
  index: number;
  forPeers?: boolean;
}) {
  const wide = !(index % 2);

  return (
    <div className={cn(styles.container, className)}>
      <SkeletonRectangle className={cn(styles.position, { [styles.forPeers]: forPeers })} />
      {forPeers && <SkeletonCircle className={styles.smallLogo} size="18" />}
      <SkeletonCircle className={styles.logo} size="32" />
      <SkeletonRectangle className={cn(styles.name, { [styles.wide]: wide })} />
      <SkeletonRectangle className={cn(styles.info, { [styles.wide]: wide })} />
    </div>
  );
}
