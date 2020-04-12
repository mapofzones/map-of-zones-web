import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import { getZoneColor } from 'common/helper';

const TOTAL_STAT = gql`
  query TotalStat($period: Int!, $step: Int!) {
    get_total_stats(args: { period_in_hours: $period, step_in_hours: $step }) {
      zones_cnt_period
      zones_cnt_all
      top_zone_pair
      channels_cnt_period
      channels_cnt_all
      chart
    }
  }
`;

const transform = data => {
  if (!data) {
    return data;
  }

  const {
    zones_cnt_period,
    zones_cnt_all,
    top_zone_pair,
    channels_cnt_period,
    channels_cnt_all,
    chart,
  } = data.get_total_stats[0];

  const sourceSent = 10; // TODO: tmp data

  const ibcTxs = chart.reduce((acc, { txs }) => acc + txs, 0);
  const mostActiveZonesPair = top_zone_pair[0]
    ? {
        ...top_zone_pair[0],
        sourceColor: getZoneColor(sourceSent / top_zone_pair[0].ibc),
        targetColor: getZoneColor(
          (top_zone_pair[0].ibc - sourceSent) / top_zone_pair[0].ibc,
        ),
      }
    : null;

  return {
    ibcTxs,
    mostActiveZonesPair,
    ibcTxsActivity: chart,
    allZones: zones_cnt_all,
    activeZones: zones_cnt_period,
    allChannels: channels_cnt_all,
    activeChannels: channels_cnt_period,
  };
};

export const useTotalStat = options => {
  const { data, ...rest } = useQuery(TOTAL_STAT, options);

  return { ...rest, data: transform(data) };
};
