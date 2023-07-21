import { PeriodKeys } from 'components/PeriodSelector';
import { AnalysisCardPeriod } from 'types/AnalysisCardPeriod';
import { ElementSize } from 'types/ElementSize';
import { ButtonGroup } from 'ui';
import { ButtonGroupItem } from 'ui/ButtonGroup/ButtonGroup.props';

interface AnalysisPeriodButtonsGroupProps<T extends AnalysisCardPeriod | PeriodKeys> {
  periods: T[];
  disabled?: boolean;
  getTitleByKey?: (key: T) => string;
  onPeriodSelected: (period: T) => void;
}

export function AnalysisPeriodButtonsGroup<T extends AnalysisCardPeriod | PeriodKeys>({
  periods,
  disabled = false,
  getTitleByKey = defaultTitleAccessor,
  onPeriodSelected,
}: AnalysisPeriodButtonsGroupProps<T>) {
  const onChartPeriodSelected = (item: ButtonGroupItem<T>) => {
    item?.key && onPeriodSelected(item?.key);
  };

  return (
    <ButtonGroup
      disabled={disabled}
      size={ElementSize.MEDIUM}
      buttons={periods.map((period: T) => ({
        key: period,
        title: getTitleByKey(period),
      }))}
      setSelectedButton={onChartPeriodSelected}
    />
  );
}

function defaultTitleAccessor<T extends AnalysisCardPeriod | PeriodKeys>(key: T) {
  return key.toString().toUpperCase();
}
