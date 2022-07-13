import { Button, ButtonGroup } from 'components';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import styles from './PeriodSelector.module.scss';
import { PeriodKeys } from './Types';

export function PeriodSelector() {
  const [selectedPeriod, setSelectedPeriod] = useSelectedPeriod();

  const onPeriodChange = (period: PeriodKeys) => {
    setSelectedPeriod(period);
  };

  return (
    <ButtonGroup
      className={styles.periodSelector}
      isActive={(key: string) => selectedPeriod === key}
    >
      {Object.values(PeriodKeys).map((periodValue: PeriodKeys) => (
        <Button key={periodValue} onClick={() => onPeriodChange(periodValue)}>
          {periodValue}
        </Button>
      ))}
    </ButtonGroup>
  );
}
