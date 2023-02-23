import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { OverviewCardPeriod } from 'components/OverviewChartCard';

import {
  ZoneOverviewActiveUsersCardData,
  ZoneOverviewActiveUsersCardResult,
} from './ZoneOverviewActiveUsers.types';

export function useZoneOverviewActiveUsersCard(period: OverviewCardPeriod): {
  data: ZoneOverviewActiveUsersCardData | undefined;
  loading: boolean;
} {
  const { zone = '' } = useParams();

  const { data, isLoading } = useQuery<ZoneOverviewActiveUsersCardResult>({
    queryKey: [`activeAddressesCountChart/${zone}/${period}`],
    enabled: !!period && !!zone,
  });

  return {
    data: data?.data,
    loading: isLoading,
  };
}
