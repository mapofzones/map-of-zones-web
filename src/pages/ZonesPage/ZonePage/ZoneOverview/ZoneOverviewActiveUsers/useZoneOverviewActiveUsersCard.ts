import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import {
  ZoneOverviewActiveUsersCardData,
  ZoneOverviewActiveUsersCardResult,
} from './ZoneOverviewActiveUsers.types';

export function useZoneOverviewActiveUsersCard(): {
  data: ZoneOverviewActiveUsersCardData | undefined;
  loading: boolean;
} {
  return {
    data: {
      totalDailyActiveUsers: 8345,
      totalIbcDailyActiveUsers: 834,
      chart: [
        {
          time: 1,
          dailyActiveUsers: 834,
          ibcDailyActiveUsers: 654,
        },
        {
          time: 2,
          dailyActiveUsers: 1245,
          ibcDailyActiveUsers: 1000,
        },
        {
          time: 3,
          dailyActiveUsers: 745,
          ibcDailyActiveUsers: 500,
        },
        {
          time: 4,
          dailyActiveUsers: 956,
          ibcDailyActiveUsers: 1200,
        },
      ],
    },
    loading: false,
  };

  const { zone = '' } = useParams();
  const [period] = useSelectedPeriod();

  const { data, isLoading } = useQuery<ZoneOverviewActiveUsersCardResult>({
    queryKey: [`activeUsers/${zone}/${period}`],
    enabled: !!period && !!zone,
  });

  return {
    data: data?.data,
    loading: isLoading,
  };
}
