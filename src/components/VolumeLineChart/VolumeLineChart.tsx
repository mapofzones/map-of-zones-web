import cn from 'classnames';

import styles from './VolumeLineChart.module.scss';
import { VolumeLineChartProps } from './VolumeLineChart.props';

export function VolumeLineChart({
  volumeInPercent,
  volumeOutPercent,
  className,
  ...props
}: VolumeLineChartProps): JSX.Element {
  return (
    <div className={cn(styles.chartContainer, className)} {...props}>
      <span className={styles.volumeInTitle}>In</span>
      <hr className={styles.volumeInLine} style={{ width: `${volumeInPercent}%` }} />
      <hr className={styles.volumeOutLine} style={{ width: `${volumeOutPercent}%` }} />
      <span className={styles.volumeOutTitle}>Out</span>
    </div>
  );
}
