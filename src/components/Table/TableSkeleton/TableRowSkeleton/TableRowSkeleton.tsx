import cn from 'classnames';

import { SkeletonCircle, SkeletonRectangle } from 'components/Skeleton';

import styles from './TableRowSkeleton.module.scss';

export function TableRowSkeleton({ className, index }: { className?: string; index: number }) {
  const wide = !(index % 2);

  return (
    <div className={cn(styles.container, className)}>
      <SkeletonRectangle className={styles.position} />
      <SkeletonCircle className={styles.logo} size="32" />
      <SkeletonRectangle className={cn(styles.name, { [styles.wide]: wide })} />
      <SkeletonRectangle className={cn(styles.info, { [styles.wide]: wide })} />
    </div>
  );
}
