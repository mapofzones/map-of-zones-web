import cn from 'classnames';

import { Button, ButtonGroup } from 'components';
import { ButtonType } from 'components/ui/Button/Button.props';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { ElementSize } from 'types/ElementSize';

import { Dropdown } from '../ui/Dropdown';
import styles from './PeriodSelector.module.scss';
import { PeriodKeys } from './Types';

export function PeriodSelector({
  className,
  useDropdown = false,
}: {
  className?: string;
  useDropdown?: boolean;
}) {
  const [selectedPeriod, setSelectedPeriod] = useSelectedPeriod();

  const onPeriodChange = (period: PeriodKeys) => {
    setSelectedPeriod(period);
  };

  if (useDropdown) {
    return (
      <Dropdown
        className={className}
        options={Object.values(PeriodKeys).map((periodValue: PeriodKeys) => ({
          key: periodValue,
        }))}
        initialSelectedKey={selectedPeriod}
        onOptionSelected={(option) => {
          onPeriodChange(option.key as PeriodKeys);
        }}
      />
    );
  }

  return (
    <ButtonGroup
      className={cn(styles.periodSelector, className)}
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
