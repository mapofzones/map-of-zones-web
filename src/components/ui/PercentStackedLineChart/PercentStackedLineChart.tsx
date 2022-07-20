import styles from './PercentStackedLineChart.module.scss';
import { PercentStackedLineChartProps } from './PercentStackedLineChart.props';

export function PercentStackedLineChart({
  leftValue,
  rightValue,
}: PercentStackedLineChartProps): JSX.Element {
  const isActive = leftValue > 0 || rightValue > 0;
  return (
    <>
      {isActive || <hr className={styles.notActiveLine} />}
      {isActive && (
        <>
          <hr className={styles.leftLine} style={{ width: `${leftValue}%` }} />
          <hr className={styles.rightLine} style={{ width: `${rightValue}%` }} />
        </>
      )}
    </>
  );
}
