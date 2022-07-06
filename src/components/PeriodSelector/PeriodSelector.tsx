import cn from 'classnames';

import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import styles from './PeriodSelector.module.scss';
import { PeriodKeys } from './Types';

export function PeriodSelector() {
  const [selectedPeriod, setSelectedPeriod] = useSelectedPeriod();

  const onPeriodChange = (period: PeriodKeys) => {
    setSelectedPeriod(period);
  };

  return (
    <div className={styles.periodSelector}>
      {Object.values(PeriodKeys).map((periodValue: PeriodKeys) => (
        <div
          key={periodValue}
          className={cn(styles.item, { [styles.active]: selectedPeriod === periodValue })}
          onClick={() => onPeriodChange(periodValue)}
        >
          {periodValue}
        </div>
      ))}
    </div>
  );
}
