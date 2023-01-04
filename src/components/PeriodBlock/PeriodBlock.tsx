import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import styles from './PeriodBlock.module.scss';

export function PeriodBlock() {
  const [selectedPeriod] = useSelectedPeriod();

  return <span className={styles.period}>({selectedPeriod})</span>;
}
