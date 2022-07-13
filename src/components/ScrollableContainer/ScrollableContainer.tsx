import cn from 'classnames';

import styles from './ScrollableContainer.module.scss';
import { ScrollableContainerProps } from './ScrollableContainer.props';

export function ScrollableContainer({
  className,
  children,
  vertical = true,
  horizontal = false,
  ...props
}: ScrollableContainerProps) {
  return (
    <div
      className={cn(styles.container, className, {
        [styles.vertical]: vertical,
        [styles.horizontal]: horizontal,
      })}
      {...props}
    >
      {children}
    </div>
  );
}
