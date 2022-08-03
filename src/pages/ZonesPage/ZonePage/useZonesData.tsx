import { useQuery } from '@apollo/client';

import { PeriodKeys, PERIODS_IN_HOURS_BY_KEY } from 'components';
import { ZonesDataDocument } from 'graphql/ZonesPage/ZonePage/__generated__/ZonesData.generated';

import { ZoneData } from './ZonesSearch/ZoneInfo/ZoneInfo.props';

export function useZonesData(
  selectedPeriod: PeriodKeys,
  isMainnet = true
): {
  data: ZoneData[];
  loading: boolean;
} {
  const options = {
    variables: {
      period: PERIODS_IN_HOURS_BY_KEY[selectedPeriod],
      isMainnet: isMainnet,
    },
  };

  const { data, loading } = useQuery(ZonesDataDocument, options);

  return { data: data?.zonesData ?? [], loading };
}
