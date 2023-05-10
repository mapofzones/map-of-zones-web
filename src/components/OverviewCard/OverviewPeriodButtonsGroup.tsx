import { OverviewCardPeriod } from 'components/OverviewChartCardWithMetadata';
import { PeriodKeys } from 'components/PeriodSelector';
import { ButtonGroup } from 'ui';
import { ButtonGroupItem } from 'ui/ButtonGroup/ButtonGroup.props';
import { ElementSize } from 'types/ElementSize';

export function OverviewPeriodButtonsGroup<T extends OverviewCardPeriod | PeriodKeys>({
  periods,
  getTitleByKey = defaultTitleAccessor,
  onPeriodSelected,
}: {
  periods: T[];
  getTitleByKey?: (key: T) => string;
  onPeriodSelected: (period: T) => void;
}) {
  const onChartPeriodSelected = (item: ButtonGroupItem<T>) => {
    item?.key && onPeriodSelected(item?.key);
  };

  return (
    <ButtonGroup
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
