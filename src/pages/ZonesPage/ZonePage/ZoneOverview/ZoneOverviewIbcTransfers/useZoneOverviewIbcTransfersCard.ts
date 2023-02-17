import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { OverviewCardPeriod, OVERVIEW_PERIODS_IN_HOURS_BY_KEY } from 'components/OverviewChartCard';
import {
  ZoneOverviewIbcTransfersCardDocument,
  ZoneOverviewIbcTransfersCardQueryResult,
} from 'graphql/v2/ZonesPage/ZonePage/__generated__/ZoneOverviewIbcTransfers.query.generated';
import { ArraysMapping, mergeChartArraysIntoOne } from 'utils/mergeChartArraysIntoOne';

import { useZoneOverviewOptions } from '../hooks/useZoneOverviewOptions';
import {
  IbcTransfersChart,
  ZoneOverviewIbcTransfersCardData,
} from './ZoneOverviewIbcTransfersCard.types';

type IbcTransfersCardApi = ZoneOverviewIbcTransfersCardQueryResult['ibcTransfersCardData'];
type IbcTransfersChartApi = NonNullable<IbcTransfersCardApi>['ibcTransfersChart'][number];
type IbcTransfersPendingChartApi =
  NonNullable<IbcTransfersCardApi>['ibcTransfersPendingChart'][number];

const chartsMapping: ArraysMapping<
  IbcTransfersCardApi,
  IbcTransfersChartApi & IbcTransfersPendingChartApi,
  IbcTransfersChart
> = {
  ibcTransfersChart: {
    from: 'ibcTransfer',
    to: 'ibcTransfersCount',
  },
  ibcTransfersPendingChart: {
    from: 'pending',
    to: 'pending',
  },
};

export function useZoneOverviewIbcTransfersCard(period: OverviewCardPeriod): {
  data: ZoneOverviewIbcTransfersCardData | undefined;
  loading: boolean;
} {
  const options = useZoneOverviewOptions(period);

  const { data, loading } = useQuery<ZoneOverviewIbcTransfersCardQueryResult>(
    ZoneOverviewIbcTransfersCardDocument,
    options
  );

  return {
    data: {
      totalIbcTransfersCount: data?.ibcTransfersCardData?.ibcTransfers?.aggregate?.sum?.value,
      totalPending: data?.ibcTransfersCardData?.ibcTransfersPending,
      chart: mergeChartArraysIntoOne(data?.ibcTransfersCardData, chartsMapping),
    },
    loading,
  };
}
