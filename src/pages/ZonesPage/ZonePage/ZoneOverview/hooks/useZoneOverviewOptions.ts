import { useParams } from 'react-router-dom';

import {
  OverviewCardPeriod,
  OVERVIEW_PERIODS_IN_HOURS_BY_KEY,
} from 'components/OverviewChartCardWithMetadata';

export function useZoneOverviewOptions(period: OverviewCardPeriod) {
  const { zone = '' } = useParams();

  const periodInHours = OVERVIEW_PERIODS_IN_HOURS_BY_KEY[period];
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
