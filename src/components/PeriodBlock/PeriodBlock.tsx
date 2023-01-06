import cn from 'classnames';

import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import styles from './PeriodBlock.module.scss';

export function PeriodBlock({ className }: { className?: string }) {
  const [selectedPeriod] = useSelectedPeriod();

  return <span className={cn(className, styles.period)}>({selectedPeriod})</span>;
}
