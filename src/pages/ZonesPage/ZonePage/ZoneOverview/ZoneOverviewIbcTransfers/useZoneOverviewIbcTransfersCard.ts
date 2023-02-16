import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { OverviewCardPeriod, OVERVIEW_PERIODS_IN_HOURS_BY_KEY } from 'components/OverviewChartCard';
import {
  ZoneOverviewIbcTransfersCardDocument,
  ZoneOverviewIbcTransfersCardQueryResult,
} from 'graphql/v2/ZonesPage/ZonePage/__generated__/ZoneOverviewIbcTransfers.query.generated';
import { ArraysMapping, mergeChartArraysIntoOne } from 'utils/mergeChartArraysIntoOne';

import {
  IbcTransfersChart,
  ZoneOverviewIbcTransfersCardData,
} from './ZoneOverviewIbcTransfersCard.types';

type IbcTransfersCardApi = ZoneOverviewIbcTransfersCardQueryResult['ibcTransfersCardData'][number];
type IbcTransfersChartApi = IbcTransfersCardApi['ibcTransfersChart'][number];
type IbcTransfersPendingChartApi = IbcTransfersCardApi['ibcTransfersPendingChart'][number];

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
  const { zone = '' } = useParams();

  const options = {
    variables: { zone, period: OVERVIEW_PERIODS_IN_HOURS_BY_KEY[period], isMainnet: true },
    skip: !zone,
  };

  const { data, loading } = useQuery<ZoneOverviewIbcTransfersCardQueryResult>(
    ZoneOverviewIbcTransfersCardDocument,
    options
  );

  return {
    data: {
      totalIbcTransfersCount: data?.ibcTransfersCardData[0]?.ibcTransfers,
      totalPending: data?.ibcTransfersCardData[0]?.ibcTransfersPending,
      chart: mergeChartArraysIntoOne(data?.ibcTransfersCardData[0], chartsMapping),
    },
    loading,
  };
}
