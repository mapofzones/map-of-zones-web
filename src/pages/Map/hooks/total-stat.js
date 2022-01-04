import { useMemo } from 'react';
import gql from 'graphql-tag';

import { getNodeColor } from 'common/helper';
import { useRealtimeQuery } from 'common/hooks';

const TOTAL_STAT_FRAGMENT = gql`
  fragment header on headers {
    zones_cnt_period
    zones_cnt_all
    top_zone_pair
    channels_cnt_period
    channels_cnt_all
    chart
    ibc_cashflow_period
    top_ibc_cashflow_zone_pair
  }
`;

const TOTAL_STAT_QUERY = gql`
  query TotalStat($period: Int!) {
    headers(
      where: { timeframe: { _eq: $period }, is_mainnet_only: { _eq: false } }
    ) {
      ...header
    }
  }
  ${TOTAL_STAT_FRAGMENT}
`;

const TOTAL_STAT_SUBSCRIPTION = gql`
  subscription TotalStat($period: Int!) {
    headers(
      where: { timeframe: { _eq: $period }, is_mainnet_only: { _eq: false } }
    ) {
      ...header
    }
  }
  ${TOTAL_STAT_FRAGMENT}
`;

const TOTAL_STAT_QUERY_ONLY_MAINNET = gql`
  query TotalStat($period: Int!) {
    headers(
      where: { timeframe: { _eq: $period }, is_mainnet_only: { _eq: true } }
    ) {
      ...header
    }
  }
  ${TOTAL_STAT_FRAGMENT}
`;

const TOTAL_STAT_SUBSCRIPTION_ONLY_MAINNET = gql`
  subscription TotalStat($period: Int!) {
    headers(
      where: { timeframe: { _eq: $period }, is_mainnet_only: { _eq: true } }
    ) {
      ...header
    }
  }
  ${TOTAL_STAT_FRAGMENT}
`;

const transform = data => {
  if (!data?.headers?.[0]) {
    return data;
  }

  const {
    zones_cnt_period,
    zones_cnt_all,
    top_zone_pair,
    channels_cnt_period,
    channels_cnt_all,
    ibc_cashflow_period,
    top_ibc_cashflow_zone_pair,
    chart,
  } = data.headers[0];

  const ibcTxs = chart.reduce((acc, { txs }) => acc + txs, 0);
  const topZonePair = top_zone_pair && top_zone_pair[0];
  const topIbcCashflowZonePair =
    top_ibc_cashflow_zone_pair && top_ibc_cashflow_zone_pair[0];
  const mostActiveZonesPair = topZonePair
    ? {
        source: topZonePair.source,
        target: topZonePair.target,
        ibc: topZonePair.ibc,
        sourceColor: getNodeColor(
          topZonePair.source_to_target_txs / topZonePair.ibc,
        ),
        targetColor: getNodeColor(
          topZonePair.target_to_source_txs / topZonePair.ibc,
        ),
      }
    : null;
  const biggestVolumePair = topIbcCashflowZonePair
    ? {
        source: topIbcCashflowZonePair.source,
        target: topIbcCashflowZonePair.target,
        volume: topIbcCashflowZonePair.cashflow,
        sourceColor: getNodeColor(
          topIbcCashflowZonePair.source_to_target_cashflow /
            topIbcCashflowZonePair.cashflow,
        ),
        targetColor: getNodeColor(
          topIbcCashflowZonePair.target_to_source_cashflow /
            topIbcCashflowZonePair.cashflow,
        ),
      }
    : null;

  return {
    ibcTxs,
    mostActiveZonesPair,
    biggestVolumePair,
    ibcVolume: ibc_cashflow_period,
    ibcTxsActivity: chart,
    allZones: zones_cnt_all,
    activeZones: zones_cnt_period,
    allChannels: channels_cnt_all,
    activeChannels: channels_cnt_period,
  };
};

export const useTotalStat = (options, isTestnetVisible) => {
  let data = useRealtimeQuery(
    TOTAL_STAT_QUERY,
    TOTAL_STAT_SUBSCRIPTION,
    options,
  );

  let mainnetData = useRealtimeQuery(
    TOTAL_STAT_QUERY_ONLY_MAINNET,
    TOTAL_STAT_SUBSCRIPTION_ONLY_MAINNET,
    options,
  );

  return useMemo(() => transform(isTestnetVisible ? data : mainnetData), [
    data,
    isTestnetVisible,
    mainnetData,
  ]);
};
