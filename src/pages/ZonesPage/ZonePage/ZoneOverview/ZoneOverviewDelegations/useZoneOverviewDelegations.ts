import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import {
  ZoneOverviewDelegationsCardData,
  ZoneOverviewDelegationsCardResult,
} from './ZoneOverviewDelegations.types';

export function useZoneOverviewDelegations(): {
  data: ZoneOverviewDelegationsCardData | undefined;
  loading: boolean;
} {
  return {
    data: {
      totalDelegated: 142534,
      totalUndelegated: 10444,
      chart: [
        {
          time: 1,
          delegated: 1000,
          undelegated: 200,
        },
        {
          time: 2,
          delegated: 2000,
          undelegated: 1000,
        },
        {
          time: 3,
          delegated: 1200,
          undelegated: 500,
        },
        {
          time: 4,
          delegated: 800,
          undelegated: 200,
        },
      ],
    },
    loading: false,
  };
  const { zone = '' } = useParams();
  const [period] = useSelectedPeriod();

  const { data, isLoading } = useQuery<ZoneOverviewDelegationsCardResult>({
    queryKey: [`ibcTransferChart/${zone}/${period}`],
  });

  return {
    data: data?.data,
    loading: isLoading,
  };
}
