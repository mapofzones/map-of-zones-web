import cn from 'classnames';

import styles from './VolumeLineChart.module.scss';

export function VolumeLineChart({
  volumeInPercent,
  volumeOutPercent,
  className,
}: any): JSX.Element {
  return (
    <div className={cn(styles.chartContainer, className)}>
      <span className={styles.volumeInTitle}>In</span>
      <hr className={styles.volumeInLine} style={{ width: `${volumeInPercent}%` }} />
      <hr className={styles.volumeOutLine} style={{ width: `${volumeOutPercent}%` }} />
      <span className={styles.volumeOutTitle}>Out</span>
    </div>
  );
}
