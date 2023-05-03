import { useQuery } from '@apollo/client';

import { OverviewCardPeriod } from 'components/OverviewChartCardWithMetadata';
import {
  ZoneOverviewIbcVolumeDocument,
  ZoneOverviewIbcVolumeQueryResult,
} from 'graphql/v2/ZonesPage/ZonePage/__generated__/ZoneOverviewIbcVolume.query.generated';
import { ArraysMapping, mergeChartArraysIntoOne } from 'utils/mergeChartArraysIntoOne';

import { IbcVolumeChart, ZoneOverviewIbcVolumeCardData } from './ZoneOverviewIbcVolume.types';
import { useZoneOverviewOptions } from '../hooks/useZoneOverviewOptions';

type IbcVolumeCardApi = ZoneOverviewIbcVolumeQueryResult['ibcVolumeCardData'];
type IbcVolumeChartApi = NonNullable<IbcVolumeCardApi>['ibcVolumeInChart'][number];
type IbcVolumeInChartApi = NonNullable<IbcVolumeCardApi>['ibcVolumeInChart'][number];
type IbcVolumeOutChartApi = NonNullable<IbcVolumeCardApi>['ibcVolumeOutChart'][number];

const chartsMapping: ArraysMapping<
  IbcVolumeCardApi,
  IbcVolumeChartApi & IbcVolumeInChartApi & IbcVolumeOutChartApi,
  IbcVolumeChart
> = {
  ibcVolumeChart: {
    from: 'volume',
    to: 'total',
  },
  ibcVolumeInChart: {
    from: 'volumeIn',
    to: 'ibcIn',
  },
  ibcVolumeOutChart: {
    from: 'volumeOut',
    to: 'ibcOut',
  },
};

export function useZoneOverviewIbcVolumeCard(period: OverviewCardPeriod): {
  data: ZoneOverviewIbcVolumeCardData | undefined;
  loading: boolean;
} {
  const options = useZoneOverviewOptions(period);

  const { data, loading } = useQuery<ZoneOverviewIbcVolumeQueryResult>(
    ZoneOverviewIbcVolumeDocument,
    options
  );

  return {
    data: {
      totalIbc: data?.ibcVolumeCardData?.ibcVolume.aggregate?.sum?.volume,
      totalIbcIn: data?.ibcVolumeCardData?.ibcVolumeIn.aggregate?.sum?.volumeIn,
      totalIbcOut: data?.ibcVolumeCardData?.ibcVolumeOut.aggregate?.sum?.volumeOut,
      chart: mergeChartArraysIntoOne(data?.ibcVolumeCardData, chartsMapping),
    },
    loading,
  };
}
