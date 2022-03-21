import { useMemo } from 'react';
import gql from 'graphql-tag';

import { useRealtimeQuery } from 'common/hooks';

const CHANNEL_GROUP_STAT_FRAGMENT = gql`
  fragment group_stats on ft_channel_group_stats {
    is_zone_up_to_date
    zone_counterparty
    zone_counterparty_label_url
    is_zone_counterparty_up_to_date
    zone_counterparty_readable_name
    ibc_cashflow_in
    ibc_cashflow_in_diff
    ibc_cashflow_in_pending
    ibc_cashflow_out
    ibc_cashflow_out_diff
    ibc_cashflow_out_pending
    ibc_tx_success_rate
    ibc_tx_success_rate_diff
    ibc_tx
    ibc_tx_diff
    ibc_tx_failed
    ibc_tx_failed_diff
    ibc_tx_pending
  }
`;

const CHANNELS_STAT_FRAGMENT = gql`
  fragment channels_stats on ft_channels_stats {
    zone_website
    zone_readable_name
    zone_label_url
    ibc_cashflow_in
    ibc_cashflow_in_diff
    ibc_cashflow_in_pending
    ibc_cashflow_out
    ibc_cashflow_out_diff
    ibc_cashflow_out_pending
    ibc_tx
    ibc_tx_diff
    ibc_tx_failed
    ibc_tx_failed_diff
    ibc_tx_success_rate
    ibc_tx_success_rate_diff
    ibc_tx_pending
    channel_id
    zone_counterparty
    zone_counterparty_channel_id
    zone_counterparty_readable_name
    client_id
    connection_id
    is_opened
  }
`;

const CHANNEL_GROUP_STAT_QUERY = gql`
  query ChannelGroupStat($source: String!, $period: Int!) {
    ft_channel_group_stats(
      where: { zone: { _eq: $source }, timeframe: { _eq: $period } }
    ) {
      ...group_stats
    }
    ft_channels_stats(
      where: { zone: { _eq: $source }, timeframe: { _eq: $period } }
    ) {
      ...channels_stats
    }
  }
  ${CHANNEL_GROUP_STAT_FRAGMENT}
  ${CHANNELS_STAT_FRAGMENT}
`;

const CHANNEL_GROUP_STAT_SUBSCRIPTION = gql`
  subscription ChannelGroupStat($source: String!, $period: Int!) {
    ft_channel_group_stats(
      where: { zone: { _eq: $source }, timeframe: { _eq: $period } }
    ) {
      ...group_stats
    }
    ft_channels_stats(
      where: { zone: { _eq: $source }, timeframe: { _eq: $period } }
    ) {
      ...channels_stats
    }
  }
  ${CHANNEL_GROUP_STAT_FRAGMENT}
  ${CHANNELS_STAT_FRAGMENT}
`;

const CHANNEL_GROUP_STAT_QUERY_ONLY_MAINNET = gql`
  query ChannelGroupStat($source: String!, $period: Int!) {
    ft_channel_group_stats(
      where: {
        zone: { _eq: $source }
        timeframe: { _eq: $period }
        is_zone_counterparty_mainnet: { _eq: true }
      }
    ) {
      ...group_stats
    }
    ft_channels_stats(
      where: {
        zone: { _eq: $source }
        timeframe: { _eq: $period }
        is_zone_counterparty_mainnet: { _eq: true }
      }
    ) {
      ...channels_stats
    }
  }
  ${CHANNEL_GROUP_STAT_FRAGMENT}
  ${CHANNELS_STAT_FRAGMENT}
`;

const CHANNEL_GROUP_STAT_SUBSCRIPTION_ONLY_MAINNET = gql`
  subscription ChannelGroupStat($source: String!, $period: Int!) {
    ft_channel_group_stats(
      where: {
        zone: { _eq: $source }
        timeframe: { _eq: $period }
        is_zone_counterparty_mainnet: { _eq: true }
      }
    ) {
      ...group_stats
    }
    ft_channels_stats(
      where: {
        zone: { _eq: $source }
        timeframe: { _eq: $period }
        is_zone_counterparty_mainnet: { _eq: true }
      }
    ) {
      ...channels_stats
    }
  }
  ${CHANNEL_GROUP_STAT_FRAGMENT}
  ${CHANNELS_STAT_FRAGMENT}
`;

const transform = data => {
  const channelsGroup = data?.ft_channel_group_stats;
  const channels = data?.ft_channels_stats;
  const sourceZone = channels?.[0];

  const channelsGroupFormatted = channelsGroup
    ? channelsGroup.map(
        ({
          is_zone_up_to_date,
          zone_counterparty,
          zone_counterparty_label_url,
          is_zone_counterparty_up_to_date,
          zone_counterparty_readable_name,
          ibc_cashflow_in,
          ibc_cashflow_in_diff,
          ibc_cashflow_in_pending,
          ibc_cashflow_out,
          ibc_cashflow_out_diff,
          ibc_cashflow_out_pending,
          ibc_tx_success_rate,
          ibc_tx_success_rate_diff,
          ibc_tx,
          ibc_tx_diff,
          ibc_tx_failed,
          ibc_tx_failed_diff,
          ibc_tx_pending,
        }) => {
          const channelsFormatted = (channels || [])
            .filter(channel => channel.zone_counterparty === zone_counterparty)
            .map(channel => ({
              id: channel.connection_id,
              name: channel.connection_id, // TODO
              connectionId: channel.connection_id, // TODO
              zoneLabelUrl: channel.zone_label_url,
              zoneCounterpartyReadableName: zone_counterparty_readable_name,
              sourceZoneReadableName: sourceZone?.zone_readable_name,
              clientId: channel.client_id,
              volumeIn: channel.ibc_cashflow_in,
              volumeInDiff: channel.ibc_cashflow_in_diff,
              volumeInPending: channel.ibc_cashflow_in_pending,
              volumeOut: channel.ibc_cashflow_out,
              volumeOutDiff: channel.ibc_cashflow_out_diff,
              volumeOutPending: channel.ibc_cashflow_out_pending,
              ibcTxSuccess: channel.ibc_tx,
              ibcTxSuccessDiff: channel.ibc_tx_diff,
              ibcTxFailed: channel.ibc_tx_failed,
              ibcTxFailedDiff: channel.ibc_tx_failed_diff,
              ibcTxPending: channel.ibc_tx_pending,
              channelId: channel.channel_id,
              zoneCounterpartyChannelId: channel.zone_counterparty_channel_id,
              isOpened: channel.is_opened,
              successRate: channel.ibc_tx_success_rate / 100,
              successRateDiff: channel.ibc_tx_success_rate_diff / 100,
            }));

          return {
            id: zone_counterparty,
            name: zone_counterparty_readable_name,
            zoneCounterpartyReadableName: zone_counterparty_readable_name,
            zoneCounterpartyLabelUrl: zone_counterparty_label_url,
            sourceZoneLabelUrl: sourceZone?.zone_label_url,
            sourceZoneReadableName: sourceZone?.zone_readable_name,
            volumeIn: ibc_cashflow_in,
            volumeInDiff: ibc_cashflow_in_diff,
            volumeInPending: ibc_cashflow_in_pending,
            volumeOut: ibc_cashflow_out,
            volumeOutDiff: ibc_cashflow_out_diff,
            volumeOutPending: ibc_cashflow_out_pending,
            ibcTxSuccess: ibc_tx,
            ibcTxSuccessDiff: ibc_tx_diff,
            ibcTxFailed: ibc_tx_failed,
            ibcTxFailedDiff: ibc_tx_failed_diff,
            ibcTxPending: ibc_tx_pending,
            isZoneUpToDate: is_zone_up_to_date,
            isZoneCounterpartyUpToDate: is_zone_counterparty_up_to_date,
            successRate: ibc_tx_success_rate / 100,
            successRateDiff: ibc_tx_success_rate_diff / 100,
            subRows: channelsFormatted,
          };
        },
      )
    : null;

  return channelsGroupFormatted;
};

export const useChannelGroupStat = (options, isTestnetVisible) => {
  const channelGroup = useRealtimeQuery(
    isTestnetVisible
      ? CHANNEL_GROUP_STAT_QUERY
      : CHANNEL_GROUP_STAT_QUERY_ONLY_MAINNET,
    isTestnetVisible
      ? CHANNEL_GROUP_STAT_SUBSCRIPTION
      : CHANNEL_GROUP_STAT_SUBSCRIPTION_ONLY_MAINNET,
    options,
  );

  return useMemo(() => transform(channelGroup), [channelGroup]);
};
