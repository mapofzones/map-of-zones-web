import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { PERIODS_IN_HOURS_BY_KEY } from 'components';
import { SidebarZoneOverviewDocument } from 'graphql/HomePage/Sidebar/ZoneDetails/__generated__/ZoneOverview.query.generated';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { transformChartData } from 'utils/helper';

const IBC_VOLUME_CHART_KEY = 'ibcVolumeChart';

export const useZoneOverview = () => {
  const { zone = '' } = useParams();
  const [period] = useSelectedPeriod();

  const options = {
    variables: { zone, period: PERIODS_IN_HOURS_BY_KEY[period], isMainnet: true },
    skip: !zone,
  };
  const { data, loading } = useQuery(SidebarZoneOverviewDocument, options);

  return {
    data: data?.zoneOverview[0] && {
      ...data?.zoneOverview[0],
      [IBC_VOLUME_CHART_KEY]: transformChartData(
        data?.zoneOverview[0][IBC_VOLUME_CHART_KEY],
        IBC_VOLUME_CHART_KEY
      ),
    },
    loading,
  };
};
