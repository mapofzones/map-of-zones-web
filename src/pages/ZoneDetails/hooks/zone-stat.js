import { useMemo } from 'react';
import gql from 'graphql-tag';

import { useRealtimeQuery } from 'common/hooks';

const CHANNEL_GROUP_STAT_FRAGMENT = gql`
  fragment stat on ft_channel_group_stats {
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

const SOURCE_ZONE_INFO = `
  ft_channels_stats(where: { zone: { _eq: $source } }, limit: 1) {
    zone_website
    zone_readable_name
    zone_label_url
  }
`; // TODO: add is_zone_up_to_date

const CHANNEL_GROUP_STAT_QUERY = gql`
  query ChannelGroupStat($source: String!, $period: Int!) {
    ft_channel_group_stats(
      where: { zone: { _eq: $source }, timeframe: { _eq: $period } }
    ) {
      ...stat
    }
    ${SOURCE_ZONE_INFO}
  }
  ${CHANNEL_GROUP_STAT_FRAGMENT}
`;

const CHANNEL_GROUP_STAT_SUBSCRIPTION = gql`
  subscription ChannelGroupStat($source: String!, $period: Int!) {
    ft_channel_group_stats(
      where: { zone: { _eq: $source }, timeframe: { _eq: $period } }
    ) {
      ...stat
    }
    ${SOURCE_ZONE_INFO}
  }
  ${CHANNEL_GROUP_STAT_FRAGMENT}
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
      ...stat
    }
    ${SOURCE_ZONE_INFO}
  }
  ${CHANNEL_GROUP_STAT_FRAGMENT}
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
      ...stat
    }
    ${SOURCE_ZONE_INFO}
  }
  ${CHANNEL_GROUP_STAT_FRAGMENT}
`;

const transform = data => {
  const channels = data?.ft_channel_group_stats;
  const sourceZone = data?.ft_channels_stats;
  const sourceZoneFormatted = sourceZone
    ? {
        website: sourceZone.zone_website,
        name: sourceZone.zone_readable_name,
        labelUrl: sourceZone.zone_label_url,
      }
    : null;

  const channelsFormatted = channels
    ? channels.map(
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
          return {
            id: zone_counterparty,
            name: zone_counterparty_readable_name,
            // zoneLabelUrl: zone_label_url,
            zoneCounterpartyLabelUrl: zone_counterparty_label_url,
          };
        },
      )
    : null;

  return {
    channelGroup: channelsFormatted,
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
