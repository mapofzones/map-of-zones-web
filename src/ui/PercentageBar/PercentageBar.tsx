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
  const roundedRate = rate !== undefined && rate >= 0.01 ? rate : 0;

  return (
    <div className={cn(styles.container, className)}>
      <div
        className={styles.bar}
        style={{
          width: `${roundedRate * 100}%`,
          backgroundColor: color,
          borderTopRightRadius: rate === 1 ? 4 : 0,
          borderBottomRightRadius: rate === 1 ? 4 : 0,
        }}
      />
    </div>
  );
}
