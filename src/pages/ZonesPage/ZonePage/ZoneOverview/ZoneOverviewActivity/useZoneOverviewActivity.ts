import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { PERIODS_IN_HOURS_BY_KEY } from 'components';
import { ZoneOverviewActivityDocument } from 'graphql/v1/ZonesPage/ZonePage/__generated__/ZoneOverviewActivity.query.generated';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { ChartItemByString, transformChartData } from 'utils/helper';
import { nullsToUndefined } from 'utils/nullsToUndefinedConverter';

export type ZoneOverviewActivityQueryResult = {
  peersCount?: number;
  channelsCount?: number;
  ibcDauMainnet?: number;
  ibcVolumeChart?: ChartItemByString[];
  ibcVolumeMainnet?: number;
  ibcVolumeInMainnet?: number;
  ibcVolumeOutMainnet?: number;
  ibcVolumeInPercent?: number;
  ibcVolumeOutPercent?: number;
  ibcVolumeInPendingMainnet?: number;
  ibcVolumeOutPendingMainnet?: number;
  ibcTransfers?: number;
  ibcTransfersPending?: number;
  totalTxs?: number;
};

const IBC_VOLUME_CHART_KEY = 'ibcVolumeChart';

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
    data: data?.zoneOverview[0] && {
      ...nullsToUndefined(data.zoneOverview[0]),
      [IBC_VOLUME_CHART_KEY]: transformChartData(
        data?.zoneOverview[0][IBC_VOLUME_CHART_KEY],
        IBC_VOLUME_CHART_KEY
      ),
    },
    loading,
  };
}
