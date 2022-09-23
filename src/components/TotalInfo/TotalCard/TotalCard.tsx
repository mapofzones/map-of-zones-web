import { ReactNode } from 'react';

import cn from 'classnames';

import { SkeletonRectangle } from 'components/Skeleton';

import styles from './TotalCard.module.scss';

export function TotalCard({
  children,
  className,
  hiding = false,
  loading = false,
}: {
  children: ReactNode;
  className?: string;
  hiding?: boolean;
  loading?: boolean;
}): JSX.Element {
  return (
    <>
      {loading && <SkeletonRectangle className={className} />}
      {!loading && (
        <div className={cn(styles.container, { [styles.hiding]: hiding }, className)}>
          {children}
        </div>
      )}
    </>
  );
}
