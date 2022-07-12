import { useMemo } from 'react';

import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { ZoneDetailsDocument } from 'graphql/HomePage/Sidebar/ZoneDetails/__generated__/ZoneDetails.generated';

export function useZoneDetails() {
  const { zone = '' } = useParams();

  const options = useMemo(() => ({ variables: { zone }, skip: !zone }), [zone]);

  const { data } = useQuery(ZoneDetailsDocument, options);

  return useMemo(() => data?.zoneDetails[0], [data]);
}