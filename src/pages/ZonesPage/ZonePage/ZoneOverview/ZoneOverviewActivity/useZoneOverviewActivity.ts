import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { PERIODS_IN_HOURS_BY_KEY } from 'components';
import { ZoneOverviewActivityDocument } from 'graphql/ZonesPage/ZonePage/__generated__/ZoneOverviewActivity.query.generated';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

export type ZoneOverviewActivityQueryResult = {
  peersCount?: number | null;
  channelsCount?: number | null;
  ibcDauMainnet?: number | null;
  ibcVolumeMainnet?: number | null;
  ibcVolumeInMainnet?: number | null;
  ibcVolumeOutMainnet?: number | null;
  ibcVolumeInPercent?: number | null;
  ibcVolumeOutPercent?: number | null;
  ibcVolumeInPendingMainnet?: number | null;
  ibcVolumeOutPendingMainnet?: number | null;
  ibcTransfers?: number | null;
  ibcTransfersPending?: number | null;
  totalTxs?: number | null;
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

  return { data: data?.zoneOverview[0], loading };
}
