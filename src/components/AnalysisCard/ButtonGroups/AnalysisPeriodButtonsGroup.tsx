import { OverviewCardPeriod } from 'components/OverviewChartCardWithMetadata';
import { PeriodKeys } from 'components/PeriodSelector';
import { ElementSize } from 'types/ElementSize';
import { ButtonGroup } from 'ui';
import { ButtonGroupItem } from 'ui/ButtonGroup/ButtonGroup.props';

export function AnalysisPeriodButtonsGroup<T extends OverviewCardPeriod | PeriodKeys>({
  periods,
  disabled = false,
  getTitleByKey = defaultTitleAccessor,
  onPeriodSelected,
}: {
  periods: T[];
  disabled?: boolean;
  getTitleByKey?: (key: T) => string;
  onPeriodSelected: (period: T) => void;
}) {
  const onChartPeriodSelected = (item: ButtonGroupItem<T>) => {
    item?.key && onPeriodSelected(item?.key);
  };

  return (
    <ButtonGroup
      disabled={disabled}
      size={ElementSize.SMALL}
      buttons={periods.map((period: T) => ({
        key: period,
        title: getTitleByKey(period),
      }))}
      setSelectedButton={onChartPeriodSelected}
    />
  );
}

function defaultTitleAccessor<T extends OverviewCardPeriod | PeriodKeys>(key: T) {
  return key.toString().toUpperCase();
}
