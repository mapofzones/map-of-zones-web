import cn from 'classnames';

import { SkeletonRectangle } from 'ui/Skeleton/SkeletonElement/SkeletonElement';

import styles from './Card.module.scss';
import { CardProps } from './Card.props';

function Card({
  className,
  loading = false,
  children,
  hasBorder = false,
  title,
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
          {title && <div className={styles.title}>{title}</div>}
          {children}
        </div>
      )}
    </>
  );
}

export { Card };
