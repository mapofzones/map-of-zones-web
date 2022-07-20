import cn from 'classnames';

import styles from './SkeletonElement.module.scss';
import {
  SkeletonCircleProps,
  SkeletonElementProps,
  SkeletonRectangleProps,
} from './SkeletonElement.props';

export function SkeletonCircle({ size, children, className, ...props }: SkeletonCircleProps) {
  const style = { width: size, height: size };

  return (
    <SkeletonElement className={cn(className, styles.circle)} style={style} {...props}>
      {children}
    </SkeletonElement>
  );
}

export function SkeletonElement({ children, className, ...props }: SkeletonElementProps) {
  return (
    <div className={cn(styles.container, className)} {...props}>
      {children}
    </div>
  );
}

export function SkeletonRectangle({ children, className, ...props }: SkeletonRectangleProps) {
  return (
    <SkeletonElement className={cn(className, styles.rectangle)} {...props}>
      {children}
    </SkeletonElement>
  );
}
