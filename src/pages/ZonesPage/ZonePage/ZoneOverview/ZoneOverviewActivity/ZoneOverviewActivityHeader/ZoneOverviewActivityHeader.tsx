import { PeriodKeys } from 'components';
import { AnalysisPeriodButtonsGroup, AnalysisCard } from 'components/AnalysisCard';

import { ZoneOverviewActivityHeaderProps } from '.';

const PERIODS: PeriodKeys[] = [PeriodKeys.DAY, PeriodKeys.WEEK, PeriodKeys.MONTH];

export function ZoneOverviewActivityHeader({
  children,
  selectedPeriod,
  onPeriodSelected,
  ...props
}: ZoneOverviewActivityHeaderProps): JSX.Element {
  return (
    <AnalysisCard.Header {...props}>
      <AnalysisCard.Title>{`Activity (${selectedPeriod.toUpperCase()})`}</AnalysisCard.Title>

      {children}

      <AnalysisPeriodButtonsGroup periods={PERIODS} onPeriodSelected={onPeriodSelected} />
    </AnalysisCard.Header>
  );
}
