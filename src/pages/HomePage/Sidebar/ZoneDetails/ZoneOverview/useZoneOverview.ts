import { useMemo } from 'react';

import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { ZoneOverviewDocument } from 'graphql/HomePage/Sidebar/ZoneDetails/__generated__/ZoneOverview.generated';

import { useSelectedPeriod } from '../../../../../hooks/useSelectedPeriod';
import { PERIODS } from '../../ZonesInfo/Types';

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
