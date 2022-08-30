import { useQuery } from '@apollo/client';

import { PERIODS_IN_HOURS_BY_KEY, PeriodKeys } from 'components';
import { ZonesCountDocument } from 'graphql/v2/ZonesPage/ZonesInfo/__generated__/ZonesCount.query.generated';

export function useZonesCount(selectedPeriod: PeriodKeys, isMainnet = true) {
  const options = {
    variables: {
      period: PERIODS_IN_HOURS_BY_KEY[selectedPeriod],
      isMainnet: isMainnet,
    },
  };

  const { data } = useQuery(ZonesCountDocument, options);

  return {
    data: data && {
      allZonesCount: data.allZonesCount.aggregate?.count,
      activeZonesCount: data.activeZonesCount.aggregate?.count,
    },
  };
}
