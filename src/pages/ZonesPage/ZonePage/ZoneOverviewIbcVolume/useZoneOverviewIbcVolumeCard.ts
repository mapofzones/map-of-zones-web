import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { OverviewCardPeriod } from 'components/OverviewChartCard';

import {
  ZoneOverviewIbcVolumeCardData,
  ZoneOverviewIbcVolumeCardResult,
} from './ZoneOverviewIbcVolume.types';

export function useZoneOverviewIbcVolumeCard(period: OverviewCardPeriod): {
  data: ZoneOverviewIbcVolumeCardData | undefined;
  loading: boolean;
} {
  const { zone = '' } = useParams();

  const { data, isLoading } = useQuery<ZoneOverviewIbcVolumeCardResult>({
    queryKey: [`ibcVolumeChart/${zone}/${period}`],
    enabled: !!period && !!zone,
  });

  return {
    data: data?.data,
    loading: isLoading,
  };
}
