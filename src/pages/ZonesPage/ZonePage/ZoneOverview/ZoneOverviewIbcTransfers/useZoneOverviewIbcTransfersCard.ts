import { useQuery } from '@apollo/client';

import {
  ZoneOverviewIbcTransfersCardDocument,
  ZoneOverviewIbcTransfersCardQueryResult,
} from 'graphql/v2/ZonesPage/ZonePage/__generated__/ZoneOverviewIbcTransfers.query.generated';
import { AnalysisCardPeriod } from 'types/AnalysisCardPeriod';
import { ArraysMapping, mergeChartArraysIntoOne } from 'utils/mergeChartArraysIntoOne';

import {
  IbcTransfersChart,
  ZoneOverviewIbcTransfersCardData,
} from './ZoneOverviewIbcTransfersCard.types';
import { useZoneOverviewOptions } from '../hooks/useZoneOverviewOptions';

type IbcTransfersCardApi = ZoneOverviewIbcTransfersCardQueryResult['ibcTransfersCardData'];
type IbcTransfersChartApi = NonNullable<IbcTransfersCardApi>['ibcTransfersChart'][number];
type IbcTransfersInChartApi = NonNullable<IbcTransfersCardApi>['ibcTransfersInChart'][number];
type IbcTransfersOutChartApi = NonNullable<IbcTransfersCardApi>['ibcTransfersOutChart'][number];
type CombinedChartApi = IbcTransfersChartApi & IbcTransfersInChartApi & IbcTransfersOutChartApi;

const chartsMapping: ArraysMapping<IbcTransfersCardApi, CombinedChartApi, IbcTransfersChart> = {
  ibcTransfersChart: {
    from: 'value',
    to: 'ibcTransfersCount',
  },
  ibcTransfersInChart: {
    from: 'value',
    to: 'ibcTransfersInCount',
  },
  ibcTransfersOutChart: {
    from: 'value',
    to: 'ibcTransfersOutCount',
  },
};

export function useZoneOverviewIbcTransfersCard(period: AnalysisCardPeriod): {
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
      ibcTransfersInCount: data?.ibcTransfersCardData?.ibcTransfersIn?.aggregate?.sum?.value,
      ibcTransfersOutCount: data?.ibcTransfersCardData?.ibcTransfersOut?.aggregate?.sum?.value,
      chart: mergeChartArraysIntoOne(data?.ibcTransfersCardData, chartsMapping),
    },
    loading,
  };
}
