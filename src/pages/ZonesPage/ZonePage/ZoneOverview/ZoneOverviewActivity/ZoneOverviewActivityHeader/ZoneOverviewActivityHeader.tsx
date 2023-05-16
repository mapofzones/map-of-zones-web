import { PeriodKeys } from 'components';
import { OverviewPeriodButtonsGroup, OverviewCard } from 'components/OverviewCard';

import { ZoneOverviewActivityHeaderProps } from '.';

const PERIODS: PeriodKeys[] = [PeriodKeys.DAY, PeriodKeys.WEEK, PeriodKeys.MONTH];

export function ZoneOverviewActivityHeader({
  children,
  selectedPeriod,
  onPeriodSelected,
  ...props
}: ZoneOverviewActivityHeaderProps): JSX.Element {
  return (
    <OverviewCard.Header {...props}>
      <OverviewCard.Title>{`Activity (${selectedPeriod.toUpperCase()})`}</OverviewCard.Title>

      {children}

      <OverviewPeriodButtonsGroup periods={PERIODS} onPeriodSelected={onPeriodSelected} />
    </OverviewCard.Header>
  );
}
