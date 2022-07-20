import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { ZoneDetailsDocument } from 'graphql/HomePage/Sidebar/ZoneDetails/__generated__/ZoneDetails.generated';

export interface ZoneDetails {
  zone: string;
  website?: string | null;
  logoUrl?: string | null;
  name: string;
}

export function useZoneDetails(): { data: ZoneDetails | undefined; loading: boolean } {
  const { zone = '' } = useParams();

  const options = { variables: { zone }, skip: !zone };

  const { data, loading } = useQuery(ZoneDetailsDocument, options);

  return { data: data?.zoneDetails[0], loading };
}
