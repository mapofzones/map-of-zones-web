import cn from 'classnames';

import { Card, ValueWithTitle } from 'components';
import { LineChart } from 'components/ui/LineChart/LineChart';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { ElementSize } from 'types/ElementSize';

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
      <ValueWithTitle
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
