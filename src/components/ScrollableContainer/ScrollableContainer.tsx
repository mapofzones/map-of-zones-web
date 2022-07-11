import cn from 'classnames';

import styles from './ScrollableContainer.module.scss';

export function ScrollableContainer({
  className,
  children,
  vertical = true,
  horizontal = false,
  ...props
}: any) {
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
