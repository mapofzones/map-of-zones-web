import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

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

  const ibcTxs = chart.reduce((acc, { txs }) => acc + txs, 0);

  return {
    ibcTxs,
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
