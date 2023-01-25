import cn from 'classnames';

import styles from './Divider.module.scss';

export function Divider({
  horizontal = false,
  className,
}: {
  horizontal?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(className, styles.divider, {
        [styles.horizontal]: horizontal,
      })}
    />
  );
}
