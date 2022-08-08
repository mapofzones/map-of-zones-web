import cn from 'classnames';

import styles from './Divider.module.scss';

export function Divider({ horizontal = false }: { horizontal?: boolean }) {
  return (
    <div
      className={cn(styles.divider, {
        [styles.horizontal]: horizontal,
      })}
    />
  );
}
