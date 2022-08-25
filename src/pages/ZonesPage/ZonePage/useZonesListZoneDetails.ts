import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { ZonesListZoneDetailsDocument } from 'graphql/ZonesPage/ZonePage/__generated__/ZoneDetails.generated';

export interface ZonesListZoneDetails {
  git?: string | null;
  isZoneUpToDate?: boolean | null;
  logoUrl?: string | null;
  name: string;
  peersCount?: number | null;
  telegram?: string | null;
  twitter?: string | null;
  website?: string | null;
  zone: string;
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
