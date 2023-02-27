import { ButtonGroup } from 'components/ui';
import { ButtonGroupItem } from 'components/ui/ButtonGroup/ButtonGroup.props';
import { ElementSize } from 'types/ElementSize';

import { OverviewCardPeriod } from './OverviewChartCard.props';

const PERIOD_TITLES_BY_KEY: Record<OverviewCardPeriod, string> = {
  '1w': '1W',
  '2w': '2W',
  '1m': '1M',
};

export function OverviewPeriodButtonsGroup({
  periods,
  onPeriodSelected,
}: {
  periods: OverviewCardPeriod[];
  onPeriodSelected: (period: OverviewCardPeriod) => void;
}) {
  const onChartPeriodSelected = (item: ButtonGroupItem<OverviewCardPeriod>) => {
    item?.key && onPeriodSelected(item?.key);
  };

  return (
    <ButtonGroup
      size={ElementSize.SMALL}
      buttons={periods.map((period: OverviewCardPeriod) => ({
        key: period,
        title: PERIOD_TITLES_BY_KEY[period],
      }))}
      setSelectedButton={onChartPeriodSelected}
    />
  );
}
