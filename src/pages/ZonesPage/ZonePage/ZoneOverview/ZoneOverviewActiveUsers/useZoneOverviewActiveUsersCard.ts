import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import {
  OverviewCardPeriod,
  OVERVIEW_PERIODS_API_KEYS,
} from 'components/OverviewChartCardWithMetadata';

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
    queryKey: [`activeAddressesCountChart/${zone}/${OVERVIEW_PERIODS_API_KEYS[period]}`],
    enabled: !!period && !!zone,
  });

  return {
    data: data?.data,
    loading: isLoading,
  };
}
