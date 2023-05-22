import { useQuery } from '@apollo/client';

import { PERIODS_IN_HOURS_BY_KEY } from 'components';
import { ZonesListZoneDetailsDocument } from 'graphql/v2/ZonesPage/ZonePage/__generated__/ZoneDetails.query.generated';
import { useMainnet } from 'hooks/useMainnet';
import { ZoneBase } from 'types/models/ZoneDetails';
import { PeriodKeys } from 'types/PeriodKeys';

export interface ZonesListZoneDetails extends ZoneBase {
  git?: string | null;
  isZoneUpToDate?: boolean | null;
  logoUrl?: string | null;
  peersCount?: number | null;
  telegram?: string | null;
  twitter?: string | null;
  website?: string | null;
}

export function useZonesListZoneDetails(zone: string): {
  data: ZonesListZoneDetails | undefined;
  loading: boolean;
} {
  const [isMainnet] = useMainnet();

  const options = {
    variables: { zone, timeframe: PERIODS_IN_HOURS_BY_KEY[PeriodKeys.DAY], isMainnet },
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
      ...zoneDetails.switchedStats[0],
    },
    loading,
  };
}
