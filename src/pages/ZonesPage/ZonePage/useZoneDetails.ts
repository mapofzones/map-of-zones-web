import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { ZonesListZoneDetailsDocument } from 'graphql/ZonesPage/ZonePage/__generated__/ZoneDetails.generated';

export interface ZoneDetails {
  zone: string;
  isZoneUpToDate?: boolean | null;
  logoUrl?: string | null;
  name: string;
  peersCount?: number | null;
  website?: string | null;
}

export function useZoneDetails(): { data: ZoneDetails | undefined; loading: boolean } {
  const { zone = '' } = useParams();

  const options = { variables: { zone }, skip: !zone };

  const { data, loading } = useQuery(ZonesListZoneDetailsDocument, options);

  return { data: data?.zoneDetails[0], loading };
}