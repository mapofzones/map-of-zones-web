import cn from 'classnames';

import { PercentStackedLineChart } from 'components';

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
      <PercentStackedLineChart
        leftValue={volumeInPercent}
        rightValue={volumeOutPercent}
        leftCustomColor="var(--blue)"
        rightCustomColor="var(--pink)"
      />
      <span className={styles.volumeOutTitle}>Out</span>
    </div>
  );
}
