import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { PERIODS_IN_HOURS_BY_KEY } from 'components';
import { ZoneOverviewActivityDocument } from 'graphql/ZonesPage/ZonePage/__generated__/ZoneOverviewActivity.query.generated';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { nullsToUndefined } from 'utils/nullsToUndefinedConverter';

export type ZoneOverviewActivityQueryResult = {
  peersCount?: number;
  channelsCount?: number;
  ibcDauMainnet?: number;
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
    data: nullsToUndefined(data?.zoneOverview[0]),
    loading,
  };
}
