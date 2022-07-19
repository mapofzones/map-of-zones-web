import { useQuery } from '@apollo/client';

import { PeriodKeys } from 'components/PeriodSelector/Types';
import { ZonesCountDocument } from 'graphql/ZonesPage/ZonesInfo/__generated__/ZonesCount.generated';
import { PERIODS } from 'pages/HomePage/Sidebar/ZonesInfo/Types';

export function useZonesCount(selectedPeriod: PeriodKeys, isMainnet = true) {
  const options = {
    variables: {
      period: PERIODS[selectedPeriod],
      isMainnet: isMainnet,
    },
  };

  const { data } = useQuery(ZonesCountDocument, options);

  return {
    data: data?.headers[0],
  };
}
