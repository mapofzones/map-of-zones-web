import { useMemo } from 'react';

import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { ZoneOverviewDocument } from 'graphql/HomePage/ZoneDetailsSidebar/__generated__/ZoneOverview.generated';

import { PERIODS } from '../../ZonesInfo/Types';
import { useSelectedPeriod } from '../../ZonesInfo/useSelectedPeriod';

export const useZoneOverview = () => {
  const { zone = '' } = useParams();
  const [period] = useSelectedPeriod();

  const options = useMemo(
    () => ({ variables: { zone, period: PERIODS[period], isMainnet: true }, skip: !zone }),
    [zone, period]
  );

  const { data } = useQuery(ZoneOverviewDocument, options);

  return useMemo(() => data?.zoneOverview[0], [data]);
};
