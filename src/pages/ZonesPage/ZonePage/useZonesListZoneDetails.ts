import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { PERIODS_IN_HOURS_BY_KEY } from 'components';
import { ZonesListZoneDetailsDocument } from 'graphql/v2/ZonesPage/ZonePage/__generated__/ZoneDetails.query.generated';
import { useMainnet } from 'hooks/useMainnet';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

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

  const [period] = useSelectedPeriod();

  const [isMainnet] = useMainnet();

  const options = {
    variables: { zone, timeframe: PERIODS_IN_HOURS_BY_KEY[period], isMainnet },
    skip: !zone,
  };

  const { data, loading } = useQuery(ZonesListZoneDetailsDocument, options);

  const zoneDetails = data?.zoneDetails[0];

  return {
    data: zoneDetails && {
      zone: zoneDetails.zone,
      name: zoneDetails.name,
      logoUrl: zoneDetails.logoUrl,
      website: zoneDetails.website,
      isZoneUpToDate: zoneDetails.isZoneUpToDate,
      peersCount: zoneDetails.stats[0]?.peersCount,
    },
    loading,
  };
}
