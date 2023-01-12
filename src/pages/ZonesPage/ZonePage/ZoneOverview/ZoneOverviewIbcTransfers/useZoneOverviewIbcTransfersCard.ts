import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import {
  ZoneOverviewIbcTransfersCardData,
  ZoneOverviewIbcTransfersCardResult,
} from './ZoneOverviewIbcTransfersCard.types';

export function useZoneOverviewIbcTransfersCard(): {
  data: ZoneOverviewIbcTransfersCardData | undefined;
  loading: boolean;
} {
  const { zone = '' } = useParams();
  const [period] = useSelectedPeriod();

  const { data, isLoading } = useQuery<ZoneOverviewIbcTransfersCardResult>({
    queryKey: [`ibcTransferChart/${zone}/${period}`],
  });

  return {
    data: data?.data,
    loading: isLoading,
  };
}
