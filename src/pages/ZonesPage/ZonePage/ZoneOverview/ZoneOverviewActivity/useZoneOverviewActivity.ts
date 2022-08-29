import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { PERIODS_IN_HOURS_BY_KEY } from 'components';
import { ZoneOverviewActivityDocument } from 'graphql/v2/ZonesPage/ZonePage/__generated__/ZoneOverviewActivity.query.generated';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { ChartItemByString } from 'utils/helper';

export type ZoneOverviewActivityQueryResult = {
  peersCount?: number;
  channelsCount?: number;
  ibcDau?: number;
  totalTxs?: number;
  totalTxsChart: ChartItemByString[];
  ibcTransfers?: number;
  ibcTransfersPending?: number;
  ibcTransfersChart: ChartItemByString[];
};

export function useZoneOverviewActivity(): {
  data: ZoneOverviewActivityQueryResult | undefined;
  loading: boolean;
} {
  const { zone = '' } = useParams();

  const [period] = useSelectedPeriod();

  const options = {
    variables: { zone, period: PERIODS_IN_HOURS_BY_KEY[period], isMainnet: true },
    skip: !zone,
  };

  const { data, loading } = useQuery(ZoneOverviewActivityDocument, options);
  console.log(data);

  return {
    data: data && {
      ...data.switchedStats[0],
      ...data.stats[0],
    },
    loading,
  };
}
