import { useQuery } from '@apollo/client';

import { PERIODS_IN_HOURS_BY_KEY } from 'components';
import { ZoneCompareInterchainDocument } from 'graphql/v2/ZonesPage/ComparisonPage/__generated__/ZoneCompareInterchain.query.generated';
import { PeriodKeys } from 'types/PeriodKeys';

import { ZoneDetails } from '../../types/ZoneDetails';
import { sortDetailsByZoneKeys } from '../../utils/sortDetailsByZoneKeys';

export interface InterchainData {
  peersCount?: number;
  channelsCount?: number;
}

interface ZonesComparisonInterchainResult extends ZoneDetails, InterchainData {}

export function useZonesComprisonInterchain(
  period: PeriodKeys,
  zones: string[]
): {
  data: ZonesComparisonInterchainResult[];
  loading: boolean;
} {
  const options = {
    variables: { zones: [...zones], period: PERIODS_IN_HOURS_BY_KEY[period], isMainnet: true },
    skip: !zones,
  };

  const { data, loading } = useQuery(ZoneCompareInterchainDocument, options);

  const mappedData: ZonesComparisonInterchainResult[] = (data?.data ?? []).map((item) => ({
    zone: item.zone,
    name: item.name,
    peersCount: item?.switchedStats[0]?.peersCount,
    channelsCount: item?.switchedStats[0]?.channelsCount,
  }));

  const sortedZones = sortDetailsByZoneKeys(zones, mappedData);

  return {
    data: sortedZones,
    loading,
  };
}
