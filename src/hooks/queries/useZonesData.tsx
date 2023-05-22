import { useQuery } from '@apollo/client';

import { ZonesDataDocument } from 'graphql/v2/common/Zones/__generated__/ZonesData.query.generated';
import { ZoneBase } from 'types/models/ZoneDetails';

export interface ZoneData extends ZoneBase {
  logoUrl?: string | null;
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
