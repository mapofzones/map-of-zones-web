import cn from 'classnames';

import { SkeletonRectangle } from 'components/Skeleton';

import styles from './TotalCard.module.scss';
import { TotalCardProps } from './TotalCard.props';

export function TotalCard({
  children,
  className,
  loading = false,
  ...props
}: TotalCardProps): JSX.Element {
  return (
    <>
      {loading && <SkeletonRectangle className={cn(styles.container, className)} />}
      {!loading && (
        <div className={cn(styles.container, className)} {...props}>
          {children}
        </div>
      )}
    </>
  );
}
