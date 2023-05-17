import { useParams } from 'react-router-dom';

import { ANALYSIS_PERIODS_IN_HOURS_BY_KEY, AnalysisCardPeriod } from 'types/AnalysisCardPeriod';

export function useZoneOverviewOptions(period: AnalysisCardPeriod) {
  const { zone = '' } = useParams();

  const periodInHours = ANALYSIS_PERIODS_IN_HOURS_BY_KEY[period];
  const periodInDays = periodInHours / 24;

  const options = {
    variables: {
      zone,
      period: periodInHours,
      isMainnet: true,
      periodInDays: periodInDays,
    },
    skip: !zone,
  };
  return options;
}
