import cn from 'classnames';

import { SkeletonRectangle } from 'components/Skeleton';

import styles from './TotalCardSkeleton.module.scss';

export function TotalCardSkeleton({ className }: { className?: string }): JSX.Element {
  return <SkeletonRectangle className={cn(styles.container, className)} />;
}
