import cn from 'classnames';

import { ValueWithPending } from 'components';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { ElementSize } from 'types/ElementSize';
import { Card } from 'ui';
import { LineChart } from 'ui/LineChart/LineChart';

import styles from './TotalInfoCard.module.scss';
import { TotalInfoCardProps } from './TotalInfoCard.props';

export function TotalInfoCard({
  title,
  value,
  pendingValue,
  chartData,
  chartKey,
  numberType,
  loading,
  className,
  hasBorder = false,
  size = ElementSize.MEDIUM,
  ...props
}: TotalInfoCardProps) {
  const [selectedPeriod] = useSelectedPeriod();

  return (
    <Card
      className={cn(styles.container, className, {
        [styles.sm]: size === ElementSize.SMALL,
        [styles.md]: size === ElementSize.MEDIUM,
        [styles.lg]: size === ElementSize.LARGE,
      })}
      hasBorder={hasBorder}
      {...props}
      loading={loading}
    >
      <ValueWithPending
        title={`${title} (${selectedPeriod})`}
        value={value}
        pendingValue={pendingValue}
        numberType={numberType}
        size={size}
      />
      {chartKey && chartData && (
        <LineChart className={styles.container_chart} data={chartData} dataKey={chartKey} />
      )}
    </Card>
  );
}
