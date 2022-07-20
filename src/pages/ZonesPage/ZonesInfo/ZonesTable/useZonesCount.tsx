import { useQuery } from '@apollo/client';

import { PERIODS_IN_HOURS_BY_KEY, PeriodKeys } from 'components';
import { ZonesCountDocument } from 'graphql/ZonesPage/ZonesInfo/__generated__/ZonesCount.generated';

export function useZonesCount(selectedPeriod: PeriodKeys, isMainnet = true) {
  const options = {
    variables: {
      period: PERIODS_IN_HOURS_BY_KEY[selectedPeriod],
      isMainnet: isMainnet,
    },
  };

  const { data } = useQuery(ZonesCountDocument, options);

  return {
    data: data?.headers[0],
  };
}
