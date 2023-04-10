import { useQuery } from '@apollo/client';

import { ZonesDataDocument } from 'graphql/v2/common/Zones/__generated__/ZonesData.query.generated';

export interface ZoneData {
  logoUrl?: string | null;
  name: string;
  zone: string;
}

export function useZonesData(isMainnet = true): {
  data: ZoneData[];
  loading: boolean;
} {
  const options = {
    variables: {
      isMainnet: isMainnet,
    },
  };

  const { data, loading } = useQuery(ZonesDataDocument, options);

  return { data: data?.zonesData ?? [], loading };
}
