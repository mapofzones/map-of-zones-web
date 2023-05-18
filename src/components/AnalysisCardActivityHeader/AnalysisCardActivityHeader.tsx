import { PeriodKeys } from 'components';
import { AnalysisPeriodButtonsGroup, AnalysisCard } from 'components/AnalysisCard';

import { AnalysisCardActivityHeaderProps } from '.';

const PERIODS: PeriodKeys[] = [PeriodKeys.DAY, PeriodKeys.WEEK, PeriodKeys.MONTH];

export function AnalysisCardActivityHeader({
  children,
  selectedPeriod,
  onPeriodSelected,
  ...props
}: AnalysisCardActivityHeaderProps): JSX.Element {
  return (
    <AnalysisCard.Header {...props}>
      <AnalysisCard.Title>{`Activity (${selectedPeriod.toUpperCase()})`}</AnalysisCard.Title>

      {children}

      <AnalysisPeriodButtonsGroup periods={PERIODS} onPeriodSelected={onPeriodSelected} />
    </AnalysisCard.Header>
  );
}
