import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { ZoneDetailsDocument } from 'graphql/v2/HomePage/Sidebar/ZoneDetails/__generated__/ZoneDetails.query.generated';
import { ZoneBase } from 'types/models/ZoneDetails';

export interface ZoneDetails extends ZoneBase {
  website?: string | null;
  logoUrl?: string | null;
}

export function useZoneDetails(): { data: ZoneDetails | undefined; loading: boolean } {
  const { zone = '' } = useParams();

  const options = { variables: { zone }, skip: !zone };

  const { data, loading } = useQuery(ZoneDetailsDocument, options);

  return { data: data?.zoneDetails[0], loading };
}
