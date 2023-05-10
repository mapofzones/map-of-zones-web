import cn from 'classnames';

import { SkeletonRectangle } from 'ui';

import { TableRowSkeleton } from './TableRowSkeleton/TableRowSkeleton';
import styles from './TableSkeleton.module.scss';

export function TableSkeleton({ className, forPeers }: { className?: string; forPeers?: boolean }) {
  return (
    <div className={cn(styles.container, className)}>
      <SkeletonRectangle className={styles.header} />
      {Array(7)
        .fill(0)
        .map((_, index: number) => (
          <TableRowSkeleton key={index} index={index} forPeers={forPeers} />
        ))}
    </div>
  );
}
