import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { PERIODS_IN_HOURS_BY_KEY } from 'components';
import { ZoneOverviewActivityDocument } from 'graphql/v2/ZonesPage/ZonePage/__generated__/ZoneOverviewActivity.query.generated';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { handleChartByPeriod } from 'utils/ handleChartByPeriod';
import { ChartItemByString } from 'utils/helper';

export type ZoneOverviewActivityQueryResult = {
  peersCount?: number;
  channelsCount?: number;
  dau?: number | null;
  ibcDau?: number | null;
  ibcDauPercent?: number;
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

  return {
    data: data && {
      ibcTransfers: data.switchedStats[0]?.ibcTransfers,
      peersCount: data.switchedStats[0]?.peersCount,
      channelsCount: data.switchedStats[0]?.channelsCount,
      ibcTransfersPending: data.switchedStats[0]?.ibcTransfersPending,
      ibcTransfersChart: handleChartByPeriod(
        data.switchedStats[0]?.ibcTransfersChart?.slice(),
        period,
        'ibcTransfer'
      ),
      totalTxs: data.stats[0]?.totalTxs,
      totalTxsChart: handleChartByPeriod(data.stats[0]?.totalTxsChart?.slice(), period, 'txs'),
      dau: data.stats[0]?.dau,
      ibcDau: data.stats[0]?.ibcDau,
      ibcDauPercent: data.stats[0]?.ibcDauPercent,
    },
    loading,
  };
}
