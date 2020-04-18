import { useMemo } from 'react';
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

  const ibcTxs = chart.reduce((acc, { txs }) => acc + txs, 0);
  const topZonePair = top_zone_pair[0];
  const mostActiveZonesPair = topZonePair
    ? {
        source: topZonePair.source,
        target: topZonePair.target,
        ibc: topZonePair.ibc,
        sourceColor: getZoneColor(
          topZonePair.source_to_target_txs / topZonePair.ibc,
        ),
        targetColor: getZoneColor(
          topZonePair.target_to_source_txs / topZonePair.ibc,
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
  const transformedData = useMemo(() => transform(data), [data]);

  return { ...rest, data: transformedData };
};
