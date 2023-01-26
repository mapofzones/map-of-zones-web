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
  const { zone = '' } = useParams();
  const [period] = useSelectedPeriod();

  const { data, isLoading } = useQuery<ZoneOverviewActiveUsersCardResult>({
    queryKey: [`activeAddressesCountChart/${zone}/${period}`],
    enabled: !!period && !!zone,
  });

  return {
    data: data?.data,
    loading: isLoading,
  };
}
