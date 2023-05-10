import cn from 'classnames';

import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { ElementSize } from 'types/ElementSize';
import { Button, ButtonGroup, Dropdown } from 'ui';
import { ButtonSize, ButtonVariant } from 'ui/Button/Button.props';

import styles from './PeriodSelector.module.scss';
import { PeriodKeys } from './Types';

export function PeriodSelector({
  className,
  useDropdown = false,
}: {
  className?: string;
  useDropdown?: boolean;
}) {
  const [selectedPeriod, setSelectedPeriod] = useSelectedPeriod(true);

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
        size={ElementSize.LARGE}
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
          size={ButtonSize.LARGE}
          variant={selectedPeriod === periodValue ? ButtonVariant.PRIMARY : ButtonVariant.SECONDARY}
          onClick={() => onPeriodChange(periodValue)}
        >
          {periodValue}
        </Button>
      ))}
    </ButtonGroup>
  );
}
