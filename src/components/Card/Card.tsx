import cn from 'classnames';

import { SkeletonRectangle } from 'components/Skeleton/SkeletonElement/SkeletonElement';

import styles from './Card.module.scss';
import { CardProps } from './Card.props';

function Card({
  className,
  loading = false,
  children,
  hasBorder = false,
  ...props
}: CardProps): JSX.Element {
  return (
    <>
      {loading && <SkeletonRectangle className={className} />}
      {!loading && (
        <div
          className={cn(className, styles.container, {
            [styles.hasBorder]: hasBorder,
          })}
          {...props}
        >
          {children}
        </div>
      )}
    </>
  );
}

export { Card };
