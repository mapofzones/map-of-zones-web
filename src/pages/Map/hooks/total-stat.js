import { useMemo } from 'react';
import gql from 'graphql-tag';

import { getNodeColor } from 'common/helper';
import { useRealtimeQuery } from 'common/hooks';

const TOTAL_STAT_FRAGMENT = gql`
  fragment header on headers {
    zones_cnt_period
    zones_cnt_all
    top_transfer_zone_pair
    channels_cnt_period
    channels_cnt_all
    chart_cashflow
    chart_transfers
    ibc_cashflow_period
    ibc_cashflow_pending_period
    ibc_transfers_period
    ibc_transfers_pending_period
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
    top_transfer_zone_pair,
    channels_cnt_period,
    channels_cnt_all,
    ibc_cashflow_period,
    ibc_transfers_period,
    ibc_cashflow_pending_period,
    ibc_transfers_pending_period,
    top_ibc_cashflow_zone_pair,
    chart_cashflow,
    chart_transfers,
  } = data.headers[0];

  // txs_diff
  const topTransferZonePair =
    top_transfer_zone_pair && top_transfer_zone_pair[0];
  const topIbcCashflowZonePair =
    top_ibc_cashflow_zone_pair && top_ibc_cashflow_zone_pair[0];
  const mostActiveByTxsZonesPair = topTransferZonePair
    ? {
        txsPending: topTransferZonePair.txs_pending,
        source: topTransferZonePair.source,
        target: topTransferZonePair.target,
        txs: topTransferZonePair.txs,
        sourceColor: getNodeColor(
          topTransferZonePair.source_to_target_txs / topTransferZonePair.txs,
        ),
        targetColor: getNodeColor(
          topTransferZonePair.target_to_source_txs / topTransferZonePair.txs,
        ),
      }
    : null;
  const mostActiveByVolumeZonesPair = topIbcCashflowZonePair
    ? {
        source: topIbcCashflowZonePair.source,
        target: topIbcCashflowZonePair.target,
        volume: topIbcCashflowZonePair.cashflow,
        volumePending: topTransferZonePair.cashflow_pending,
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
    mostActiveByTxsZonesPair,
    mostActiveByVolumeZonesPair,
    ibcVolume: ibc_cashflow_period,
    ibcTxs: ibc_transfers_period,
    ibcVolumePending: ibc_cashflow_pending_period,
    ibcTxsPending: ibc_transfers_pending_period,
    ibcTxsChart: chart_transfers,
    ibcVolumeChart: chart_cashflow || [],
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
