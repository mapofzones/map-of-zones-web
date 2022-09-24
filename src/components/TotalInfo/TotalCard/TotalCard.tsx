import { ReactNode } from 'react';

import cn from 'classnames';

import { SkeletonRectangle } from 'components/Skeleton';

import styles from './TotalCard.module.scss';

export function TotalCard({
  children,
  className,
  loading = false,
}: {
  children: ReactNode;
  className?: string;
  loading?: boolean;
}): JSX.Element {
  return (
    <>
      {loading && <SkeletonRectangle className={cn(styles.container, className)} />}
      {!loading && <div className={cn(styles.container, className)}>{children}</div>}
    </>
  );
}
