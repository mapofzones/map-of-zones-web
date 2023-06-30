import cn from 'classnames';

import styles from './PercentageBar.module.scss';

export function PercentageBar({
  rate,
  color,
  className,
}: {
  rate?: number;
  color: string;
  className?: string;
}) {
  const showBar = rate !== undefined && rate >= 0.01;

  return (
    <div className={cn(styles.container, className)}>
      {showBar && (
        <div
          className={styles.bar}
          style={{
            width: `${rate * 100}%`,
            backgroundColor: color,
            borderTopRightRadius: rate === 1 ? 4 : 0,
            borderBottomRightRadius: rate === 1 ? 4 : 0,
          }}
        />
      )}
    </div>
  );
}
