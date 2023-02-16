import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { OverviewCardPeriod, OVERVIEW_PERIODS_IN_HOURS_BY_KEY } from 'components/OverviewChartCard';
import {
  ZoneOverviewIbcVolumeDocument,
  ZoneOverviewIbcVolumeQueryResult,
} from 'graphql/v2/ZonesPage/ZonePage/__generated__/ZoneOverviewIbcVolume.query.generated';
import { ArraysMapping, mergeChartArraysIntoOne } from 'utils/mergeChartArraysIntoOne';

import { IbcVolumeChart, ZoneOverviewIbcVolumeCardData } from './ZoneOverviewIbcVolume.types';

type IbcVolumeCardApi = ZoneOverviewIbcVolumeQueryResult['ibcVolumeCardData'][number];
type IbcVolumeChartApi = IbcVolumeCardApi['ibcVolumeChart'][number];
type IbcVolumeInChartApi = IbcVolumeCardApi['ibcVolumeInChart'][number];
type IbcVolumeOutChartApi = IbcVolumeCardApi['ibcVolumeOutChart'][number];

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
  const { zone = '' } = useParams();

  const options = {
    variables: { zone, period: OVERVIEW_PERIODS_IN_HOURS_BY_KEY[period], isMainnet: true },
    skip: !zone,
  };

  const { data, loading } = useQuery<ZoneOverviewIbcVolumeQueryResult>(
    ZoneOverviewIbcVolumeDocument,
    options
  );

  return {
    data: {
      totalIbc: data?.ibcVolumeCardData[0]?.ibcVolume,
      totalIbcIn: data?.ibcVolumeCardData[0]?.ibcVolumeIn,
      totalIbcOut: data?.ibcVolumeCardData[0]?.ibcVolumeOut,
      chart: mergeChartArraysIntoOne(data?.ibcVolumeCardData[0], chartsMapping),
    },
    loading,
  };
}
