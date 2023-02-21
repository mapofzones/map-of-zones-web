import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { PeriodKeys, PERIODS_IN_HOURS_BY_KEY } from 'components';
import {
  ZoneOverviewInterchainDocument,
  ZoneOverviewInterchainQueryResult,
} from 'graphql/v2/ZonesPage/ZonePage/__generated__/ZoneOverviewInterchain.query.generated';

export type ZoneOverviewInterchainResult = {
  peersCount?: number;
  channelsCount?: number;
};

export function useZoneOverviewInterchain(): {
  data: ZoneOverviewInterchainResult | undefined;
  loading: boolean;
} {
  const { zone = '' } = useParams();

  const options = {
    variables: { zone, period: PERIODS_IN_HOURS_BY_KEY[PeriodKeys.DAY], isMainnet: true },
    skip: !zone,
  };

  const { data, loading } = useQuery<ZoneOverviewInterchainQueryResult>(
    ZoneOverviewInterchainDocument,
    options
  );

  return {
    data: data && {
      peersCount: data?.switchedStats?.peersCount,
      channelsCount: data?.switchedStats?.channelsCount,
    },
    loading,
  };
}
