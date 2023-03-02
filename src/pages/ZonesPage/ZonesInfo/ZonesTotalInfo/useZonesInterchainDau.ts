import { useQuery } from '@tanstack/react-query';

export interface ZonesTotalInterchainDau {
  totalInterchainUniqueActiveAddressesDay: number;
  totalInterchainUniqueActiveAddressesWeek: number;
  totalInterchainUniqueActiveAddressesMonth: number;
}

interface ZonesTotalInterchainDauResult {
  data: ZonesTotalInterchainDau;
}

export function useZonesIntercahinDau(): {
  data: ZonesTotalInterchainDau | undefined;
  loading: boolean;
} {
  const { data, isLoading } = useQuery<ZonesTotalInterchainDauResult>({
    queryKey: [`interchainActiveAddressesCountStats`],
  });

  return {
    data: data?.data,
    loading: isLoading,
  };
}
