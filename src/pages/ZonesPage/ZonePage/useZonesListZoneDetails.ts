import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { ZonesListZoneDetailsDocument } from 'graphql/v1/ZonesPage/ZonePage/__generated__/ZoneDetails.query.generated';

export interface ZonesListZoneDetails {
  zone: string;
  isZoneUpToDate?: boolean | null;
  logoUrl?: string | null;
  name: string;
  peersCount?: number | null;
  website?: string | null;
}

export function useZonesListZoneDetails(): {
  data: ZonesListZoneDetails | undefined;
  loading: boolean;
} {
  const { zone = '' } = useParams();

  const options = { variables: { zone }, skip: !zone };

  const { data, loading } = useQuery(ZonesListZoneDetailsDocument, options);

  return { data: data?.zoneDetails[0], loading };
}
