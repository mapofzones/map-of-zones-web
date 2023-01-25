import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import {
  ZoneOverviewIbcVolumeCardData,
  ZoneOverviewIbcVolumeCardResult,
} from './ZoneOverviewIbcVolume.types';

export function useZoneOverviewIbcVolumeCard(): {
  data: ZoneOverviewIbcVolumeCardData | undefined;
  loading: boolean;
} {
  const { zone = '' } = useParams();
  const [period] = useSelectedPeriod();

  const { data, isLoading } = useQuery<ZoneOverviewIbcVolumeCardResult>({
    queryKey: [`ibcVolumeChart/${zone}/${period}`],
    enabled: !!period && !!zone,
  });

  return {
    data: data?.data,
    loading: isLoading,
  };
}
