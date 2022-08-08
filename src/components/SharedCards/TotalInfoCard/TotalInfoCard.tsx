import cn from 'classnames';

import { Card, NumberFormat, ValueWithPending, ValueWithTitle } from 'components';
import { LineChart } from 'components/ui/LineChart/LineChart';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { PendingIcon } from 'icons';

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
  ...props
}: TotalInfoCardProps) {
  const [selectedPeriod] = useSelectedPeriod();

  return (
    <Card
      className={cn(styles.container, className)}
      hasBorder={hasBorder}
      {...props}
      loading={loading}
    >
      <ValueWithTitle
        title={`${title} (${selectedPeriod})`}
        value={value}
        pendingValue={pendingValue}
        numberType={numberType}
      />
      {chartKey && chartData && (
        <LineChart className={styles.container_chart} data={chartData} dataKey={chartKey} />
      )}
    </Card>
  );
}
