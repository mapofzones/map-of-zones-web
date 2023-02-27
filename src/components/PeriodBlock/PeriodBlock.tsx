import cn from 'classnames';

import { PeriodKeys } from 'components/PeriodSelector';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import styles from './PeriodBlock.module.scss';

export function Period({ className, period }: { className?: string; period?: PeriodKeys }) {
  return <span className={cn(className, styles.period)}>({period})</span>;
}

export function PeriodBlock({ className }: { className?: string }) {
  const [selectedPeriod] = useSelectedPeriod();

  return <Period className={className} period={selectedPeriod} />;
}
