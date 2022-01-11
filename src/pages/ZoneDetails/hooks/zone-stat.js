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
    ibc_cashflow_out
    ibc_cashflow_out_diff
    ibc_tx_success_rate
    ibc_tx_success_rate_diff
    ibc_tx
    ibc_tx_diff
    ibc_tx_failed
    ibc_tx_failed_diff
  }
`;

// TODO: Do we really need client_id
const CHANNELS_STAT_FRAGMENT = gql`
  fragment channels_stats on ft_channels_stats {
    zone_website
    zone_readable_name
    zone_label_url
    ibc_cashflow_in
    ibc_cashflow_in_diff
    ibc_cashflow_out
    ibc_cashflow_out_diff
    ibc_tx
    ibc_tx_diff
    ibc_tx_failed
    ibc_tx_failed_diff
    ibc_tx_success_rate
    ibc_tx_success_rate_diff
    channel_id
    zone_counterparty
    zone_counterparty_channel_id
    zone_counterparty_readable_name
    client_id
    connection_id
    is_opened
  }
`; // TODO: add is_zone_up_to_date

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
  const sourceZone = channels?.[0]; // TODO: Use a separate query for the source zone
  const sourceZoneFormatted = sourceZone
    ? {
        website: sourceZone.zone_website,
        name: sourceZone.zone_readable_name,
        labelUrl: sourceZone.zone_label_url,
      }
    : null;

  const channelsGroupFormatted = channelsGroup
    ? channelsGroup.map(
        ({
          is_zone_up_to_date, // Do we really need it here?
          zone_counterparty,
          zone_counterparty_label_url,
          is_zone_counterparty_up_to_date,
          zone_counterparty_readable_name,
          ibc_cashflow_in,
          ibc_cashflow_in_diff,
          ibc_cashflow_out,
          ibc_cashflow_out_diff,
          ibc_tx_success_rate,
          ibc_tx_success_rate_diff,
          ibc_tx,
          ibc_tx_diff,
          ibc_tx_failed,
          ibc_tx_failed_diff,
        }) => {
          const channelsFormatted = (channels || [])
            .filter(channel => channel.zone_counterparty === zone_counterparty)
            .map(channel => ({
              id: channel.connection_id,
              name: channel.connection_id,
              zoneLabelUrl: channel.zone_label_url,
              volumeIn: channel.ibc_cashflow_in,
              volumeInDiff: channel.ibc_cashflow_in_diff,
              volumeOut: channel.ibc_cashflow_out,
              volumeOutDiff: channel.ibc_cashflow_out_diff,
              ibcTxSuccess: channel.ibc_tx,
              ibcTxSuccessDiff: channel.ibc_tx_diff,
              ibcTxFailed: channel.ibc_tx_failed,
              ibcTxFailedDiff: channel.ibc_tx_failed_diff,
              channelId: channel.channel_id,
              zoneCounterpartyChannelId: channel.zone_counterparty_channel_id,
              isOpened: channel.is_opened,
            }));

          return {
            id: zone_counterparty,
            name: zone_counterparty_readable_name,
            zoneCounterpartyLabelUrl: zone_counterparty_label_url,
            sourceZoneLabelUrl: sourceZone?.zone_label_url,
            sourceZoneReadableName: sourceZone?.zone_readable_name,
            volumeIn: ibc_cashflow_in,
            volumeInDiff: ibc_cashflow_in_diff,
            volumeOut: ibc_cashflow_out,
            volumeOutDiff: ibc_cashflow_out_diff,
            ibcTxSuccess: ibc_tx,
            ibcTxSuccessDiff: ibc_tx_diff,
            ibcTxFailed: ibc_tx_failed,
            ibcTxFailedDiff: ibc_tx_failed_diff,
            subRows: channelsFormatted,
          };
        },
      )
    : null;

  return {
    channelGroup: channelsGroupFormatted,
    sourceZone: sourceZoneFormatted,
  };
};

export const useChannelGroupStat = (options, isTestnetVisible) => {
  const channelGroup = useRealtimeQuery(
    CHANNEL_GROUP_STAT_QUERY,
    CHANNEL_GROUP_STAT_SUBSCRIPTION,
    options,
  );

  const channelGroupMainnet = useRealtimeQuery(
    CHANNEL_GROUP_STAT_QUERY_ONLY_MAINNET,
    CHANNEL_GROUP_STAT_SUBSCRIPTION_ONLY_MAINNET,
    options,
  );

  return useMemo(
    () => transform(isTestnetVisible ? channelGroup : channelGroupMainnet),
    [isTestnetVisible, channelGroup, channelGroupMainnet],
  );
};
