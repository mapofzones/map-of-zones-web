import { useQuery } from '@apollo/client';

import { PERIODS_IN_HOURS_BY_KEY } from 'components';
import { PeriodKeys } from 'components/PeriodSelector/Types';
import { ZoneCompareInterchainDocument } from 'graphql/v2/ZonesPage/ComparisonPage/__generated__/ZoneCompareInterchain.query.generated';

export interface InterchainData {
  peersCount?: number;
  channelsCount?: number;
}

export function useZonesComprisonInterchain(
  period: PeriodKeys,
  zones: string[]
): {
  zones: { zone: string; zoneName: string }[];
  interchainData: InterchainData[];
  loading: boolean;
} {
  const options = {
    variables: { zones: [...zones], period: PERIODS_IN_HOURS_BY_KEY[period], isMainnet: true },
    skip: !zones,
  };

  const { data, loading } = useQuery(ZoneCompareInterchainDocument, options);

  return {
    zones: data?.data?.map((item) => ({ zone: item.zone, zoneName: item.name })) ?? [],
    interchainData:
      data?.data?.map((item) => ({
        peersCount: item?.switchedStats[0]?.peersCount,
        channelsCount: item?.switchedStats[0]?.channelsCount,
      })) ?? [],

    loading,
  };
}
