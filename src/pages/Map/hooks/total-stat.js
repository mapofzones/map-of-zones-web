import { useMemo } from 'react';
import gql from 'graphql-tag';

import { getZoneColor } from 'common/helper';
import { useRealtimeQuery } from 'common/hooks';

const TOTAL_STAT_FRAGMENT = gql`
  fragment header on headers {
    zones_cnt_period
    zones_cnt_all
    top_zone_pair
    channels_cnt_period
    channels_cnt_all
    chart
  }
`;

const TOTAL_STAT_QUERY = gql`
  query TotalStat($period: Int!) {
    headers(where: { timeframe: { _eq: $period } }) {
      ...header
    }
  }
  ${TOTAL_STAT_FRAGMENT}
`;

const TOTAL_STAT_SUBSCRIPTION = gql`
  subscription TotalStat($period: Int!) {
    headers(where: { timeframe: { _eq: $period } }) {
      ...header
    }
  }
  ${TOTAL_STAT_FRAGMENT}
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
  } = data.headers[0];

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
  const data = useRealtimeQuery(
    TOTAL_STAT_QUERY,
    TOTAL_STAT_SUBSCRIPTION,
    options,
  );

  return useMemo(() => transform(data), [data]);
};
