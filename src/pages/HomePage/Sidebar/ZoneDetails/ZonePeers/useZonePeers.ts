import { useMemo } from 'react';

import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { ZonePeersDocument } from 'graphql/HomePage/Sidebar/ZoneDetails/__generated__/ZonePeers.generated';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import { PERIODS } from '../../ZonesInfo/Types';

export function useZonePeers() {
  const { zone = '' } = useParams();
  const [selectedPeriod] = useSelectedPeriod();

  const options = useMemo(
    () => ({ variables: { source: zone, period: PERIODS[selectedPeriod] }, skip: !zone }),
    [zone, selectedPeriod]
  );

  const { data, loading } = useQuery(ZonePeersDocument, options);

  return useMemo(() => ({ data: data?.zonePeers, loading }), [data, loading]);
}
