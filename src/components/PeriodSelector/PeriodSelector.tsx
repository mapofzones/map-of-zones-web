import cn from 'classnames';

import { Button, ButtonGroup } from 'components';
import { ButtonSize, ButtonVariant } from 'components/ui/Button/Button.props';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { ElementSize } from 'types/ElementSize';

import styles from './PeriodSelector.module.scss';
import { PeriodKeys } from './Types';
import { Dropdown } from '../ui/Dropdown';

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
