import { Button, ButtonGroup } from 'components';
import { ButtonType } from 'components/ui/Button/Button.props';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { ElementSize } from 'types/ElementSize';

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
        <Button
          key={periodValue}
          size={ElementSize.MEDIUM}
          buttonType={selectedPeriod === periodValue ? ButtonType.PRIMARY : ButtonType.SECONDARY}
          onClick={() => onPeriodChange(periodValue)}
        >
          {periodValue}
        </Button>
      ))}
    </ButtonGroup>
  );
}
