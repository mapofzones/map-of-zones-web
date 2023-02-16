import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { OverviewCardPeriod, OVERVIEW_PERIODS_IN_HOURS_BY_KEY } from 'components/OverviewChartCard';
import { ZoneOverviewIbcVolumeDocument } from 'graphql/v2/ZonesPage/ZonePage/__generated__/ZoneOverviewIbcVolume.query.generated';

import { ZoneOverviewIbcVolumeCardData } from './ZoneOverviewIbcVolume.types';

export function useZoneOverviewIbcVolumeCard(period: OverviewCardPeriod): {
  data: ZoneOverviewIbcVolumeCardData | undefined;
  loading: boolean;
} {
  const { zone = '' } = useParams();

  const options = {
    variables: { zone, period: OVERVIEW_PERIODS_IN_HOURS_BY_KEY[period], isMainnet: true },
    skip: !zone,
  };

  const { data, loading } = useQuery(ZoneOverviewIbcVolumeDocument, options);

  return {
    data: {
      totalIbc: data?.ibcVolumeCardData[0]?.ibcVolume,
      totalIbcIn: data?.ibcVolumeCardData[0]?.ibcVolumeIn,
      totalIbcOut: data?.ibcVolumeCardData[0]?.ibcVolumeOut,
      chart: mapArrayOfCharts(data?.ibcVolumeCardData[0]),
    },
    loading,
  };
}

function mapArrayOfCharts(data: any) {
  if (!data) {
    return [];
  }

  const chartByTime: { [key: number]: any } = {};

  Object.keys(mapping).forEach((chartName: string) => {
    data[chartName].forEach((value: any) => {
      if (!chartByTime[value.time]) {
        chartByTime[value.time] = {
          time: value.time,
        };
      }
      chartByTime[value.time][mapping[chartName].to] = value[mapping[chartName].from];
    });
  });

  return Object.values(chartByTime);
}

const mapping: Record<string, { from: string; to: string }> = {
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
