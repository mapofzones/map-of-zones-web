import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { PERIODS_IN_HOURS_BY_KEY } from 'components';
import { ZoneOverviewDocument } from 'graphql/HomePage/Sidebar/ZoneDetails/__generated__/ZoneOverview.generated';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

export const useZoneOverview = () => {
  const { zone = '' } = useParams();
  const [period] = useSelectedPeriod();

  const options = {
    variables: { zone, period: PERIODS_IN_HOURS_BY_KEY[period], isMainnet: true },
    skip: !zone,
  };
  const { data, loading } = useQuery(ZoneOverviewDocument, options);

  return { data: data?.zoneOverview[0], loading };
};
