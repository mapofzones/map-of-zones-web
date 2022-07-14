import cn from 'classnames';

import { SkeletonElementWrapper } from 'components';

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
      {loading && <SkeletonElementWrapper className={className}>{children}</SkeletonElementWrapper>}
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
